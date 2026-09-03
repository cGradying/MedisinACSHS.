// Shared keyword-match scoring for MEDISIN_QA. Loaded as a <script> in the
// browser (window.QaRetrieve) and required() from server.js (module.exports)
// — one scoring implementation for both the client fallback and server RAG.
(function () {
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

    function scoreEntry(entry, normalizedInput, inputTokens) {
        let bestPhraseScore = 0;
        for (const phrase of entry.keywords) {
            const words = normalize(phrase).split(' ').filter((w) => w && !STOPWORDS.has(w));
            if (!words.length) continue;
            const matchedWords = words.filter((w) =>
                w.length <= 3 ? inputTokens.has(w) : normalizedInput.includes(w)
            );
            const phraseScore = matchedWords.length === words.length
                ? words.length + 1
                : matchedWords.length * 0.5;

            if (phraseScore > bestPhraseScore) {
                bestPhraseScore = phraseScore;
            }
        }
        return bestPhraseScore;
    }

    function findBestQaMatch(qaList, normalizedInput) {
        const inputTokens = new Set(normalizedInput.split(' ').filter(Boolean));
        let best = null;
        let bestScore = 0;
        for (const entry of (qaList || [])) {
            const score = scoreEntry(entry, normalizedInput, inputTokens);
            if (score > bestScore) {
                bestScore = score;
                best = entry;
            }
        }
        return bestScore >= 1 ? best : null;
    }

    // Top-N matches by score, for RAG context (best match alone can miss
    // adjacent relevant entries a small model would still benefit from).
    function topMatches(qaList, rawInput, n) {
        const normalizedInput = normalize(rawInput);
        const inputTokens = new Set(normalizedInput.split(' ').filter(Boolean));
        return (qaList || [])
            .map((entry) => ({ entry, score: scoreEntry(entry, normalizedInput, inputTokens) }))
            .filter((r) => r.score >= 1)
            .sort((a, b) => b.score - a.score)
            .slice(0, n || 3)
            .map((r) => r.entry);
    }

    const api = { normalize, findBestQaMatch, topMatches };
    if (typeof window !== 'undefined') window.QaRetrieve = api;
    if (typeof module !== 'undefined') module.exports = api;
})();
