// Standalone static file server + /api/chat, backed by a local Ollama
// instance instead of a cloud API. RAG: retrieves matching entries from
// data/qa-data.js and feeds them to the model as context instead of letting
// it free-generate medical advice.
const http = require('http');
const fs = require('fs');
const path = require('path');

const MEDISIN_QA = require('./data/qa-data.js');
const { topMatches } = require('./data/qa-retrieve.js');

const PORT = process.env.PORT || 3000;
const OLLAMA_URL = process.env.OLLAMA_URL || 'http://localhost:11434/api/chat';
const OLLAMA_MODEL = process.env.OLLAMA_MODEL || 'qwen3.5:0.8b';

const MIME = {
    '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
    '.json': 'application/json', '.png': 'image/png', '.webmanifest': 'application/manifest+json'
};

function serveStatic(req, res) {
    const urlPath = decodeURIComponent(req.url.split('?')[0]);
    const filePath = path.join(__dirname, urlPath === '/' ? 'index.html' : urlPath);
    if (!filePath.startsWith(__dirname)) return res.writeHead(403).end('Forbidden');

    fs.readFile(filePath, (err, data) => {
        if (err) return res.writeHead(404).end('Not found');
        const ext = path.extname(filePath);
        res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
        res.end(data);
    });
}

function readBody(req) {
    return new Promise((resolve, reject) => {
        let raw = '';
        req.on('data', (chunk) => { raw += chunk; });
        req.on('end', () => {
            try { resolve(raw ? JSON.parse(raw) : {}); }
            catch (e) { reject(e); }
        });
        req.on('error', reject);
    });
}

async function handleChat(req, res) {
    let body;
    try { body = await readBody(req); }
    catch { return res.writeHead(400, { 'Content-Type': 'application/json' }).end(JSON.stringify({ error: 'Invalid JSON body' })); }

    const { contents, system_instruction } = body;
    if (!Array.isArray(contents) || contents.length === 0) {
        return res.writeHead(400, { 'Content-Type': 'application/json' }).end(JSON.stringify({ error: 'contents array missing' }));
    }

    const systemText = (system_instruction?.parts?.[0]?.text || '').trim();
    const lastUserText = [...contents].reverse()
        .find((c) => c?.role !== 'model')?.parts?.map((p) => p?.text || '').join('\n') || '';

    const matches = topMatches(MEDISIN_QA, lastUserText, 3);
    const contextBlock = matches.length
        ? 'CONTEXT (use this to answer if relevant):\n' + matches.map((m) => `- ${m.reply}`).join('\n')
        : 'CONTEXT: (no matching entry in the health-info dataset)';

    const messages = [
        {
            role: 'system',
            content: `${systemText}\n\n${contextBlock}\n\nAnswer using the CONTEXT above when it's relevant. If it doesn't cover the question, say you don't have that specific information and suggest calling 911 or telling an adult if it sounds urgent. Do not invent medical advice not grounded in the CONTEXT.`
        },
        ...contents.map((c) => ({
            role: c?.role === 'model' ? 'assistant' : 'user',
            content: (c?.parts || []).map((p) => p?.text || '').join('\n').trim()
        })).filter((m) => m.content)
    ];

    try {
        const ollamaRes = await fetch(OLLAMA_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ model: OLLAMA_MODEL, stream: false, messages })
        });

        if (!ollamaRes.ok) {
            const detail = await ollamaRes.text();
            return res.writeHead(502, { 'Content-Type': 'application/json' })
                .end(JSON.stringify({ error: `Ollama returned ${ollamaRes.status}`, detail }));
        }

        const data = await ollamaRes.json();
        const reply = data?.message?.content;
        if (!reply) {
            return res.writeHead(502, { 'Content-Type': 'application/json' }).end(JSON.stringify({ error: 'Ollama returned no reply', raw: data }));
        }

        res.writeHead(200, { 'Content-Type': 'application/json' }).end(JSON.stringify({ reply }));
    } catch (err) {
        res.writeHead(502, { 'Content-Type': 'application/json' }).end(JSON.stringify({
            error: `Could not reach Ollama at ${OLLAMA_URL}. Is "ollama serve" running and is the ${OLLAMA_MODEL} model pulled?`,
            detail: err.message
        }));
    }
}

const server = http.createServer((req, res) => {
    if (req.url === '/api/chat' && req.method === 'POST') return handleChat(req, res);
    if (req.method === 'GET') return serveStatic(req, res);
    res.writeHead(405).end('Method not allowed');
});

server.listen(PORT, () => {
    console.log(`MedisinACSHS running at http://localhost:${PORT}`);
    console.log(`Chat backed by Ollama model "${OLLAMA_MODEL}" at ${OLLAMA_URL}`);
});
