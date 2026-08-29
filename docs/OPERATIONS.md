# Operations

## Scope

Operational contract for AsiaMap `v0.2.0`.

## Local Development

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
cd frontend
npm run build
npm start
```

A release candidate must not be merged if the production build fails.

## Deployment

Target: Vercel.

Expected configuration:

- Root directory: `frontend`
- Framework: Next.js
- Build command: `npm run build`

## Configuration

The inquiry endpoint requires server-side environment configuration. Variable names are documented in `frontend/.env.example`; secret values must never be committed.

Required:

- `RESEND_API_KEY` — Resend API credential used only by the server-side inquiry route.
- `INQUIRY_TO_EMAIL` — destination inbox for transport inquiries.

Optional:

- `INQUIRY_FROM_EMAIL` — sender identity. Until an AsiaMap-owned sending domain is verified, the application may use the Resend onboarding sender for testing.

Production configuration should be stored in the Vercel environment, not source control.

## Inquiry Flow

```text
Contact form
   ↓
POST /api/inquiry
   ↓
server-side validation + sanitization
   ↓
Resend
   ↓
AsiaMap inquiry inbox
```

If required inquiry configuration is missing, the endpoint returns `503`. Provider delivery failures return `502`; invalid requests return `400`.

## Release Procedure

```text
roadmap item
   ↓
implementation branch
   ↓
review + build verification
   ↓
release documentation synchronized
   ↓
merge to main
   ↓
tag release
```

Version rules:

- patch (`0.2.1`) → backward-compatible fixes to an existing capability;
- minor (`0.3.0`) → meaningful new pre-stable capability;
- major (`1.0.0`) → first stable production contract or later breaking stable change.

Before tagging, verify `package.json`, README, architecture, operations, roadmap status, and changelog all describe the same version.

## Recovery

For a bad deployment:

1. identify the last known-good commit or deployment;
2. roll back through Vercel or revert the faulty commit;
3. verify Home, Services, Contact, and not-found routes;
4. verify `/api/inquiry` behavior and one controlled inquiry submission when configuration permits;
5. record the corrective change in `CHANGELOG.md` if released.

## Production Verification

Before a public release verify:

- `/` loads successfully;
- `/services` loads successfully;
- `/contact` loads successfully;
- unknown routes render the expected 404 experience;
- `robots.txt` is generated correctly;
- navigation works on desktop and mobile;
- business contact details are real;
- inquiry validation works;
- configured inquiry delivery reaches the intended inbox;
- page metadata and canonical/domain configuration are correct;
- no obvious placeholder content remains;
- no secret values are committed;
- production build passes.

## Deferred Production Hardening

Before `v1.0.0`, evaluate or implement as required:

- automated unit/integration and browser smoke tests;
- CI build/type/test gates;
- inquiry anti-spam/rate limiting;
- security headers/CSP;
- production error monitoring;
- analytics only if the business has a defined measurement need;
- verified AsiaMap sender domain and final production domain/canonical configuration.
