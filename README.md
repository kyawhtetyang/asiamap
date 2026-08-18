# AsiaMap

AsiaMap is a transportation business website for container and cargo services.

**Current version:** `v0.1.0`

## Repository

```text
asiamap/
├── README.md
├── CHANGELOG.md
├── docs/
│   ├── ARCHITECTURE.md
│   ├── ROADMAP.md
│   └── OPERATIONS.md
├── frontend/
└── sanity/
```

## Current Product

The active website is in `frontend/` and uses Next.js, React, and TypeScript.

Pages:

- `/` — Home
- `/services` — Services
- `/contact` — Contact

`sanity/` is reserved for a future CMS integration. No custom backend exists in `v0.1.0`.

## Local Development

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
cd frontend
npm run build
npm start
```

## Deployment

Target platform: Vercel.

- Root directory: `frontend`
- Build command: `npm run build`
- Framework: Next.js

See `docs/OPERATIONS.md` for the operational contract.

## Documentation

- `docs/ARCHITECTURE.md` — current system design and boundaries
- `docs/ROADMAP.md` — planned product evolution
- `docs/OPERATIONS.md` — local, deployment, and recovery procedures
- `CHANGELOG.md` — released version history

## v0.1.0 Launch Gaps

The baseline intentionally records the current pre-production state. Before public launch:

- replace placeholder phone, location, address, and WhatsApp details;
- confirm exact transportation services and coverage regions;
- replace the current `mailto:` inquiry flow with a production form workflow;
- complete production metadata, SEO, accessibility, and deployment verification.
