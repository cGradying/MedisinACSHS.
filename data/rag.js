// RAG knowledge store: admin-uploaded txt/md/pdf files, chunked and scored
// by keyword overlap at query time (same style of match as the old
// qa-data.js, just against freeform chunks instead of curated Q&A entries).
// Server-only (CommonJS) — no browser use, so no dual export needed.
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Lives under the static-served data/ dir, but server.js's static-file MIME
// allowlist (.html/.js/.css/.png/.webmanifest only) has no .txt/.json entry,
// so these files 404 through the static route — not directly fetchable.
// Don't add .txt or .json to that allowlist without moving this store first.
const STORE_DIR = path.join(__dirname, 'rag-store');
const MANIFEST_PATH = path.join(STORE_DIR, 'manifest.json');
const ALLOWED_EXT = new Set(['.txt', '.md', '.pdf']);
const CHUNK_SIZE = 800; // chars; small enough for a 0.8B model's short context

function normalize(str) {
    return String(str || '')
        .toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

const STOPWORDS = new Set([
    'ang', 'ng', 'ko', 'mo', 'na', 'ba', 'po', 'opo', 'ito', 'yun', 'yung',
    'ay', 'si', 'ni', 'kay', 'din', 'rin', 'lang', 'naman', 'kasi', 'pa',
    'raw', 'daw', 'ho', 'oo', 'ka', 'kayo', 'tayo', 'kami', 'sila', 'niya',
    'nila', 'namin', 'natin', 'doon', 'dito', 'paano', 'pano', 'ano',
    'sino', 'saan', 'kailan', 'bakit', 'sa',
    'a', 'an', 'the', 'is', 'are', 'am', 'it', 'to', 'of', 'in', 'on',
    'and', 'for', 'with', 'my', 'your', 'his', 'her', 'their', 'our',
    'has', 'have', 'had', 'you', 'i', 'me', 'we', 'do', 'did', 'does',
    'this', 'that', 'these', 'those', 'be', 'was', 'were'
]);

function ensureStore() {
    fs.mkdirSync(STORE_DIR, { recursive: true });
    if (!fs.existsSync(MANIFEST_PATH)) fs.writeFileSync(MANIFEST_PATH, '{}');
}

function readManifest() {
    ensureStore();
    try { return JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8')); }
    catch { return {}; }
}

function writeManifest(manifest) {
    fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
}

function listDocs() {
    const manifest = readManifest();
    return Object.entries(manifest).map(([id, meta]) => ({ id, ...meta }));
}

// Splits on blank lines first (keeps paragraphs whole where they fit), then
// hard-slices anything still over CHUNK_SIZE. Good enough for a keyword
// scorer — no need for sentence-aware splitting here.
function chunkText(text) {
    const chunks = [];
    const paragraphs = String(text || '').split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
    for (const para of paragraphs) {
        for (let i = 0; i < para.length; i += CHUNK_SIZE) {
            chunks.push(para.slice(i, i + CHUNK_SIZE));
        }
    }
    return chunks;
}

async function extractText(buffer, ext) {
    if (ext === '.pdf') {
        const { PDFParse } = require('pdf-parse');
        const parser = new PDFParse({ data: buffer });
        try {
            const result = await parser.getText();
            return result.text;
        } finally {
            await parser.destroy();
        }
    }
    return buffer.toString('utf8'); // .txt / .md
}

async function saveDoc(originalName, buffer) {
    const ext = path.extname(originalName).toLowerCase();
    if (!ALLOWED_EXT.has(ext)) throw new Error(`Unsupported file type "${ext}" — only .txt, .md, .pdf`);

    const text = await extractText(buffer, ext);
    if (!text.trim()) throw new Error('No extractable text found in file');

    const id = crypto.randomUUID();
    ensureStore();
    fs.writeFileSync(path.join(STORE_DIR, `${id}.txt`), text);

    const manifest = readManifest();
    manifest[id] = { originalName, ext, uploadedAt: new Date().toISOString(), chars: text.length };
    writeManifest(manifest);
    return { id, ...manifest[id] };
}

function deleteDoc(id) {
    const manifest = readManifest();
    if (!manifest[id]) return false;
    fs.rmSync(path.join(STORE_DIR, `${id}.txt`), { force: true });
    delete manifest[id];
    writeManifest(manifest);
    return true;
}

function scoreChunk(chunkTokens, queryTokens) {
    let score = 0;
    for (const t of queryTokens) if (chunkTokens.has(t)) score += 1;
    return score;
}

// ponytail: re-reads and re-chunks every stored doc on every request — fine
// for a handful of admin-uploaded files on a single-user local server;
// switch to an in-memory cache invalidated by manifest mtime if the doc
// count or request rate ever makes this show up.
function topChunks(query, n) {
    const normalizedQuery = normalize(query);
    const queryTokens = new Set(normalizedQuery.split(' ').filter((w) => w && !STOPWORDS.has(w)));
    if (queryTokens.size === 0) return [];

    const manifest = readManifest();
    const scored = [];
    for (const [id, meta] of Object.entries(manifest)) {
        const filePath = path.join(STORE_DIR, `${id}.txt`);
        let text;
        try { text = fs.readFileSync(filePath, 'utf8'); }
        catch { continue; }

        for (const chunk of chunkText(text)) {
            const chunkTokens = new Set(normalize(chunk).split(' ').filter(Boolean));
            const score = scoreChunk(chunkTokens, queryTokens);
            if (score > 0) scored.push({ score, text: chunk, source: meta.originalName });
        }
    }

    return scored.sort((a, b) => b.score - a.score).slice(0, n || 3);
}

module.exports = { listDocs, saveDoc, deleteDoc, topChunks, ALLOWED_EXT };
