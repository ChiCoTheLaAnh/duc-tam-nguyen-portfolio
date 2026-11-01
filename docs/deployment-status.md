# Vercel production deployment preparation

## Release source

- Repository: `ChiCoTheLaAnh/duc-tam-nguyen-portfolio`, branch `main`.
- Runtime pinned to Node.js `24.x` in package.json and package-lock.json.
- Install: `npm ci`; build: `npm run build`.
- The release includes the supplied, phone-redacted `public/resume.pdf` and verified resume-aligned content. No redesign was performed.
- Local verification passed: lint, strict TypeScript, production build, 9 Playwright browser/accessibility tests and 2 configuration/asset tests.

## Access blockers

The official Vercel CLI is installed outside the application in the current cloud instance, but is logged out. No Vercel credentials were requested in chat. No project was created or altered, so the account plan, project existence, production hostname, Git integration and deployments are not yet confirmed.

The cloud proxy rejected the required Vercel API connection. The environment draft contains these additive network destinations, preserving the package-manager preset:

- `api.vercel.com`
- `vercel.com`
- `auth.vercel.com`
- `*.vercel.app`

These saved network requirements must be applied in environment settings before authentication, project lookup or live-site checks can proceed. Saving a draft does not apply it to the running instance.

## Continue after access is enabled

Use the official secure browser login flow; never request or expose passwords or access tokens. Inspect the personal account/plan and existing projects before creating anything. Reuse the project linked to the repository if it exists; otherwise create the preferred project only in a confirmed Hobby scope. Do not upgrade plans, buy domains, delete projects, or force-push history.

Connect the GitHub repository with Production branch `main` and Preview deployments for other branches. Read the actual Vercel-assigned production hostname, set Production `NEXT_PUBLIC_SITE_URL` to that HTTPS origin, retain application origin validation, and trigger a production deployment from the verified Git commit. Inspect build/runtime logs and verify the live pages, contacts, resume, navigation, filtering, diagrams, HTTPS, canonical/OG metadata, robots and sitemap before reporting success. No deployment-related GitHub Actions workflow is needed.
