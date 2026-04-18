# Pillar Website — Context for Claude

Read this file first whenever working inside the `pillar-website/` folder.

---

## What This Is

The Pillar marketing website — a separate React + Vite app from the main product prototype. This is the public-facing landing page that explains what Pillar is and drives users to download the app.

**Live URL:** https://www.pillarapp.site/
Run locally with: `npm run dev` (from inside this `pillar-website/` folder)
Deployed on: Vercel (`vercel.json` is configured)

---

## File Index

```
pillar-website/
  src/
    pages/
      LandingPage.jsx         ← Main landing page (assembles all sections)
      PrivacyPolicy.jsx       ← Privacy policy page
      TermsConditions.jsx     ← Terms and conditions page
      Screenshots.jsx         ← Screenshots showcase page
    components/
      Navbar.jsx              ← Top navigation bar
      Footer.jsx              ← Footer with links
    sections/                 ← Each section of the landing page is its own component
      Hero.jsx                ← Hero section (headline, CTA, app preview)
      Coaches.jsx             ← Coaches section (Mira, Kabir, Maya)
      Friends.jsx             ← Friends section (Anya, Saira, David)
      Features.jsx            ← Core features (24/7, judgment-free, remembers you)
      Testimonials.jsx        ← Social proof / testimonials
      FAQ.jsx                 ← Frequently asked questions
      DownloadCTA.jsx         ← Bottom CTA section (download / waitlist)
    App.jsx                   ← Routes + layout shell
    App.css                   ← Global styles
    index.css                 ← Tailwind base styles
  public/                     ← Static assets (images, logo, etc.)
  index.html                  ← HTML entry point
  tailwind.config.js          ← Tailwind configuration
  vite.config.js              ← Vite configuration
  vercel.json                 ← Vercel deployment config
```

---

## Pages & Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | LandingPage | Main marketing landing page |
| `/privacy-policy` | PrivacyPolicy | Privacy policy |
| `/terms` | TermsConditions | Terms and conditions |
| `/screenshots` | Screenshots | App screenshots showcase |

---

## Landing Page Sections (in order)

1. **Hero** — Main headline, value proposition, app preview / CTA
2. **Coaches** — Introduces Mira, Kabir, Maya with their roles and niches
3. **Friends** — Introduces Anya, Saira, David with their vibes
4. **Features** — Key product features (always available, judgment-free, remembers you)
5. **Testimonials** — Social proof from Indian users
6. **FAQ** — Common questions about the product
7. **DownloadCTA** — Final CTA to download or join waitlist

---

## Design System

Same global design tokens as the app — dark mode only.

| Token | Value |
|-------|-------|
| Page bg | `#0f0f0d` / `#1a1a18` |
| Card bg | `#1a1a18` / `#1e1e1c` / `#242422` |
| Primary | `#f97316` (orange) |
| Text primary | `#f5f0ea` |
| Text secondary | `#c0c0b8` |
| Text muted | `#88887f` |

**Typography:** DM Sans for body/UI. Section labels: `text-[11px] font-bold uppercase tracking-[0.12em]`.
**Icons:** Lucide React.

---

## Tone & Copy Rules

- Same voice as marketing — warm, honest, non-judgmental
- Not clinical, not corporate — feels like a product built by someone who gets it
- Headlines should be short and emotionally resonant
- CTAs: clear and direct
- Pre-launch: CTA should direct to waitlist or "coming soon to Google Play"

---

## Key Things to Know

- This is a **separate** app from the main prototype in `app/` — they share design tokens and branding but have independent codebases
- The website is deployed on Vercel; any changes pushed should be production-ready
- Coach name on the website = **Maya** for the dating coach (consistent with Instagram, not Myra)
- Legal pages (Privacy Policy, Terms) mention jurisdiction: Gurgaon, Haryana, India; contact: getinclined@gmail.com
