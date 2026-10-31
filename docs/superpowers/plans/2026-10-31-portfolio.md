# Portfolio Implementation Plan

**Goal:** Deliver a responsive, credible portfolio for Tam Nguyen.
**Architecture:** App Router server pages, structured content, shared diagrams and cards; client navigation and project filters.
**Stack:** Next.js, React, strict TypeScript, Tailwind CSS, Lucide.
**Spec:** ../../../design.md and the user-provided portfolio brief.

## Constraints and review focus

- Use only supplied achievements; clearly separate proposed work.
- Hide missing social links; render a fallback when the resume PDF is absent.
- Check navigation and project filters on mobile and desktop.
- Check overflow, keyboard access, reduced motion, heading hierarchy and contrast.
- Verify all routes, sitemap, robots, Open Graph image, and 404 behavior.

## Tasks

- [x] Initialize dependencies and strict TypeScript configuration.
- [x] Define site, experience and case-study content types and data.
- [x] Implement shared layout, navigation, cards, diagrams and all routes.
- [x] Implement responsive design and reduced-motion rules.
- [x] Run lint, type checking, production build and browser smoke/accessibility checks.
- [x] Document configuration, resume handling, project additions and Vercel deployment.
