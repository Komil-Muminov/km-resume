# Deployment & Secrets Guide

Short guide to deploy the server and securely set `GEMINI_API_KEY` and
`SERVICE_TOKEN`.

General:

- Do NOT commit `.env` to git. Use the platform's secret manager.
- Ensure `GEMINI_API_KEY` is restricted in Google Cloud to only necessary APIs
  and server IPs.

Vercel:

- In Project Settings → Environment Variables, add `GEMINI_API_KEY`,
  `SERVICE_TOKEN`, `MONGODB_URI`, `PORT`.
- For the server, deploy as a separate project (Vercel Serverless functions) or
  a container. If using serverless, adapt `src/index.ts` to work in serverless
  handlers.

Netlify:

- In Site settings → Build & deploy → Environment, add secrets.
- Netlify functions are serverless — adapt if necessary.

Render / DigitalOcean App / Heroku:

- Configure environment variables in dashboard.
- Deploy via Git or Docker. Ensure the `PORT` is taken from env.

Google Cloud (Compute Engine / Cloud Run):

- Cloud Run: set secrets via `--set-env-vars` or use Secret Manager and mount
  secrets.
- Ensure the service has a static outbound IP if you plan to restrict the API
  key by IP.

CI/CD:

- Use repository secrets or platform secrets; never echo secrets in logs.

Testing after deploy:

- Call `/health` to check server is up.
- Call frontend and ensure `/api/generate` returns `200` and `sessionId`.
