# Vercel production deployment

## Confirmed project and account

- Live URL: **https://tam-nguyen-portfolio-snowy.vercel.app**.
- Project: `tam-nguyen-portfolio` (`prj_O64WiMvi43ch0ZnBeJjfQGRfSSOU`).
- Personal account: `chicothelaanh`; workspace: `chicothelaanhs-projects`.
- Plan: **Hobby**, confirmed from the account/team API and CLI. No plan upgrade, domain purchase, or paid observability feature was used.
- Existing projects were checked before creation; the pre-existing QuickScout project was left intact.

## Build and continuous deployment

- GitHub repository: `ChiCoTheLaAnh/duc-tam-nguyen-portfolio`.
- Production branch: `main`; other branches use Preview deployments.
- Git-triggered deployments: enabled (`gitProviderOptions.createDeployments=enabled`).
- Framework: Next.js; Node.js: `24.x`.
- Install command: `npm ci`; build command: `npm run build`.
- Production variable: `NEXT_PUBLIC_SITE_URL=https://tam-nguyen-portfolio-snowy.vercel.app`.
- Vercel’s domain API returned the verified hostname before the variable was set. Application origin validation was preserved.
- No GitHub Actions deployment pipeline was added.

## Initial verified release

- Implementation commit: `9acaeee376df1f94fa53d0c36de3a3f2157f6699` on `main`.
- First production deployment: `dpl_6R7jGVHFo79cSTftaF6DHgr8S1uA`.
- Vercel reported Ready; build logs show the expected Git commit, `npm ci`, successful Next.js compilation/type checking, static generation, and deployment completion.
- The canonical production hostname returned HTTP 200 over HTTPS. HTTP redirected to HTTPS with status 308.
- The supplied, phone-redacted resume is included at `/resume.pdf`.
- Live Chromium testing identified Vercel’s static-file filename override. `vercel.json` now sets `Content-Disposition: inline; filename="Tam-Nguyen-Resume.pdf"` so browser downloads preserve the intended name while the open-in-tab action still works.

The deployment-documentation update is also used to verify that a normal push to `main` triggers another Production deployment through the native Git integration. The latest deployment’s exact Git SHA is available in Vercel deployment details; documentation-only commits do not change the verified application implementation.

## Verification scope

Live validation checks all 11 content routes at mobile, tablet, and desktop widths, canonical and Open Graph origins, sitemap/robots, internal links, diagrams, contact destinations, interactive navigation/filtering, disclosure, reduced motion, and an actual PDF download matching the public asset. Build logs and included runtime/request error queries are inspected separately.

Only Chromium is available for browser automation. Mailto/LinkedIn/GitHub destinations are checked for correctness; sending email or authenticating to third-party profiles is outside validation. No separate push to a Preview branch is required for the configured default branch mapping, and no synthetic feature branch is created just to test it.

## Authentication and local files

Vercel authorization used the official browser device flow. No password or token was requested in chat. `.vercel/` and `.env.local` remain ignored; never commit their contents. The cloud environment network allowlist includes the required Vercel API/auth hosts and `.vercel.app` hosts.
