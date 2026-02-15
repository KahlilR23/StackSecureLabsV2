# StackSecureLabs — Company Website

> **Cybersecurity. Database Management. Custom Software Development.**
> The official marketing website for [StackSecureLabs](https://stacksecurelabs.com) — a premium cybersecurity consulting firm serving government agencies, healthcare organizations, and regulated enterprises.

---

## Table of Contents

- [StackSecureLabs — Company Website](#stacksecurelabs--company-website)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Tech Stack](#tech-stack)
  - [Project Structure](#project-structure)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Available Scripts](#available-scripts)
  - [Environment Variables](#environment-variables)
  - [Pages \& Routes](#pages--routes)
  - [Components](#components)
    - [Layout](#layout)
    - [Sections](#sections)
    - [Forms](#forms)
    - [Cards \& Badges](#cards--badges)
  - [Integrations](#integrations)
    - [Supabase](#supabase)
    - [Stripe](#stripe)
    - [Email (Resend)](#email-resend)
  - [Deployment](#deployment)
    - [CI/CD Flow](#cicd-flow)
    - [Custom Domain](#custom-domain)
    - [Production Checklist](#production-checklist)
  - [Design System](#design-system)
  - [Security Notes](#security-notes)
  - [License](#license)

---

## Overview

This is the Next.js 16 marketing and client-facing website for StackSecureLabs. It serves as the primary digital presence for the firm, featuring:

- **Service showcase** across cybersecurity, software/AI development, and database management
- **Client conversion flows** including a security assessment request form and contact system
- **Stripe-powered payment processing** for service engagements
- **Supabase backend** for form submissions and data management
- **Dark/light mode** with the Deep Forest Authority brand palette
- **SEO optimized** with structured metadata, sitemaps, and accessibility compliance

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | TypeScript 5.7 |
| Styling | Tailwind CSS 3.4 + Shadcn UI |
| Animations | Framer Motion 11 |
| Forms | React Hook Form 7 + Zod validation |
| Backend | [Supabase](https://supabase.com) |
| Payments | [Stripe](https://stripe.com) |
| Email | Resend / SendGrid |
| Theme | next-themes |
| Icons | Lucide React |
| Hosting | [Vercel](https://vercel.com) |

---

## Project Structure

```
stacksecurelabs-website/
├── app/
│   ├── layout.tsx               # Root layout with providers, metadata
│   ├── page.tsx                 # Homepage
│   ├── providers.tsx            # ThemeProvider wrapper
│   ├── globals.css              # Global styles + Tailwind directives
│   ├── services/
│   │   ├── page.tsx             # Services overview
│   │   ├── cybersecurity/
│   │   │   └── page.tsx         # Cybersecurity services detail
│   │   ├── software-ai/
│   │   │   └── page.tsx         # Software & AI development detail
│   │   └── database/
│   │       └── page.tsx         # Database management detail
│   ├── about/
│   │   └── page.tsx
│   ├── case-studies/
│   │   ├── page.tsx             # Case studies listing
│   │   └── [slug]/
│   │       └── page.tsx         # Individual case study
│   ├── pricing/
│   │   └── page.tsx
│   ├── request-assessment/
│   │   └── page.tsx             # Primary conversion page
│   ├── contact/
│   │   └── page.tsx
│   ├── thank-you/
│   │   └── page.tsx
│   └── api/
│       ├── contact/
│       │   └── route.ts         # Contact form handler
│       ├── assessment/
│       │   └── route.ts         # Assessment request handler
│       └── stripe/
│           └── webhook/
│               └── route.ts     # Stripe webhook listener
│
├── components/
│   ├── ui/                      # Shadcn UI primitives
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   └── ThemeToggle.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ServicesOverview.tsx
│   │   ├── CTA.tsx
│   │   └── CaseStudyGrid.tsx
│   ├── forms/
│   │   ├── AssessmentForm.tsx
│   │   ├── ContactForm.tsx
│   │   └── MultiStepForm.tsx
│   ├── cards/
│   │   ├── ServiceCard.tsx
│   │   ├── CaseStudyCard.tsx
│   │   └── PricingCard.tsx
│   ├── badges/
│   │   ├── CertificationBadge.tsx
│   │   └── IndustryBadge.tsx
│   └── theme/
│       ├── ThemeProvider.tsx
│       └── theme-utils.ts
│
├── lib/
│   ├── supabase.ts              # Supabase client + helpers
│   ├── stripe.ts                # Stripe client + helpers
│   ├── utils.ts                 # Shared utilities (cn, etc.)
│   └── validations.ts           # Zod schemas
│
├── public/
│   ├── images/
│   │   ├── light/               # Light mode image variants
│   │   └── dark/                # Dark mode image variants
│   └── icons/
│
├── styles/
│   └── globals.css
│
├── .env.local                   # Local secrets (gitignored)
├── .env.example                 # Template for required env vars
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18.18+
- npm, yarn, or pnpm
- A Supabase project
- A Stripe account
- A Resend or SendGrid account (for transactional email)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/stacksecurelabs-website.git
cd stacksecurelabs-website

# Install dependencies
npm install

# Copy environment variable template
cp .env.example .env.local
# Fill in your values in .env.local

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

```bash
npm run dev        # Start development server with Turbopack
npm run build      # Create production build
npm run start      # Start production server
npm run lint       # Run ESLint
npm run type-check # Run TypeScript compiler check
```

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in each value. **Never commit `.env.local` to version control.**

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Stripe
STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Email (Resend or SendGrid)
RESEND_API_KEY=re_...

# Analytics
GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

> **Note for Vercel deployments:** Add all variables through the Vercel dashboard under **Settings → Environment Variables**. Do not set them via the Vercel CLI to avoid accidental exposure.

---

## Pages & Routes

| Route | Description | Primary CTA |
|---|---|---|
| `/` | Homepage — hero, services overview, social proof | Request Assessment |
| `/services` | Full services overview | View each service |
| `/services/cybersecurity` | Penetration testing, compliance, incident response | Request Assessment |
| `/services/software-ai` | Custom applications, AI/ML, system integration | Start a Project |
| `/services/database` | DB design, cloud migration, data governance | Get a Quote |
| `/about` | Team bios, mission, values, certifications | Contact Us |
| `/case-studies` | Client success stories (HIPAA, FISMA, SOX contexts) | Read Case Study |
| `/case-studies/[slug]` | Individual case study detail | Request Assessment |
| `/pricing` | Service tiers, hourly rates, retainer packages | Get Started |
| `/request-assessment` | Multi-step security assessment request form | Submit |
| `/contact` | General inquiry form + direct contact info | Send Message |
| `/thank-you` | Post-form conversion confirmation | Explore Services |

---

## Components

### Layout
The `Header` and `Footer` components are rendered in `app/layout.tsx` and persist across all pages. The `ThemeToggle` component switches between the Deep Forest (dark) and Cream (light) modes using `next-themes`.

### Sections
Page-level section components are composed within each `page.tsx`. They accept typed props and are designed to be independently testable and reusable across pages.

### Forms
All forms use **React Hook Form** for state management and **Zod** for schema validation. On submission, they hit the corresponding `/api` route, which handles Supabase inserts and triggers email notifications via Resend.

### Cards & Badges
`ServiceCard`, `CaseStudyCard`, and `PricingCard` accept structured data props and render consistently themed outputs. `CertificationBadge` and `IndustryBadge` display compliance credentials (FISMA, HIPAA, SOX, NIST) and target industries in a compact, visually distinct format.

---

## Integrations

### Supabase
Used for storing contact form submissions, assessment requests, and newsletter subscribers. The `lib/supabase.ts` file exports both the public client (for browser-side use) and a service role client (for server-side API routes only).

### Stripe
Handles service payments and retainer subscriptions. The `/api/stripe/webhook/route.ts` listens for Stripe events (`payment_intent.succeeded`, `customer.subscription.created`, etc.) and updates the Supabase database accordingly.

To test webhooks locally:
```bash
# Install the Stripe CLI
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

### Email (Resend)
Transactional emails are sent from API routes on key user actions:
- **Assessment request received** → notification to StackSecureLabs + confirmation to client
- **Contact form submitted** → notification to StackSecureLabs + confirmation to client
- **Payment confirmed** → receipt with next steps to client
- **Newsletter signup** → welcome email to subscriber

---

## Deployment

The site is deployed on **Vercel** with continuous deployment from the `main` branch.

### CI/CD Flow
- **`main`** branch → auto-deploys to production at `stacksecurelabs.com`
- **Pull requests** → generate preview deployments for review
- Branch protection on `main` is recommended — require PR reviews before merging

### Custom Domain
DNS is configured at the registrar to point to Vercel. SSL is provisioned automatically. All `www` traffic redirects to the apex domain (`stacksecurelabs.com`).

### Production Checklist
- [ ] All environment variables set in Vercel dashboard
- [ ] Stripe webhook endpoint registered for production URL
- [ ] Supabase RLS policies reviewed and enabled
- [ ] Google Analytics measurement ID set
- [ ] `robots.txt` and `sitemap.xml` verified
- [ ] Lighthouse score reviewed (target: 90+ across all categories)

---

## Design System

StackSecureLabs uses the **Deep Forest Authority** palette to differentiate from typical corporate-blue competitors while conveying security, stability, and premium positioning.

| Token | Name | Hex | Usage |
|---|---|---|---|
| `forest` | Deep Forest Green | `#1B3A2D` | Primary brand color, dark backgrounds |
| `charcoal` | Warm Charcoal | `#2C2C2C` | Body text, dark UI surfaces |
| `gold` | Burnished Gold | `#B8860B` | Accents, CTAs, highlights |
| `cream` | Warm Cream | `#FAF7F0` | Light mode backgrounds, text on dark |

**Typography:** DM Serif Display (headings) + Plus Jakarta Sans (body) + JetBrains Mono (code)

Dark/light mode switching is handled via `next-themes` with a `ThemeProvider` in `app/providers.tsx`. All Tailwind utilities use the `dark:` variant for theme-aware styling.

---

## Security Notes

This is a security firm's own website — it should set a high bar.

- **`.env.local` is gitignored.** Never hardcode secrets. Use environment variables for all API keys, database credentials, and webhook secrets.
- **Supabase Row Level Security (RLS)** should be enabled on all tables. The service role key must only be used in server-side API routes, never in client-side code.
- **Stripe webhook signatures** are verified in `/api/stripe/webhook/route.ts` using `stripe.webhooks.constructEvent()`. Do not skip signature verification.
- **All form inputs are validated** server-side via Zod schemas in `lib/validations.ts` before any database interaction.
- **HTTPS is enforced** via Vercel's automatic SSL. HTTP requests are redirected to HTTPS.
- **Dependency audits:** Run `npm audit` regularly and address high/critical vulnerabilities promptly.

---

## License

This codebase is proprietary. All rights reserved by StackSecureLabs LLC.

---

*For service inquiries, visit [stacksecurelabs.com](https://stacksecurelabs.com) or reach out via the contact form.*