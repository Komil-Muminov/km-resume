# km-resume Server

This is a modular Node.js Express server (TypeScript) that proxies requests to
the Gemini API.

Important: DO NOT commit your real API key. Use environment variables or a
secret manager.

Required environment variables (copy from `.env.example`):

- `GEMINI_API_KEY` — your Gemini API key
- `MONGODB_URI` — MongoDB connection string (optional; defaults to local)
- `PORT` — port to run the server (default 4000)

Local development:

1. Copy `.env.example` to `.env` and fill values.
2. Install deps:

```bash
cd server
npm install
```

3. Run in dev mode:

```bash
npm run dev
```

Security notes:

- Never place `GEMINI_API_KEY` in client code or commit it to Git.
- Restrict the key in Google Cloud to only the required APIs and server IPs.
- Add authentication to `/api/generate` if exposing the endpoint publicly.
