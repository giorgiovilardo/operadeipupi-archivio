# CLAUDE.md

## Stack

Svelte 5 (runes) · Tailwind CSS 4 + DaisyUI 5 (customized `autumn` theme) · svelte-spa-router v5 (hash-based, `use:link`) · Vite (`base: '/archivio/'`) · TypeScript strict · Vitest · ESLint + Prettier

## Commands

```bash
npm run check    # svelte-check + tsc
npm run lint     # ESLint
npm run test     # Vitest
npm run build    # Vite production build
```

Always run all four before considering work done.

## Deploy

Static SPA on shared Aruba hosting (Apache, no Node.js). FTP deploy via GitHub Actions (`deploy.yml`, manual trigger). Secrets: `VITE_API_BASE`, `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`.

## API

WordPress headless CMS + ACF. Base URL from `VITE_API_BASE` env var (`.env`, `.env.dist` as template). All fetch functions in `src/lib/api.ts`. Pagination via `x-wp-totalpages` header, search via `?search=` param. Company slug-to-endpoint mapping in `src/lib/companies.ts`.

## Theme colors

Overridden via `@plugin "daisyui/theme"` in `src/app.css` to match the legacy Bulma palette:

- Primary: `#7f0917` (burgundy — navbar, primary buttons)
- Secondary: `#0e7c7b` (teal — links, footer background, search button)
- Info: `#de9e36`, Success: `#82d173`, Warning: `#ff4b3e`, Error: `#985f99`
- Font: PT Serif

## Key files

- `src/lib/router.ts` — all routes
- `src/lib/api.ts` — API client, typed models
- `src/lib/companies.ts` — 11 companies config + `getCompanyBySlug()`
- `src/lib/companyDescriptions.ts` — static HTML content + logos per company
- `src/app.css` — theme overrides, Bulma-equivalent typography (`.content-body`), hero banner, nav-link styles

## Architecture decisions

- One parameterized `CompanyPage.svelte` serves all 11 companies (not 11 separate pages)
- `restoreScrollState` on Router handles scroll-to-top on navigation
- Navbar uses `items-stretch` for full-height hover backgrounds (Bulma parity)
- Static content pages use `.content-body` class for typography
