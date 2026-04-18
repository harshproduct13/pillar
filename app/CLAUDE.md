# App — Context for Claude

Read this file first whenever working inside the `app/` folder.

---

## What This Is

A **design prototype**, not production code. Harsh uses this to design and visualise product flows, screens, and interactions — then hands off the designs to Swayamjeet (co-founder, tech lead) to build the real app.

When working here, the goal is to get screens and flows looking right and feeling right — not to write production-grade code. Speed and visual accuracy matter more than code architecture.

Run it with: `npm run dev` (from inside this `app/` folder)

---

## File Index

```
app/
  src/
    data/
      pillars.js              ← SOURCE OF TRUTH for all coach and friend data
    pages/
      AuthScreen.jsx          ← Login / Sign Up (Google Sign In)
      OnboardingScreen.jsx    ← 4-step new user onboarding flow
      PillarsScreen.jsx       ← Main home screen (coaches + friends)
      ChatScreen.jsx          ← Chat interface with a coach or friend
      CallScreen.jsx          ← Voice call interface
      ProfileScreen.jsx       ← User settings and profile
      PillarProfileScreen.jsx ← Full profile page for a coach or friend
    components/
      BottomNav.jsx           ← Tab bar (Pillars / Chat / Profile)
      Avatar.jsx              ← Reusable avatar with image + initials fallback
      PillarProfile.jsx       ← Profile component (used by PillarProfileScreen)
    App.jsx                   ← Routes + layout shell
  public/
    avatars/                  ← Mira.png, Kabir.png, Anya.png, Saira.png, David.jpg
    cards/                    ← Situation card background images (fight.jpg, breakup.jpg, etc.)
    logo.png                  ← Pillar logo
  Photos/                     ← Original situation card design assets (PNG versions)
  Photos New/                 ← Updated situation card design assets (JPG versions)
```

---

## Routes

| Route | Screen | Description |
|-------|--------|-------------|
| `/auth` | AuthScreen | Entry point — Google Sign In / Sign Up |
| `/onboarding` | OnboardingScreen | 4-step new user flow |
| `/` | PillarsScreen | Home — all coaches and friends |
| `/chat` | ChatScreen | Chat with a coach or friend |
| `/call` | CallScreen | Voice call |
| `/profile` | ProfileScreen | User settings |
| `/pillar-profile` | PillarProfileScreen | Full coach/friend profile |

Bottom nav (Pillars / Chat / Profile) is hidden on `/auth` and `/onboarding`.

---

## Coaches

| Coach | Role | `color` (bg) | `accent` (fg) | Personality |
|-------|------|-------------|--------------|-------------|
| **Mira** | Relationship Coach | `#2d6a4f` | `#4ade80` | Empathetic, Calm, Non-judgmental |
| **Kabir** | Work Life Coach | `#1e3a5f` | `#60a5fa` | Direct, Strategic, Action-oriented |
| **Myra** | Dating Coach | `#6b3fa0` | `#c084fc` | Honest, Warm, Real talk |

**Mira's situations:** Had a Fight with My Partner, Had a Breakup, Feeling Disconnected, Don't Like My Partner's Behavior, Parent Issue, How to Set Boundaries

**Kabir's situations:** Fight Procrastination, Feeling Stuck in My Career, Boss is Making Life Difficult, Thinking About Quitting Job, Ask for a Raise

**Myra's situations:** What to Reply to a Text, One Sided Love, How to Start a Conversation, Keep Attracting Wrong People, Don't Know if They Like Me, First Date Pep-Talk

---

## Friends

| Friend | Vibe | Location | Profession |
|--------|------|----------|------------|
| **Anya** | The one who just gets it | Bangalore | UX Designer |
| **Saira** | Chaotic good energy | Mumbai | Social Media Executive |
| **David** | Chill, no judgement | Delhi | Student |

Friends have no accent color — only coaches use the two-color system.

---

## Onboarding Flow

**Step 1 — Personal Info:** Name, Age Range, Gender, Language (all required)

**Step 2 — This is Pillar:** 3-card carousel explaining the app (coaches + friends)

**Step 3 — Social Proof:** 3 testimonials — Aarav/Mumbai (Kabir), Priya/Bangalore (Mira), Naina/Delhi (Myra)

**Step 4 — What Brings You Here?** 10 entry points, each maps to a coach + carries a pre-written first message

**Step 5 — Meet Your Coach:** Shows matched coach/friend, Start Chat button opens `/chat` with `pillarId` + `entryMessage` via `location.state`

Returning users skip onboarding — go straight to `/`.

---

## Design System

**Dark mode only.**

| Token | Value |
|-------|-------|
| Page bg | `#0f0f0d` / `#1a1a18` |
| Card bg | `#1a1a18` / `#1e1e1c` / `#242422` |
| Primary | `#f97316` (orange) |
| Text primary | `#f5f0ea` |
| Text secondary | `#c0c0b8` |
| Text muted | `#88887f` |
| Text faint | `#55554f` |
| Border faint | `#ffffff08–#ffffff14` |

**Typography:** DM Sans for UI/body. Headings use `font-serif` class (configured in Tailwind).
**Icons:** Lucide React — MessageCircle, Phone, BadgeCheck, MapPin, Briefcase, ChevronLeft, etc.
**Mobile-first:** max-width 430px, centered on desktop.

---

## Key Rules

- `color` (dark) = card backgrounds and borders
- `accent` (bright) = icons, badges, text highlights — always use accent for foreground
- Orange (`#f97316`) is reserved for primary CTAs only — no coach uses orange
- No nested `<button>` inside `<button>` — coach/friend cards with icon buttons must be `<div>`
- `pillars.js` is the single source of truth for all companion data — always edit there first
