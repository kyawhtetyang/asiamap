# AsiaMap

AsiaMap is a transportation business website for container and cargo services in Myanmar.

**Current version:** `v0.2.0`

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
- `/api/inquiry` — server-side transport inquiry endpoint

The inquiry form posts to the Next.js route handler, which delivers inquiries through Resend. `sanity/` remains reserved for a future CMS integration. No application database or standalone backend exists in `v0.2.0`.

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
- Required production configuration: see `frontend/.env.example` and `docs/OPERATIONS.md`

## Documentation

- `docs/ARCHITECTURE.md` — current system design and boundaries
- `docs/ROADMAP.md` — planned product evolution
- `docs/OPERATIONS.md` — local, deployment, configuration, release, and recovery procedures
- `CHANGELOG.md` — released version history

## v0.2.0 Remaining Production Work

The business-ready application is implemented. Remaining production verification includes:

- verify the final production domain and canonical URL configuration;
- verify an AsiaMap-owned sender domain for inquiry email when available;
- add automated tests and CI gates in a later engineering release;
- add anti-spam/rate-limiting controls before inquiry traffic materially increases;
- verify production monitoring, accessibility, SEO, and deployment behavior before `v1.0.0`.
