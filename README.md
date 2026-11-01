# Tam Nguyen — engineering portfolio

A creative, case-study-led portfolio for data, ML, and AI engineering. Built on Next.js App Router, React, strict TypeScript, Tailwind CSS, Lucide, and a locally served Manrope variable font. No database, form backend, tracking service, or secrets are required.

**Live portfolio:** [tam-nguyen-portfolio-snowy.vercel.app](https://tam-nguyen-portfolio-snowy.vercel.app)

## Run locally

Use Node.js 24 and npm. The package engine is pinned to `24.x` for the production runtime.

```sh
npm ci
npm run dev
```

The development server uses port 3000. Webpack is selected explicitly because Turbopack’s CSS-worker helper ports are restricted in this cloud environment; this supported Next.js option also works on Vercel.

## Commands

```sh
npm run dev          # Development server
npm run lint         # ESLint
npx tsc --noEmit      # Strict TypeScript checking
npm run build        # Production compilation and prerendering
npm start            # Production server
npm test             # Playwright + axe browser checks
npm run test:config  # Production-origin validation tests (Node 24)
npm run format:check # Prettier consistency
npm run format       # Format source and documentation
```

Build before running browser tests. Tests start a production server on port 3000, or reuse a running one outside CI; stop an outdated server before testing a new build. The cloud machine has `/usr/bin/chromium`. Set `CHROMIUM_PATH` on other machines to your Chromium executable, or adjust Playwright to use a locally installed Playwright-managed browser. Firefox/WebKit are not assumed to be installed.

## Structure

```text
src/app/                    Routes, global styles, robots, sitemap
  projects/[slug]/          Source-grounded engineering case studies
  opengraph-image/route.tsx  Generated social-preview image
  about/ experience/        Education, background, dated experience
  contact/ resume/          Direct contact and optional PDF download
src/components/             Navigation, evidence charts, SVG sketches,
                            cards, architecture, tables, decision callouts
src/content/site.ts         Identity, contacts, education, skills, experience
src/content/projects.ts     Typed projects, sections, tables, decisions
src/content/evidence.ts     Pinned source links, chart data and project proof
src/lib/                    Origin validation, metadata, resume detection
public/                     Phone-redacted resume.pdf and original evidence assets
tests/                      Browser, accessibility and config tests
docs/content-audit.md       Sources, corrections, and benchmark scope
docs/design-v2.md           Visual and implementation decisions
docs/validation.md          Executed checks and limitations
```

## Updating information

Edit `src/content/site.ts`. Confirmed contact details, Chicago location, education, GPA, Mathematics minor, Dean’s List, target roles, experience dates and skills are centralized there. Do not publish a phone number. A direct `mailto:` link is provided; there is no contact form.

The supplied **November Data Engineer.pdf** has been reviewed against the portfolio. Its public copy is included at `public/resume.pdf`, with the phone number removed to honor the instruction not to publish it. The original upload is unchanged. See the content audit for resume alignment and source-reviewed project claims.

## Add or edit a project

Edit the typed `projects` array in `src/content/projects.ts`:

- Use a unique slug, verified repository URL, title, category/filter labels, technologies, and four architecture nodes.
- Select an existing `visual` type, or add a schematic in `ProjectVisual`.
- Supply a scoped primary metric, summary, evidence note, decision callouts, and sections. Sections support optional `table`, `points`, and expandable `details`.
- Set `featured: true` for homepage inclusion; keep the featured set to three.
- Add a record in `src/content/evidence.ts` to provide problem/build/result, validation and deployment scope, and immutable source links. Only add chart data or artifacts supported by those records. Store actual assets in `public/evidence`; document their provenance in the content audit.
- Routes, gallery and sitemap derive from the data. Keep facts, experiment context, limitations and future proposals distinct. Never add fabricated example code or metrics.

QuickScout’s 76 current CI tests are separate from the 74-test historical hosted builds and the local Airflow proof. Recommendation API latency is a **local** five-client benchmark. Video results are qualitative outcomes on 19 clips. The former handwriting page redirects to source-verified multi-label image classification; those metrics were not handwriting results.

## Resume integration

The current public resume is at `public/resume.pdf`. To update it, review the new PDF for private contact information, replace this file, then rebuild. The `/resume` page checks for that file at build time and exposes open/download actions only when it exists. Downloads use `Tam-Nguyen-Resume.pdf`. Missing files produce a useful experience/projects fallback. Do not generate a replacement document.

## Visual system and accessibility

Warm ivory, forest ink, and teal support editorial typography and custom system illustrations. The homepage leads with roles, credentials, scoped proof points, and direct project/resume actions. Featured projects immediately answer problem, build, result, and evidence. The former interactive hero was removed; full technical capabilities now live on About. Architecture illustrations remain conceptual; evidence charts are redrawn from pinned records, not new experiments. Project cards have restrained hover movement, and sections translate slightly into place without making text transparent. Motion stops for `prefers-reduced-motion`. Content remains readable without JavaScript; interactive filtering and navigation use small client components.

Semantic headings, focus outlines, a skip link, Escape-to-close mobile navigation, labeled figures, real tables, native `details`, and scrollable table regions support keyboard use. Manrope is bundled through `next/font/local` from `@fontsource-variable/manrope` (OFL-1.1; license distributed with the package); no external font host is contacted at runtime.

## Vercel Hobby production

The existing project is **tam-nguyen-portfolio**, in the personal **chicothelaanhs-projects** workspace on the free **Hobby** plan. Reuse this project; do not create a duplicate or purchase a domain.

- Production URL: `https://tam-nguyen-portfolio-snowy.vercel.app` (assigned and verified by Vercel).
- Repository: `ChiCoTheLaAnh/duc-tam-nguyen-portfolio`.
- Production branch: `main`; other branches use Preview deployments.
- Runtime: Node.js `24.x`; framework: Next.js.
- Install: `npm ci`; build: `npm run build`; default output directory.
- Production variable: **`NEXT_PUBLIC_SITE_URL=https://tam-nguyen-portfolio-snowy.vercel.app`**.
- Automatic Git deployments are enabled. Pushes to `main` deploy to Production; do not add a separate GitHub Actions deployment pipeline.

The production origin was read from Vercel’s project-domain API before configuring the variable. Keep origin validation enabled. If the assigned production domain changes, update the Production variable and redeploy so canonical URLs, Open Graph image URLs, robots and sitemap reflect the new origin. Do not guess a `.vercel.app` hostname. The origin parser validates format, not ownership or availability.

For previews, either leave `NEXT_PUBLIC_SITE_URL` unset (no canonical/social-image origin is published) or use the confirmed canonical production origin. Local builds without an origin intentionally emit no canonical URLs, social-image URLs, or sitemap entries.

See `docs/deployment-status.md` for the verified settings and deployment record. The CLI’s local `.vercel/` directory and `.env.local` are ignored and must never be committed. No paid plan, custom domain, or paid observability feature is needed.

## Git

Dependencies, `.next`, environment files, `.vercel`, temporary logs, coverage and test results are ignored. Use normal commits and pushes; never force-push over remote history. Environment publication and GitHub pushes do not constitute a Vercel deployment.
