# MedisinACSHS

Static first-aid/health-info site with an AI assistant. The assistant runs
fully local via [Ollama](https://ollama.com) — no cloud API key, no external
calls. It's retrieval-augmented: `data/qa-data.js` is the health-info
dataset, `server.js` retrieves matching entries and feeds them to the model
as context so answers stay grounded in that data instead of free-generated.

## Setup

```bash
ollama pull qwen3.5:0.8b   # falls back to qwen3.5:4b if that tag isn't available
ollama serve                # skip if already running as a background service
npm start
```

Open `http://localhost:3000`.

Override the model or Ollama URL with env vars: `OLLAMA_MODEL`, `OLLAMA_URL`.
