# Architecture

## Status

Version: `v0.2.0`

AsiaMap is a small business website with one active Next.js application, a lightweight server-side inquiry route, and a reserved CMS area.

## System Shape

```text
Visitor
  ↓
Next.js application
  ├── Home
  ├── Services
  ├── Contact
  │    ↓
  │  InquiryForm
  │    ↓
  └── POST /api/inquiry
           ↓
        Resend API
           ↓
      AsiaMap inbox

Future content management
  ↓
Sanity CMS
```

## Repository Boundaries

```text
frontend/   # active production application and inquiry route
sanity/     # reserved future CMS integration
```

The frontend owns presentation, routing, static business content, inquiry validation, and the server-side email submission endpoint.

`v0.2.0` does not use an application database or a standalone custom backend. The Next.js route handler is intentionally the only server-side application surface required by the current product.

## Frontend Structure

```text
frontend/src/
├── app/
│   ├── api/inquiry/  # server-side inquiry delivery
│   ├── contact/      # contact page
│   ├── services/     # services page
│   └── ...           # layout, home, robots, not-found
├── components/       # reusable UI components
├── data/             # centralized business/site content
└── styles.css        # shared styling
```

## Current Technology

- Next.js 15
- React 19
- TypeScript
- Next.js App Router and Route Handlers
- Resend for inquiry email delivery
- Vercel target deployment

## Architectural Principles

1. Keep business content separate from page composition where practical.
2. Prefer reusable components over duplicated page markup.
3. Add infrastructure only when a real product requirement requires it.
4. Keep CMS, database, ERP/CRM, and other backend concerns outside the application until adopted.
5. Keep secrets server-side and configure them through environment variables.
6. Documentation must describe the implemented system, not speculative architecture.

## Stable v0.2.0 Boundaries

- Next.js frontend and App Router page structure
- reusable component layer
- centralized content module
- server-side `/api/inquiry` route
- Resend-based inquiry delivery
- baseline metadata and `robots.txt`

## Expected to Evolve

- visual/brand system
- automated testing and CI
- anti-spam and rate limiting
- production monitoring
- final domain/canonical configuration
- verified sender domain
- CMS/content ownership if operationally justified
