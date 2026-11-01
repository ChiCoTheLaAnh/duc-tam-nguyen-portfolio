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
