# PrimeClaim. Marketing Site

Production-ready landing page for **PrimeClaim**, a U.S. medical billing and revenue cycle management firm serving small and mid-sized healthcare practices.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS v4**, designed to deploy on **Vercel**.

Designed in the *brand* register following the [Impeccable](https://impeccable.style) design philosophy: editorial typography, restrained palette, generous whitespace, and none of the standard AI-slop anti-patterns (no purple gradients, no nested cards, no fake KPI dashboards, no Inter-everywhere, no gradient text).

---

## Sections (in order)

1. **Header**. Monogram + wordmark, light nav, single text-link CTA.
2. **Hero**. Display headline plus the **96.5%** pricing pull-quote.
3. **Services**. Six pillars as a numbered editorial list, no card grid.
4. **Pricing**. "You keep 96.5%." centerpiece. 3.5% on net collections.
5. **Process**. Four distilled steps.
6. **Specialties**. Single editorial line of names.
7. **FAQ**. Three essential questions, refined accordion.
8. **Contact**. Quiet final spread, email rendered in display type.
9. **Footer**. Minimal single line.

## Tech stack

- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript
- Tailwind CSS v4
- `next/font/google`: **Fraunces** (display) and **Instrument Sans** (body)

## Project structure

```
src/
  app/
    layout.tsx        # Root layout, fonts, metadata
    page.tsx          # Landing page composition
    globals.css       # Tailwind + brand tokens (paper / ink / hairline / accent)
  components/
    Header.tsx
    Hero.tsx
    Services.tsx
    Pricing.tsx
    Process.tsx
    Specialties.tsx
    FAQ.tsx
    Contact.tsx
    Footer.tsx
    Logo.tsx          # Typographic wordmark (no SVG mark)
    Container.tsx     # Standard page-width wrapper
    SectionHeading.tsx
public/
  favicon.svg
```

## Design tokens

```
--paper:           #F4F0E8   (warm paper background)
--paper-deep:      #ECE6D8   (alternating section background)
--ivory:           #FBF8F1   (subtle hover wash)
--ink:             #141312   (primary text)
--ink-muted:       #5B5346   (secondary text)
--ink-soft:        #8A8170   (tertiary / numerals)
--hairline:        #E1D9C7   (light dividers)
--hairline-strong: #C9BFA9   (heavier dividers)
--accent:          #2A463D   (deep moss, used very sparingly)
```

Typography:

- Display: **Fraunces** (variable serif), 300–500, italic for emphasis
- Body: **Instrument Sans**, 400–500

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

The current logo is a **monogram + wordmark** rendered with the loaded display serif (Fraunces): a hairline circle with an italic *P* inside, set next to *PrimeClaim* in italic Fraunces. It lives in `src/components/Logo.tsx`. No raster asset, no rasterization at any zoom level.

If you eventually want to use an image:

1. Drop the file into `public/` (e.g. `public/primeclaim-logo.png`).
2. Replace the contents of `src/components/Logo.tsx` with a `next/image` `<Image>` element pointing at it. Use `object-contain` with a fixed height (e.g. `h-9`) so aspect ratios stay correct.

## Updating contact info

The phone number is currently a placeholder (`+1 (XXX) XXX-XXXX`). It appears in:

- `src/components/Contact.tsx`
- `src/components/Footer.tsx`

Email (`info@primeclaimbilling.com`) is wired into all CTAs via `mailto:` links.

## Deploying to Vercel

The fastest path:

1. Push this repo to GitHub.
2. Go to <https://vercel.com/new> and import the repository.
3. Vercel will auto-detect **Next.js**. Leave the defaults.
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

Proprietary. © 2026 PrimeClaim. All rights reserved.
