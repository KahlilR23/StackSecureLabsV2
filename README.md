# StackSecureLabs — Website

Next.js 15 website for StackSecureLabs with full dark mode support.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## What Changed (v2)

### Styling Fixes
- **Fixed color conflicts**: Renamed custom `slate` → `muted` to avoid overriding Tailwind's built-in slate palette
- **Fixed border-radius**: Removed conflicting `sm`/`md`/`lg`/`xl` overrides — now uses Tailwind defaults + custom `card`/`panel`/`pill` tokens
- **Fixed font loading**: Added `<link>` preload in layout.tsx for reliable Google Fonts loading (CSS @import as fallback)
- **Explicit rounded values**: All components use `rounded-[12px]`, `rounded-[10px]`, `rounded-[6px]` etc. for consistent radii matching the HTML design

### Dark Mode
- **`next-themes`** with class strategy — no flash of wrong theme
- **ThemeToggle component**: Sun/moon icon button with smooth rotation animation
- **Toggle placement**: Desktop — in nav between links and CTA button. Mobile — next to hamburger menu
- **Every component** has `dark:` variants — surfaces, text, borders, shadows, icons, badges
- **Dark palette**: `surface` (#0F1419), `surface-raised` (#161B22), `surface-overlay` (#1C2128)
- **Dark sections** (Why Us, Metrics, CTAs, page headers) look the same in both modes since they're already dark
- Primary button inverts to gold in dark mode for visibility

## Tech Stack

Next.js 15 (App Router) · TypeScript · Tailwind CSS 3 · next-themes · CVA · Lucide React

## Project Structure

```
app/                          # Pages
├── layout.tsx                # Root layout + ThemeProvider
├── page.tsx                  # Homepage
├── globals.css               # Tailwind + fonts
├── services/page.tsx
├── pricing/page.tsx
├── about/page.tsx
├── contact/page.tsx
└── case-studies/page.tsx

components/
├── providers.tsx             # ThemeProvider wrapper
├── layout/
│   ├── header.tsx            # Nav + theme toggle
│   └── footer.tsx
├── ui/                       # Reusable primitives
│   ├── theme-toggle.tsx      # Dark mode toggle ★
│   ├── button.tsx            # 6 variants (CVA)
│   ├── card.tsx              # 5 variants
│   ├── badge.tsx             # 5 variants
│   ├── input.tsx / textarea.tsx / select.tsx
│   ├── reveal.tsx            # Scroll animation
│   ├── icon.tsx              # Lucide wrapper
│   └── layout.tsx            # Container, SectionLabel/Heading
└── sections/                 # Homepage sections
    ├── hero.tsx              # Dashboard mockup
    ├── trust-bar.tsx
    ├── services-grid.tsx
    ├── why-section.tsx
    ├── metrics.tsx
    ├── process.tsx
    ├── compliance.tsx
    ├── testimonial.tsx
    └── cta-section.tsx

lib/
├── constants.ts              # ALL site content (edit here)
├── hooks.ts                  # useReveal, useScrolled, useMobileNav
└── utils.ts                  # cn() helper
```

## Color Tokens

| Token          | Light        | Dark         |
|----------------|--------------|--------------|
| Background     | `cream`      | `surface`    |
| Card           | `white`      | `surface-raised` |
| Text primary   | `charcoal`   | `gray-200`   |
| Text secondary | `muted`      | `gray-400`   |
| Accent         | `forest`     | `gold`       |
| Heading        | `forest-dark`| `cream`      |
| Border         | `cream-mid`  | `white/0.06` |

## Editing Content

All copy lives in `lib/constants.ts` — edit once, updates everywhere.
