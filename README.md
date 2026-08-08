# AsiaMap Workspace

Workspace for the AsiaMap transportation website.

## Current Shape
- `frontend/` is the active React/Vite website.
- `sanity/` is reserved for the future CMS integration after the frontend is stable.
- No custom backend exists yet.

## Frontend Pages
- `/`
- `/services`
- `/contact`

## Local Frontend Run
```bash
cd /Users/kyawhtet/Documents/EDU/execution/02_Web/10_AsiaMap/v0/frontend
npm install
npm run dev
open http://127.0.0.1:5173/
```

## Deploy
- Target: Vercel
- Build command: `npm run build`
- Output directory: `dist`
- Root directory: `frontend`
- Route shape: SPA rewrites for `/services` and `/contact`

## Before Public Launch
- Replace placeholder phone, email, location, and WhatsApp link.
- Confirm exact transportation services and coverage regions.
- Replace `mailto:` action if a real form backend is chosen.
