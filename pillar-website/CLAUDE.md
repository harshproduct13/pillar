# Pillar Website: Context for Claude

Read this file first whenever working inside the `pillar-website/` folder.

---

## What This Is

The Pillar marketing website: a static **Astro** site (Tailwind v4), separate from the product prototype in `app/`. It explains what Pillar is, ranks for Indian AI-companion searches, and sends visitors to Google Play.

**Live URL:** https://www.pillarapp.site/
Run locally with: `npm run dev` (from inside this `pillar-website/` folder)
Build: `npm run build` → static HTML in `dist/` · Preview: `npm run preview`
Deployed on: Vercel (`vercel.json` sets clean URLs and noindex headers)

---

## File Index

```
pillar-website/
  src/
    layouts/Base.astro        ← <head> for every page: title, description, canonical, OG, hreflang, JSON-LD, font preload
    components/
      Nav.astro               ← Sticky header (logo, links, Download button)
      Footer.astro            ← Footer links to guides, legal pages
      Cta.astro               ← "Get Pillar on Google Play" card
      Faq.astro               ← FAQ section (pair with faqPage() JSON-LD)
      CompareTable.astro / FocusedCompareTable.astro ← Competitor comparison tables
    pages/
      index.astro             ← Homepage
      [slug].astro            ← Comparison + "<app> alternatives" pages, from data/comparisonPages.ts
      [code]/[slug].astro     ← Language pages (/ta/ai-girlfriend-tamil …), from data/languagePages.ts
      hi/ai-girlfriend-hindi.astro ← Hindi page (written in Hinglish)
      ai-girlfriend-in-your-language.astro ← Languages hub
      best-ai-girlfriend-apps-india / character-ai-alternatives-india / apps-like-replika-india .astro
      guides.astro, about.astro, pricing.astro, contact.astro
      privacy-policy / terms / cancellation-refund / shipping-exchange .astro, 404.astro
    data/
      companions.json         ← Companion photos used on the homepage marquee
      comparisonPages.ts      ← Title, description, FAQs, tables for each comparison page
      languagePages.ts        ← Title, description, copy for each language page
      competitors.json        ← Competitor feature data (from Play listings)
    lib/site.ts               ← SITE, PLAY_URL (with UTM referrer), APP_NAME, LANGUAGES, JSON-LD helpers
    styles/global.css         ← Tailwind theme tokens, self-hosted DM Sans @font-face, shared classes
  public/
    companions/c-XX.webp      ← Companion photos (WebP; old .jpg kept only for existing links)
    fonts/                    ← DM Sans woff2 (self-hosted, do not switch back to Google Fonts)
    logo-64.webp              ← Nav logo · Logo Emblem.png = favicon + schema logo · og-image.jpg = social share
    robots.txt
  astro.config.mjs            ← site URL, sitemap (excludes noindex pages), inlined CSS
```

---

## SEO Rules (checked by external SEO tools)

- **Title:** 50–60 characters, primary keyword first, one unique title per page
- **Meta description:** 100–130 characters, keyword included, start with a verb where it fits
- Every page goes through `Base.astro`: set `title`, `description`, `path`; add `jsonld` and `hreflang` where relevant
- `cancellation-refund` and `shipping-exchange` exist for the payment gateway and must stay **noindex** (in both `astro.config.mjs` and `vercel.json`)
- After editing copy, build and re-check lengths across `dist/**/*.html`

## Performance Rules

- The site ships **no JavaScript**: keep it that way unless there is a strong reason
- Nothing render-blocking in `<head>`: fonts are self-hosted and preloaded, CSS is inlined
- New images: WebP, explicit `width`/`height`, `loading="lazy"` below the fold
- Last Lighthouse mobile run (local build, 7 Oct 2026): Performance 98, Accessibility/SEO/Best Practices 100

---

## Design System

Dark mode only. Tokens live in `src/styles/global.css`.

| Token | Value |
|-------|-------|
| Page bg | `#0f0f0d` (`--color-ink`) |
| Card bg | `#13130f` |
| Line | `#2a2a26` |
| Primary | `#f97316` orange (`--color-accent`): CTAs and highlights only |
| Text primary | `#f5f0ea` (`--color-cream`) |
| Text secondary | `#c0c0b8` (`--color-muted`) |
| Text muted | `#88887f` (`--color-dim`) |

**Typography:** DM Sans everywhere (no serif).

---

## Tone & Copy Rules

- Warm, honest, non-judgmental: same voice as marketing
- Not clinical, not corporate; headlines short and emotionally resonant
- CTAs clear and direct. The app is live: "Download the App" / "Get Pillar on Google Play"
- Competitor claims come from their Google Play listings; say so on the page, don't overclaim

---

## Key Things to Know

- Separate codebase from `app/`; shares branding only
- Deployed on Vercel: anything merged must be production-ready
- Legal pages: jurisdiction Gurgaon, Haryana, India; contact getinclined@gmail.com
