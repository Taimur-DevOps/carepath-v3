# Carepath — Clinical Monitoring Services Website

A premium, static marketing website for **Carepath**, a Clinical Monitoring Services
Company that runs Remote Patient Monitoring (RPM) programmes on the CaringUp
platform for hospitals and clinics.

Built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4, and Framer
Motion. Fully static — no database, no CMS, no authentication.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

> **Note:** the build fetches Space Grotesk, Inter and IBM Plex Mono from
> Google Fonts at build time via `next/font/google`. This requires outbound
> network access to `fonts.googleapis.com` / `fonts.gstatic.com` (available
> by default on Vercel and most local machines).

## Project structure

```
app/
  page.tsx                    Home
  how-it-works/page.tsx       How It Works (8-step timeline)
  solutions/page.tsx          Solutions (chronic disease, mental health, oncology, post-hospital)
  caringup-platform/page.tsx  CaringUp Platform
  about/page.tsx              About
  contact/page.tsx            Contact (form + details)
  privacy-policy/page.tsx
  terms-conditions/page.tsx
  robots.ts                   Generates /robots.txt
  sitemap.ts                  Generates /sitemap.xml
  layout.tsx                  Root layout, metadata, JSON-LD Organization schema

components/
  layout/     Navbar, Footer
  home/       Home-page-only sections (Hero, Challenge, Specialties)
  shared/     Reusable building blocks (SectionHeader, PageHero, FeatureCard,
              SolutionCard, Timeline, CtaBanner, CareLoop illustration,
              PlatformMockup illustration, ResponsibilitySplit)
  contact/    ContactForm (client-side validation + mailto fallback)
  ui/         Button, Card, Eyebrow primitives

lib/
  site.ts     Site config, nav links, footer links
  data.ts     All page copy/data: specialties, benefits, timeline steps,
              platform features, solution groups
  utils.ts    `cn` class-merge helper
```

## Content model

All repeatable copy (specialties, benefits, timeline steps, platform
features, solution groups) lives in `lib/data.ts`, typed and separate from
markup — update copy there without touching component code.

## Contact form

The contact form (`components/contact/contact-form.tsx`) does full
client-side validation (required fields, email format, minimum message
length) and, since this is a static site with no backend, falls back to a
pre-filled `mailto:` link. A commented-out `fetch("/api/contact", …)` call is
included in the same file — wire it up to a real endpoint (e.g. a Next.js
Route Handler, Formspree, or your CRM) when one becomes available.

## SEO

- Per-page `metadata` (title templates, description, canonical URLs)
- OpenGraph + Twitter card metadata in `app/layout.tsx`
- JSON-LD `Organization` structured data in `app/layout.tsx`
- `app/robots.ts` → `/robots.txt`
- `app/sitemap.ts` → `/sitemap.xml`
- `public/og-image.png` is a placeholder — swap in a designed 1200×630 image
  before launch.

## Before you launch

- Replace the placeholder phone number, WhatsApp number, and address in
  `lib/site.ts`.
- Replace `public/og-image.png` with a final branded image.
- Have Legal review `app/privacy-policy/page.tsx` and
  `app/terms-conditions/page.tsx` — the current copy is a starting point,
  not a finished policy.
- Wire the contact form to a real backend if you want submissions to land
  somewhere other than the visitor's email client.

## Deploy on Vercel

Push this project to a Git repository and import it at
[vercel.com/new](https://vercel.com/new) — no configuration required.
