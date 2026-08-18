# Operations

## Scope

Operational contract for AsiaMap `v0.1.0`.

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

A release candidate should not be merged if the production build fails.

## Deployment

Target: Vercel.

Expected configuration:

- Root directory: `frontend`
- Framework: Next.js
- Build command: `npm run build`

## Configuration

`v0.1.0` has no documented application secrets or custom backend environment variables.

If future releases add external APIs, databases, email providers, or Sanity credentials, document the required variable names here without committing secret values.

## Release Procedure

```text
roadmap item
   ↓
implementation branch
   ↓
review + build verification
   ↓
merge to main
   ↓
update CHANGELOG
   ↓
tag release
```

Version rules:

- patch (`0.1.1`) → backward-compatible fixes to an existing capability;
- minor (`0.2.0`) → meaningful new pre-stable capability;
- major (`1.0.0`) → first stable production contract or later breaking stable change.

## Recovery

For a bad deployment:

1. identify the last known-good commit or deployment;
2. roll back through the deployment platform or revert the faulty commit;
3. verify Home, Services, and Contact routes;
4. verify inquiry behavior;
5. record the corrective change in `CHANGELOG.md` if released.

## Production Verification

Before a public release verify:

- `/` loads successfully;
- `/services` loads successfully;
- `/contact` loads successfully;
- navigation works on desktop and mobile;
- business contact details are real;
- inquiry submission behaves as documented;
- page metadata is correct;
- no obvious placeholder content remains.
