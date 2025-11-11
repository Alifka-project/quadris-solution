# Quadris Solutions Web Rebuild

Modern, SEO-ready reimplementation of [https://quadris.solutions/d/en/](https://quadris.solutions/d/en/) using Next.js App Router, TypeScript, Tailwind, shadcn/ui foundations, and Framer Motion micro-interactions. All copy originates from the live Quadris Solutions site (no synthetic data).

## Stack
- Next.js 16 (App Router) + TypeScript
- Tailwind v4 with custom CSS variables
- shadcn/ui tooling + lucide-react icons
- Framer Motion for subtle motion (respecting `prefers-reduced-motion`)
- next/font (Inter + DM Sans + JetBrains Mono)
- next-sitemap for sitemap/robots generation
- zod-validated server actions for the contact form

## Brand Tokens
Global tokens live in `app/globals.css` and map to the official Quadris logo palette (`#4146A7`).

```css
:root {
  --brand-primary-600: #2f338f;
  --brand-primary-500: #4146a7;
  --brand-primary-400: #5b61c4;
  --brand-primary-100: #e7e9f8;
  --bg: #f7f9fc;
  --surface: #ffffff;
  --text: #0f1720;
  --muted: #5a6575;
  --border: #e6ebf2;
  --halo: rgba(0, 0, 0, 0.06);
}
```

Heading and body typography is controlled through `--font-heading` (DM Sans) and `--font-sans` (Inter). Components consume these tokens via Tailwind’s `@theme` layer.

## Commands
- `npm run dev` – start local development (http://localhost:3000)
- `npm run lint` – ESLint across the repo
- `npm run build` – production build (also generates sitemap + robots via `postbuild`)
- `npm run sitemap` – regenerate sitemap/robots without a full build (requires previous `next build`)

The build produces `public/sitemap.xml`, `public/sitemap-0.xml`, and `public/robots.txt` for deployment.

## Architecture Notes
- Locale-aware routing lives under `app/[locale]`. Only `en` is active today; additional locales can be enabled by:
  1. Adding the locale code to `supportedLocales` in `app/[locale]/layout.tsx`
  2. Duplicating the content modules under `content/` with translated copy
  3. Replacing the links in `lib/navigation.ts` with locale-prefixed paths
- `components/structured-data.tsx` injects JSON-LD for both the organization (layout) and individual services (per page).
- The contact form (`components/forms/contact-form.tsx`) posts to the `submitContact` server action with zod validation. Replace the console log in `actions.ts` with a mailer or CRM integration in production.
- `/og` is an edge route generating dynamic Open Graph images. Metadata helpers in `lib/metadata.ts` ensure every page references `/og?...` variants for OG/Twitter cards.

## Assets & Imagery
- Official logo sourced from `https://quadris.solutions/d/img/logo-quadris.svg` (`public/brand/logo-quadris.svg`).
- Portraits mirror the legacy site (`francesco-castellazzi.png`, `raphael-de-stefano.png`).
- Hero photography uses a Matterhorn landscape from Unsplash (downloaded locally to avoid external requests).

## Future Localisation
To add German (`de`) or Spanish (`es`):
1. Duplicate the `en` sub-tree under `app/[locale]/(site)` or introduce dictionary loaders.
2. Update `locales` in `lib/navigation.ts` to mark the locale as `available: true`.
3. Provide translated assets/content; avoid placeholder or machine-translated text per project requirements.

## Accessibility & Performance
- `prefers-reduced-motion` is honoured globally; focus states use high-contrast outlines.
- All imagery uses `next/image` for responsive optimisation.
- Lighthouse 95+ targets: avoid layout thrash, lazy-load below-the-fold sections, and run `npm run build` before profiling.

## Deployment Checklist
1. `npm run build`
2. Verify `/og?title=Quadris%20Solutions` renders correctly
3. Deploy `.next`, `public/robots.txt`, `public/sitemap*.xml`
4. Configure environment secrets for the contact form integration (if sending email)

Feel free to open `package.json` for script reference or `content/` for authoritative page copy.
