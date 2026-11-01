# Portfolio V2 validation — October 31, 2026

## Executed checks

- `npm run lint`: passed, zero errors or warnings.
- `npx tsc --noEmit`: passed with strict TypeScript.
- `npm run format:check`: passed.
- `npm run build`: passed using the supported Next.js Webpack build; 17 static outputs generated.
- `npm test`: 9 Playwright tests covering 11 public content routes.
- `npm run test:config`: 1 production-origin guard/normalization test passed.

Browser checks run in system Chromium. Route, heading, WCAG A/AA axe checks, console/page-error checks, and horizontal-overflow checks cover 375, 768 and 1440 pixel widths. Additional rendered checks cover 320-pixel narrow screens. Functional cases cover project filtering, mobile navigation, Escape key, skip link, no-JavaScript mobile navigation, reduced-motion system-diagram behavior, hero discipline controls, confirmed personal/experience data, three featured projects, six Airflow task labels, case-study tables and disclosure, internal links, legacy project redirect, 404s, robots, sitemap and social image.

Desktop/mobile full-page homepage screenshots and desktop/mobile case-study screenshots were inspected. Final visual adjustments added a fact node to the QuickScout schematic and a narrow-screen table-scroll hint. Source review caught the no-JavaScript mobile navigation issue; a progressive enhancement baseline and a dedicated regression test address it.

## Limits

- Chromium was available; Firefox and WebKit were not installed, so no cross-engine claim is made.
- Automated accessibility checks do not replace manual assistive-technology review.
- The November PDF has since been supplied. The follow-up integration tests the real public download and separately preserves missing-file detection coverage; see the resume integration record below.
- Content uses the confirmed V2 brief, supplied November resume, and inspected public source. Underlying ML experiments, data pipelines and benchmarks were not rerun.
- GitHub repositories were accessible through native Git. The LinkedIn URL and mailto address match the confirmed brief; inbox delivery and LinkedIn authentication/availability are not tested.
- The actual Vercel-assigned origin is not available. Local builds intentionally publish no canonical/social-image origins or sitemap entries. Format/production guard tests exercise the origin resolver. Final deployed metadata must be checked after the real origin is set.
- No cloud ML demo, Vercel deployment, domain purchase, or paid service was created.

## November resume integration follow-up

- Read the supplied original PDF and compared education, dates, titles, skills and project metrics with the portfolio. Added coursework and source-confirmed experience details; corrected NIST FRTE notation to 1:N.
- Created `public/resume.pdf` from the supplied PDF with only the phone number redacted. Verified all other extracted text is unchanged, no phone text or telephone link remains, and the original upload is unchanged. Inspected the rendered public PDF; it remains one page with contact hyperlinks.
- Fresh checks passed: ESLint, strict TypeScript, Prettier, production build, 9 Playwright browser/accessibility tests, and 2 configuration/asset-detection tests.
- Browser validation downloaded the actual PDF successfully as `Tam-Nguyen-Resume.pdf`, checked HTTP 200, PDF content type and file signature. A separate isolated file-detection test covers the missing-asset fallback.
- The resume follow-up was initially kept local. V3 deployment preparation includes it in the release on GitHub; environment publication and Vercel production deployment remain separate actions.

## Evidence-first homepage and case-study update

- Preserved the role-focused hero, May 2027 UIC graduation, scoped proof points, and direct resume download.
- Removed the interactive hero; featured evidence now follows the introduction. Condensed homepage experience and moved technical capabilities to About.
- Added problem/build/result/evidence summaries, source-pinned charts, explicit local/deployment scope, an actual Airflow screenshot and original rerun/recovery outputs. Public artifacts were byte-compared with the pinned source files; hashes are in the content audit.
- Local checks passed: lint, strict TypeScript, production build, 9 existing/updated Playwright tests across 11 routes and three widths, 3 configuration/evidence-consistency tests, formatting and whitespace checks.
- Obsolete explorer interaction tests were replaced with proof-card/source checks; reduced-motion checks now target project cards. Other navigation, filtering, download, accessibility and no-JavaScript coverage remains.
- Inspected desktop/mobile rendered pages, narrow 320px layout, the loaded optimized screenshot, and real output links. This validates the website presentation; no project experiments were rerun.

## Personal portfolio and HTML resume update

- Introduced Tam by name, UIC studies, interests and opportunities; simplified About, Experience, Contact and project framing without removing project evidence.
- Replaced the download-only resume route with complete server-rendered HTML sourced from the supplied November resume: education, both internships, three projects, technical skills and teaching. Preserved benchmark scope and external NIST context. The phone remains private.
- Added responsive section navigation and print styles. PDF availability controls only the secondary download action.
- Passed lint, strict TypeScript, production build, 10 Playwright tests and 3 configuration tests. Browser coverage includes 11 routes at mobile, tablet and desktop widths, accessibility, navigation, filtering, source evidence, downloads, metadata, no-JavaScript resume reading and print layout. Desktop/mobile homepage and HTML resume screenshots were inspected.
- Independent content/code review found no actionable issues.

## Artifact-led personal project stories

- Moved concise internship/teaching responsibilities and a resume summary before selected work; the user confirmed data engineering as the main direction.
- Replaced card metric graphics and repeated answer grids with distinct engineering narratives and source artifacts: original local Airflow screenshot/log, captured FastAPI fixture JSON, and unchanged tracking frames extracted from the supplied slides. Detailed benchmarks and limitations remain in case studies.
- Captured the existing recommender fixture through its actual API, asserted HTTP 200 and exact equality with offline bundle output. This was a synthetic-fixture behavior check, not a retail-model benchmark reproduction.
- Inspected desktop/mobile homepage and gallery screenshots. Browser checks cover actual image loading, artifact captions, original slide clip destinations, experience ordering, filtering, navigation, no-JavaScript behavior, responsive HTML resume, PDF download, metadata, accessibility and horizontal overflow.
- The original slide links target Google Drive, outside the current network allowlist; current playback/sharing permissions remain unverified. Local comparison frames are available without Drive or JavaScript. No video file or portrait was supplied.
- Final checks passed: ESLint, strict TypeScript, production build, all 10 Playwright tests, all 3 configuration tests, Prettier and whitespace checks. The final gallery spacing is present in the built CSS; a fresh production-server check confirms the short secondary card no longer stretches to the tracking card's height.
