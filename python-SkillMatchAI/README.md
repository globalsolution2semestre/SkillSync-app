# SkillMatch AI backend — Deploy & Local Guide

Este diretório contém o backend Flask usado pela funcionalidade SkillMatch AI.

Resumo rápido
- Arquivo principal: `app.py`
- Requisitos: `requirements.txt` (Flask, flask-cors, python-dotenv, google-genai, gunicorn)
- Start (produção): `gunicorn app:app`

Variáveis de ambiente necessárias
- `SKILLMATCH_API_KEY` — chave da API do provedor GenAI (obrigatório)
- `PORT` — porta usada pelo servidor (opcional, default 5000)
- `FLASK_DEBUG` — definir `1` para debug local (não usar em produção)

Rodando localmente (dev)
1. Crie e ative seu virtualenv e instale dependências:
```bash
python -m venv .venv
source .venv/Scripts/activate   # Windows Bash
pip install -r requirements.txt
```
2. Crie um arquivo `.env` dentro desta pasta com a chave (NUNCA commit):
```text
SKILLMATCH_API_KEY=suachaveaqui
```
3. Rode a aplicação:
```bash
python app.py
```
4. Verifique o health endpoint:
```bash
curl http://localhost:5000/health
```

Testando o endpoint `/processar-chat` localmente
```bash
curl -X POST http://localhost:5000/processar-chat \
  -H "Content-Type: application/json" \
  -d '{"nome":"Joao","profissao":"Desenvolvedor Frontend","skills":"HTML,CSS,React"}'
```

Deploy no Render (passos seguros)
1. No Render, clique em **New → Web Service**.
2. Conecte seu repositório GitHub e selecione `globalsolution2semestre/SkillSync-app`.
3. Importante: defina **Root Directory** como `python-SkillMatchAI` (o `app.py` está aí).
4. Language / Runtime: Python (Render detecta automaticamente se necessário).
5. Build Command: deixe vazio ou `pip install -r requirements.txt`.
6. Start Command: `gunicorn app:app` (ou deixe o Procfile como `web: gunicorn app:app`).
7. Health check path: `/health`.
8. Em Settings → Environment, adicione `SKILLMATCH_API_KEY` com o valor da sua nova chave (rotacione/revoque a chave antiga se estiver comprometida).
9. Configure `FLASK_DEBUG=0` em produção.
10. Deploy e aguarde a URL pública.

Atualizar frontend (Vercel)
- No frontend (Vercel), crie uma environment variable `REACT_APP_BACKEND_URL` com o valor `https://<sua-app>.onrender.com`.
- No código frontend, use essa variável para construir chamadas, por exemplo:
```js
const BACKEND = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';
fetch(`${BACKEND}/processar-chat`, { method: 'POST', ... })
```
- Re-deploy do frontend no Vercel.

Segurança e boas práticas
- Nunca commit chaves em `.env`. Garanta que `.gitignore` contenha `.env`.
- Se a chave foi exposta no Git, revogue/rotacione imediatamente e considere limpar histórico (BFG/git-filter-repo) — isso é destrutivo, faça com cuidado.
- Use chaves com escopo mínimo quando possível.

Suporte / Debug
- Logs: Render mostra logs de build e runtime; verifique mensagens de `app.logger` para erros de inicialização do cliente GenAI.
- Se o backend responder `api_key_present: false` no `/health`, verifique a variável `SKILLMATCH_API_KEY` no painel do Render.

Se quiser, eu posso:
- A) Atualizar o frontend para usar `REACT_APP_BACKEND_URL` automaticamente e commitar as mudanças.
- B) Guiar você passo-a-passo pela criação do Web Service no Render (eu descrevo cada campo enquanto você preenche).
- C) Ajudar a rotacionar a chave e reconfigurar tudo.
