# Serbia-marketplace

Mreža Ukusa MVP prototype (Serbian-first B2B sourcing network).

## Product Docs

- [Mreža Ukusa — PRD v2](docs/PRD-v2.md)

## Run locally

```bash
cd web
python3 -m http.server 4173
```

Open: http://localhost:4173

## Implemented MVP routes

- `/`, `/sr`, `/en`
- `/login`, `/signup`
- `/onboarding/grower`, `/onboarding/buyer`
- `/dashboard`, `/dashboard/products`, `/dashboard/requests`, `/dashboard/matches`, `/dashboard/messages`, `/dashboard/profile`
- `/admin/verifications`, `/admin/matches`, `/admin/agents`


## Deploy on Vercel

This repository is configured for **zero-config Vercel deployment** using `vercel.json` rewrites to serve the `web/` app from the domain root.

- No `.env` file is required.
- No build command is required for deployment.
- Public routes like `/`, `/sr`, `/en`, `/dashboard`, and `/admin/verifications` are mapped directly to `web/`.
