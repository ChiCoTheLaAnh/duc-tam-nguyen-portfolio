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
- The actual November resume PDF was unavailable; the missing-PDF fallback is tested. A real download remains untested until the asset is provided. No replacement resume was generated.
- Content uses the confirmed V2 brief and inspected public source. The original resume could not be compared, and underlying ML experiments, data pipelines and benchmarks were not rerun.
- GitHub repositories were accessible through native Git. The LinkedIn URL and mailto address match the confirmed brief; inbox delivery and LinkedIn authentication/availability are not tested.
- The actual Vercel-assigned origin is not available. Local builds intentionally publish no canonical/social-image origins or sitemap entries. Format/production guard tests exercise the origin resolver. Final deployed metadata must be checked after the real origin is set.
- No cloud ML demo, Vercel deployment, domain purchase, or paid service was created.
