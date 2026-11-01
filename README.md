# Tam Nguyen — engineering portfolio

A creative, case-study-led portfolio for data, ML, and AI engineering. Built on Next.js App Router, React, strict TypeScript, Tailwind CSS, Lucide, and a locally served Manrope variable font. No database, form backend, tracking service, or secrets are required.

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
src/components/             Navigation, hero system explorer, SVG sketches,
                            cards, architecture, tables, decision callouts
src/content/site.ts         Identity, contacts, education, skills, experience
src/content/projects.ts     Typed projects, sections, tables, decisions
src/lib/                    Origin validation, metadata, resume detection
public/                     Static assets; phone-redacted resume.pdf
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
- Set `featured: true` for homepage inclusion. The first featured project receives the lead layout; keep the featured set to three.
- Routes, gallery and sitemap derive from the data. Keep facts, experiment context, limitations and future proposals distinct. Never add fabricated example code or metrics.

QuickScout’s 76 current CI tests are separate from the 74-test historical hosted builds and the local Airflow proof. Recommendation API latency is a **local** five-client benchmark. Video results are qualitative outcomes on 19 clips. The former handwriting page redirects to source-verified multi-label image classification; those metrics were not handwriting results.

## Resume integration

The current public resume is at `public/resume.pdf`. To update it, review the new PDF for private contact information, replace this file, then rebuild. The `/resume` page checks for that file at build time and exposes open/download actions only when it exists. Downloads use `Tam-Nguyen-Resume.pdf`. Missing files produce a useful experience/projects fallback. Do not generate a replacement document.

## Visual system and accessibility

Warm ivory, forest ink, and teal support editorial typography and custom system illustrations. The hero has three keyboard-operable discipline buttons; illustrations are conceptual, not live service dashboards. Project cards have restrained hover movement, and sections translate slightly into place without making text transparent. Motion stops for `prefers-reduced-motion`. Content remains readable without JavaScript; interactive filtering/navigation and hero switching use small client components.

Semantic headings, focus outlines, a skip link, Escape-to-close mobile navigation, labeled figures, real tables, native `details`, and scrollable table regions support keyboard use. Manrope is bundled through `next/font/local` from `@fontsource-variable/manrope` (OFL-1.1; license distributed with the package); no external font host is contacted at runtime.

## Vercel Hobby deployment — requires your approval

No deployment, purchase, or custom domain is required or performed automatically. Use Vercel’s free personal/Hobby option and its assigned `.vercel.app` hostname.

1. Import `ChiCoTheLaAnh/duc-tam-nguyen-portfolio` into Vercel. Select the Next.js preset, repository root, and Node.js 24. Use `npm ci` and `npm run build`; keep the default output settings.
2. Review the project name/hostname Vercel actually assigns. Do not assume a requested subdomain is available. If the setup screen does not expose the final production origin yet, create a preview first after approving deployment, then obtain the assigned production domain in project settings.
3. Set **`NEXT_PUBLIC_SITE_URL`** for Production to that actual HTTPS origin with no path, credentials, query, or port. Do not include invented domains or localhost. The application refuses a Vercel production build without this value. For previews, either leave it unset (no canonical/social-image origin is published) or use the confirmed canonical production origin.
4. The public resume is included. Deploy to Production only after approval. Rebuild/redeploy whenever the origin or PDF changes; these are evaluated at build time.
5. Verify canonical metadata, social image, `/robots.txt`, `/sitemap.xml`, contacts, case-study links and the PDF download. The sitemap should include all content pages under the assigned origin.

Without an origin, local builds intentionally emit no canonical URLs, social-image URLs, or sitemap entries. The generated image endpoint still works locally. This avoids publishing development/placeholder origins. The origin parser can validate format, not domain ownership or availability; confirm the actual hostname in Vercel.

## Git

Dependencies, `.next`, environment files, `.vercel`, temporary logs, coverage and test results are ignored. Use normal commits and pushes; never force-push over remote history. Environment publication and GitHub pushes do not constitute a Vercel deployment.
