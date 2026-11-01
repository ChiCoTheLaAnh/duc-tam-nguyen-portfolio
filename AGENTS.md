# Project conventions

- Work in this existing checkout; the cloud task is isolated. Do not create worktrees unless requested.
- Use Node.js 24 (package engine `24.x`) and `npm ci`. Keep package-lock.json in sync with dependency changes.
- Run `npm run lint`, `npm run typecheck`, `npm run build`, then `npm test` and `npm run test:config` for substantial changes.
- Next.js App Router and server components are the default. Client components are limited to stateful interactions.
- Personal information belongs in src/content/site.ts; projects belong in src/content/projects.ts. Do not scatter contact strings across components.
- Never invent achievements, dates, benchmarks, URLs, or deployment claims. Identify missing evidence and label proposed improvements accurately.
- Missing contacts must produce no broken links. The resume route checks public/resume.pdf at build time and must offer a useful fallback.
- Preserve V2’s warm ivory, forest ink, and teal visual system, locally served Manrope, and editorial project layouts. Reuse components, accessible diagrams, CSS tokens, and responsive patterns.
- Keep keyboard controls, semantic headings, visible focus states and prefers-reduced-motion support.
- Bundle the Manrope variable font locally through next/font/local. Avoid remote fonts, heavy animation dependencies, unnecessary client code, databases, authentication, and CMS infrastructure.
- NEXT_PUBLIC_SITE_URL is optional locally and required on Vercel production. Use the actual assigned HTTPS origin; never guess a .vercel.app URL. Metadata, robots and sitemap must not publish localhost fallbacks. Do not deploy without explicit approval. Never put secrets in public variables.
- Use Webpack scripts here: Turbopack CSS workers cannot bind their helper port in this environment.
- Browser tests use system Chromium; CHROMIUM_PATH overrides the executable for other environments.

- Read docs/content-audit.md before editing factual claims. Keep CI/hosted/local test counts and local/cloud benchmark results separate.
- The old handwriting-recognition route redirects to the source-verified multi-label image classification project. Do not restore the incorrect metric attribution.
- Use pageMetadata for each public content route. Keep Person affiliation current; do not label an enrolled student as an alumnus.
- Section motion must not fade text into low contrast; reduced motion, keyboard access, and no-JavaScript readability are required.

- The homepage is evidence-first: roles and resume CTA, three project proof cards, compact experience, contact. Keep technical capabilities on About; do not restore the interactive hero.
- Project proof and chart data belong in src/content/evidence.ts. Keep percent improvements relative to the stated baseline and qualitative tracking outcomes separate from accuracy metrics.
- Only use genuine, inspected source artifacts in public/evidence. Keep immutable source links and provenance; charts must be labeled as redrawn from recorded results, never as new experiments.
