# MedisinACSHS

Static first-aid/health-info site with an AI assistant. The assistant runs
fully local via [Ollama](https://ollama.com) — no cloud API key, no external
calls. It's retrieval-augmented (RAG): an admin panel lets you upload
`.txt`/`.md`/`.pdf` health-info documents, `server.js` chunks and
keyword-matches them per question, and feeds the matching text to the model
as context so answers stay grounded in that data instead of free-generated.

## Setup

```bash
npm install                # installs pdf-parse (used for PDF uploads)
ollama pull qwen3.5:0.8b   # falls back to qwen3.5:4b if that tag isn't available
ollama serve                # skip if already running as a background service
ADMIN_TOKEN=pick-a-password npm start
```

Open `http://localhost:3000`. Env vars: `PORT`, `OLLAMA_MODEL`, `OLLAMA_URL`,
`OLLAMA_NUM_CTX`, `ADMIN_TOKEN`.

## Admin: managing RAG documents

Open `http://localhost:3000/admin.html`, enter the `ADMIN_TOKEN` you started
the server with, and upload `.txt`/`.md`/`.pdf` files. Uploaded documents are
stored (as extracted plain text) under `data/rag-store/`, which is
git-ignored — they live on the machine running the server, not in the repo.
Without `ADMIN_TOKEN` set, the admin routes are disabled entirely.

## Deploying on a Raspberry Pi as a kiosk webapp

Runs the server as a `systemd` service that starts on boot, and opens the
assistant full-screen in Chromium once it's up. Tested against Raspberry Pi
OS with desktop (Bookworm).

**1. Install Node.js and Ollama on the Pi**
```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs chromium-browser
curl -fsSL https://ollama.com/install.sh | sh   # installs Ollama + its own systemd service
ollama pull qwen3.5:0.8b
```

**2. Clone the repo and install deps**
```bash
git clone https://github.com/cGradying/MedisinACSHS.git ~/MedisinACSHS
cd ~/MedisinACSHS && npm install
```

**3. Create `/etc/systemd/system/medisinacshs.service`**
```ini
[Unit]
Description=MedisinACSHS server
After=network.target ollama.service
Wants=ollama.service

[Service]
Type=simple
User=pi
WorkingDirectory=/home/pi/MedisinACSHS
ExecStart=/usr/bin/node server.js
Environment=ADMIN_TOKEN=pick-a-password
Environment=PORT=3000
Restart=on-failure
RestartSec=3

[Install]
WantedBy=multi-user.target
```
Enable it:
```bash
sudo systemctl daemon-reload
sudo systemctl enable --now medisinacshs.service
```

**4. Auto-open Chromium in kiosk mode on desktop login**

Create `~/kiosk.sh` — waits for the server to actually respond before
launching Chromium (it starts faster than the Node process + model warm-up):
```bash
#!/bin/bash
until curl -sf http://localhost:3000/ -o /dev/null; do sleep 1; done
chromium-browser --kiosk --noerrdialogs --disable-infobars --incognito \
  "http://localhost:3000/A.i%20asistant.html"
```
```bash
chmod +x ~/kiosk.sh
```

Add it to LXDE's autostart so it runs after desktop login (enable auto-login
via `sudo raspi-config` → System Options → Boot / Auto Login → Desktop
Autologin first):
```bash
mkdir -p ~/.config/lxsession/LXDE-pi
cat >> ~/.config/lxsession/LXDE-pi/autostart <<'EOF'
@xset s off
@xset -dpms
@xset s noblank
@/home/pi/kiosk.sh
EOF
```

Reboot — the server comes up via systemd, and Chromium opens full-screen on
the assistant page once it responds.
