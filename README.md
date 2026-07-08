# Dependable Roofing Pros — Website

A fast, modern, SEO-optimized marketing website for **Dependable Roofing Pros**, a roofing contractor serving Chattanooga, TN and surrounding Tennessee & North Georgia communities.

Built with [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com), deployed on [Vercel](https://vercel.com).

## ✨ Features

- **7 professional pages** — Home, Services, Roof Replacement, Roof Repair, About, Service Areas, Contact
- **SEO-first**: unique titles/meta descriptions, canonical URLs, Open Graph/Twitter cards, semantic HTML
- **Structured data (JSON-LD)**: `RoofingContractor` (LocalBusiness), `Service`, `FAQPage`, `WebSite`, breadcrumbs
- **Auto-generated `sitemap-index.xml`** via `@astrojs/sitemap` + `robots.txt`
- **Lead capture forms** wired to [FormSubmit](https://formsubmit.co) (no backend required)
- **Fully responsive**, accessible, and lightning-fast (static HTML, zero client JS except the mobile menu)
- **Single source of truth** for business data in `src/data/site.ts`

## 🗂 Project structure

```
src/
├─ components/     Header, Footer, Icon, PageHero, CtaBand
├─ data/           site.ts, services.ts, testimonials.ts, faqs.ts
├─ layouts/        BaseLayout.astro (SEO + structured data)
├─ pages/          index, services, roof-replacement, roof-repair, about, service-areas, contact
└─ styles/         global.css (Tailwind theme + components)
public/            robots.txt, favicon.svg, logo.svg, og-default.svg
```

## 🚀 Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to ./dist
npm run preview    # preview the production build
```

## ⚙️ Configuration — before going live

1. **Domain**: set your production domain in **two** places so canonical URLs, the sitemap, and structured data are correct:
   - `astro.config.mjs` → `site`
   - `src/data/site.ts` → `url`
   - `public/robots.txt` → `Sitemap:` line
2. **Business details** (phone, address, hours, rating, service areas): edit `src/data/site.ts`.
3. **Contact form**: forms post to `https://formsubmit.co/<your-email>`. The first submission triggers a one-time email confirmation from FormSubmit. Swap for any provider you prefer.
4. **Reviews & FAQs**: edit `src/data/testimonials.ts` and `src/data/faqs.ts`.
5. **OG image**: replace `public/og-default.svg` with a 1200×630 branded JPG/PNG for best social sharing compatibility, then update the default in `src/layouts/BaseLayout.astro`.

## ☁️ Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel: **Add New → Project → Import** the GitHub repo.
3. Vercel auto-detects Astro (config also provided in `vercel.json`). Click **Deploy**.
4. Add your custom domain in **Project → Settings → Domains** and update the `site`/`url` values above.

## 📄 License

Proprietary — © Dependable Roofing Pros. All rights reserved.
