const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 4000;
const DATA_DIR = path.join(__dirname, 'src', 'data');
const MESSAGES_FILE = path.join(DATA_DIR, 'messages.json');

// Ensure data dir and file exist
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(MESSAGES_FILE)) fs.writeFileSync(MESSAGES_FILE, '[]', 'utf8');

const server = http.createServer((req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  if (req.method === 'POST' && req.url === '/api/messages') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', async () => {
      try {
        const payload = JSON.parse(body || '{}');
        const { professionalId, message, sender = null } = payload;
        if (!professionalId || !message) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ error: 'professionalId and message are required' }));
        }

        const now = new Date().toISOString();
        const entry = { id: Date.now(), professionalId, message, sender, createdAt: now };

        const raw = await fs.promises.readFile(MESSAGES_FILE, 'utf8');
        const arr = JSON.parse(raw || '[]');
        arr.push(entry);
        await fs.promises.writeFile(MESSAGES_FILE, JSON.stringify(arr, null, 2), 'utf8');

        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: true, entry }));
      } catch (err) {
        console.error(err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'internal' }));
      }
    });
    return;
  }

  if (req.method === 'GET' && req.url === '/api/messages') {
    fs.promises.readFile(MESSAGES_FILE, 'utf8')
      .then((raw) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(raw);
      })
      .catch((err) => {
        console.error(err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'internal' }));
      });
    return;
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'not_found' }));
});

server.listen(PORT, () => console.log(`Message server listening on http://localhost:${PORT}`));
