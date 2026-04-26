# PrimeClaim Billing — Marketing Site

Production-ready landing page for **PrimeClaim Billing**, a U.S. medical billing and revenue cycle management firm serving small and mid-sized healthcare practices.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS v4**, designed to deploy on **Vercel**.

---

## Features

- Clean, trust-first B2B healthcare design (navy + slate corporate palette)
- Sticky header with mobile menu
- Hero with revenue cycle snapshot card
- Trust / problem statement
- End-to-end services grid
- Performance-aligned pricing card + responsive pricing table
- Six-step process
- Specialties (Dental, PT, Mental Health, Primary Care, Chiropractic, Specialty)
- "Why us" cards
- FAQ (`<details>` accordion, accessible by default)
- Contact CTA with `mailto:` actions
- Footer with logo, links, contact, copyright
- SEO metadata (title, description, OpenGraph, Twitter)
- SVG favicon
- Mobile-first responsive
- Semantic headings, alt text, focus rings, good contrast

## Tech stack

- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript
- Tailwind CSS v4
- `next/image` for the logo
- `next/font/google` for Inter

## Project structure

```
src/
  app/
    layout.tsx        # Root layout, fonts, metadata
    page.tsx          # Landing page composition
    globals.css       # Tailwind + brand CSS variables
  components/
    Header.tsx
    Hero.tsx
    TrustSection.tsx
    Services.tsx
    Pricing.tsx
    Process.tsx
    Specialties.tsx
    WhyUs.tsx
    FAQ.tsx
    Contact.tsx
    Footer.tsx
    Logo.tsx          # Reusable logo (full + mark variants)
    Container.tsx     # Standard page-width wrapper
    SectionHeading.tsx
    icons.tsx         # Inline SVG icon set
public/
  primeclaim-logo.svg # Wordmark logo (used in header + footer)
  primeclaim-mark.svg # Square mark variant
  favicon.svg
```

## Local development

Requires Node.js 20+.

```bash
npm install
npm run dev
```

The site will be available at <http://localhost:3000> (or 3001 if 3000 is busy).

### Production build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Replacing the logo

The site ships with a clean SVG wordmark at `public/primeclaim-logo.svg`. To use a custom logo:

1. Drop your file into `public/` (e.g. `public/primeclaim-logo.png`).
2. Open `src/components/Logo.tsx` and update the `src` and dimensions on the `<Image>` element.

The `Logo` component already uses `object-contain` and a fixed height so most aspect ratios will display cleanly without distortion.

## Updating contact info

The phone number is currently a placeholder (`+1 (XXX) XXX-XXXX`). It appears in:

- `src/components/Contact.tsx`
- `src/components/Footer.tsx`

Email (`info@primeclaimbilling.com`) is wired into all CTAs via `mailto:` links.

## Deploying to Vercel

The fastest path:

1. Push this repo to GitHub.
2. Go to <https://vercel.com/new> and import the repository.
3. Vercel will auto-detect **Next.js** — leave the defaults.
4. Click **Deploy**. No environment variables are required.

### Custom domain

In the Vercel project → **Settings → Domains**, add `primeclaimbilling.com` (and `www.primeclaimbilling.com`). Update the DNS records at your registrar to the values Vercel provides.

After the domain is connected, update `metadataBase` in `src/app/layout.tsx` if you change it from `https://primeclaimbilling.com`.

## Accessibility & SEO

- Semantic landmarks: `<header>`, `<main>`, `<section>`, `<footer>`
- Focus-visible rings via global CSS
- All interactive elements are real `<a>` / `<button>` elements
- Logo has descriptive `alt` text
- `<title>` and meta description set via Next.js Metadata API

## License

Proprietary — © 2026 PrimeClaim Billing. All rights reserved.
