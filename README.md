# Dependable Roofing Pros — Website

A fast, modern, SEO-optimized marketing website for **Dependable Roofing Pros**, a roofing contractor in **Coral Springs, Florida** serving homeowners and businesses across South Florida.

Built with [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com), deployed on [Vercel](https://vercel.com).

## Features

- **7 pages** — Home, Services, Roof Replacement, Roof Repair, About, Service Areas, Contact
- **SEO-first**: unique titles/meta descriptions, canonical URLs, Open Graph/Twitter cards, semantic HTML
- **Structured data (JSON-LD)**: `RoofingContractor` (LocalBusiness), `Service`, `FAQPage`, `WebSite`
- **Auto-generated `sitemap-index.xml`** via `@astrojs/sitemap` + `robots.txt`
- **Lead capture forms** (see configuration below)
- **Fully responsive**, accessible, and fast (static HTML, minimal JS)
- **Single source of truth** for business data in `src/data/site.ts`

> Note on content: the copy is intentionally conservative. It contains **no prices, no guarantees/warranties, no licensing claims, no invented statistics or reviews, and no "free" offers** — only the verified business details provided (name, address, phone, city).

## Business details

- **Name:** Dependable Roofing Pros
- **Address:** 1953 N University Dr, Coral Springs, FL 33071
- **Phone:** (754) 291-7865

## Project structure

```
src/
├─ components/     Header, Footer, Icon, PageHero, CtaBand
├─ data/           site.ts, services.ts, faqs.ts
├─ layouts/        BaseLayout.astro (SEO + structured data)
├─ pages/          index, services, roof-replacement, roof-repair, about, service-areas, contact
└─ styles/         global.css (Tailwind theme + components)
public/            robots.txt, favicon.svg, logo.svg, og-default.svg
```

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to ./dist
npm run preview    # preview the production build
```

## Configuration — before going live

1. **Contact forms send an SMS (no email):** when a visitor fills out a form
   and taps **Send Text Message**, their device opens its messaging app with a
   pre-filled text (name, phone, service, address, details) addressed to the
   business number. To change the destination number, update `sms` / `smsHref`
   (and `phone` / `phoneHref`) in `src/data/site.ts`. Note: click-to-text works
   on devices with SMS capability (phones/tablets); the "Call" and "Text Us"
   buttons are available everywhere as a fallback.
2. **Domain:** the site is configured for `https://dependable-roofing-pros.vercel.app`.
   If you connect a custom domain, update it in `astro.config.mjs` (`site`),
   `src/data/site.ts` (`url`), and `public/robots.txt`.
3. **Business details** (phone, address, service areas): edit `src/data/site.ts`.
4. **OG image:** replace `public/og-default.svg` with a 1200×630 branded JPG/PNG
   for best social sharing compatibility, then update the default in
   `src/layouts/BaseLayout.astro`.

## Deploy to Vercel

The project is connected to Vercel and GitHub — every push to `main` deploys
automatically. To deploy manually:

```bash
npx vercel deploy --prod
```

## License

Proprietary — © Dependable Roofing Pros. All rights reserved.
