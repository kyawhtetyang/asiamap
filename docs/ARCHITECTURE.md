# Architecture

## Status

Version: `v0.1.0`

AsiaMap is currently a small business website with a single active frontend application and a reserved CMS area.

## System Shape

```text
Visitor
  ↓
Next.js frontend
  ├── Home
  ├── Services
  └── Contact
       ↓
   mailto inquiry

Future content management
  ↓
Sanity CMS
```

## Repository Boundaries

```text
frontend/   # active production application
sanity/     # reserved future CMS integration
```

The frontend owns presentation, routing, static business content, and the current inquiry interface.

No custom API or application database exists in `v0.1.0`.

## Frontend Structure

```text
frontend/src/
├── app/          # Next.js App Router pages and layout
├── components/   # reusable UI components
├── data/         # centralized business/site content
└── styles.css    # shared styling
```

## Current Technology

- Next.js 15
- React 19
- TypeScript
- Vercel target deployment

## Architectural Principles

1. Keep business content separate from page composition where practical.
2. Prefer reusable components over duplicated page markup.
3. Add infrastructure only when a real product requirement requires it.
4. Keep Sanity, backend/API, and database concerns outside the frontend until adopted.
5. Documentation must describe the implemented system, not speculative architecture.

## Current Boundaries

Stable in `v0.1.0`:

- Next.js frontend
- App Router page structure
- reusable component layer
- centralized content module

Expected to evolve:

- inquiry submission
- CMS/content ownership
- production metadata and SEO
- business contact and trust content
