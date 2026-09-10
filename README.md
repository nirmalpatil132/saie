# Saie Jadhav — Portfolio

A premium, data-driven personal portfolio for Saie Jadhav — Computer Science
Engineering student, builder, and researcher. Built with React, TypeScript,
Vite, Tailwind CSS, and Framer Motion.

## Tech Stack

- **React 19 + TypeScript** — component architecture, strict typing
- **Vite 8** — build tooling and dev server
- **Tailwind CSS v4** — CSS-first design tokens via `@theme` (see `src/styles/globals.css`)
- **Framer Motion** — scroll reveals, hero sequencing, page/menu transitions
- **React Router** — client-side routing (`/`, `/projects/:slug`, 404)
- **Lucide React** — UI iconography (brand marks for GitHub/LinkedIn are hand-drawn in `src/components/ui/BrandIcons.tsx`, since Lucide dropped trademarked logos)

## Getting Started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build to dist/
npm run preview   # preview the production build locally
```

Node 20+ recommended.

### Contact form

The contact form POSTs `{ name, email, message }` as JSON to whatever URL is
set in `VITE_FORM_ENDPOINT` (see `.env.example`). Copy it to `.env.local` and
point it at a form backend (Formspree, Getform, a small serverless function,
etc). With no endpoint configured, the form still validates and submits, but
shows a clear "not connected yet" message instead of failing silently.

## Project Structure

```
src/
  components/
    layout/       Layout shell, ambient background, footer
    navigation/    Sticky navbar, mobile drawer, nav data
    hero/          Hero section, rotating role text, generative visual
    about/         About section, identity statement grid
    experience/    Timeline for internships/leadership/activities
    projects/      Featured/supporting/mini project presentation + cover art
    skills/        Categorized skill chips (qualitative levels, no fake %)
    education/     Education timeline
    achievements/  Achievements & certifications
    contact/       Contact section + validated form
    ui/            Shared primitives (Button, Tag, Reveal, Container, ...)
  data/            All content — see "Content & data layer" below
  pages/           Home, ProjectDetail, NotFound
  hooks/           useActiveSection, useScrollLock, usePrefersReducedMotion
  lib/             cn() className helper, shared motion constants
  styles/          globals.css — design tokens + base styles
```

## Content & Data Layer

All personal content lives in `src/data/*.ts`, typed via `src/data/types.ts`.
Components render this data — they don't hardcode copy. To update Saie's
information later, edit the relevant data file only:

| File | Contents |
|---|---|
| `profile.ts` | Name, tagline, summary, rotating roles, current focus |
| `experience.ts` | Internship + leadership/activity timeline |
| `projects.ts` | Featured/supporting/mini projects, case-study content |
| `education.ts` | Degrees and schooling |
| `skills.ts` | Skill categories with qualitative levels |
| `achievements.ts` | Competitions, leadership recognition, certifications |
| `social.ts` | Verified external links only |

### What's verified vs. what needs Saie's input

Everything currently in the data layer is sourced from Saie's CV and her
Techspot Infotech internship certificate — nothing is fabricated. A few
fields are explicitly marked as placeholders pending real dates/links:

- **Leadership & activity dates** (E-Cell, CSESA, AARAMBH) show `"Date to be added"` in `experience.ts` — the CV didn't specify exact periods.
- **Project repo/demo links** (`github`/`demo` fields in `projects.ts`) are left unset — add real GitHub URLs once available and the UI will automatically show "Source"/"Live Demo" links.
- **Profile photo** — `src/components/hero/HeroVisual.tsx` currently renders a generative abstract placeholder. Drop a real photo at `/public/images/profile.jpg` and swap it in.
- **Project screenshots** — `src/components/projects/ProjectCoverArt.tsx` generates unique abstract cover art per project as a placeholder. Real screenshots can go in `/public/projects/<slug>.jpg` and replace the component per-project.
- **Contact form backend** — needs `VITE_FORM_ENDPOINT` configured (see above).

The résumé (`/public/Saie-Jadhav-Resume.pdf`) and the Techspot internship
certificate (`/public/certificates/Techspot-Infotech-Internship-Certificate.pdf`)
are real assets already in place.

## Design System

Tokens are centralized in `src/styles/globals.css` under `@theme` — colors,
fonts, radii, container width, and the shared easing curve. Don't hardcode
hex values or magic numbers in components; extend the tokens instead.

- **Palette**: near-black surfaces (`#0a0a0a` / `#121212` / `#17171a`), warm coral accent (`#ff6b52`), soft violet secondary accent (`#9b8cff`).
- **Type**: Space Grotesk for display/headings, Inter for body copy.
- **Motion**: scroll-triggered reveals via `src/components/ui/Reveal.tsx`, all respecting `prefers-reduced-motion`.

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `footer`, `article`)
- Visible focus states on all interactive elements
- Keyboard-operable navigation, including the mobile drawer (body scroll lock, Escape-friendly button toggle)
- Form errors are associated to inputs via `aria-describedby`
- `prefers-reduced-motion` disables non-essential animation throughout

## Deployment

### GitHub Pages

The repo is set up for a **project page** at `https://<username>.github.io/saie/`:

1. `vite.config.ts` sets `base: "/saie/"` in production builds.
2. `public/404.html` + a small inline script in `index.html` implement the
   [SPA-on-GitHub-Pages redirect trick](https://github.com/rafgraph/spa-github-pages),
   so deep links like `/projects/bizhub` work on refresh.
3. Build and publish `dist/` via your preferred method (e.g. the
   `gh-pages` package, or a GitHub Actions workflow that runs
   `npm run build` and deploys `dist/` to the `gh-pages` branch).

If you instead deploy to a **custom domain** or a GitHub **user/org page**
(`username.github.io` root), change `base` back to `"/"` in
`vite.config.ts` and update `segmentsToKeep` to `0` in `public/404.html`.

### Vercel

Vercel needs no special config beyond the included `vercel.json` (SPA
rewrite to `index.html`). Set `base: "/"` in `vite.config.ts` (the default
for non-production `mode`, or update the production branch too), import the
repo in Vercel, and set `VITE_FORM_ENDPOINT` as an environment variable if
using the contact form.

## Remaining Polish Tasks

- [ ] Add a real profile photo and swap it into `HeroVisual.tsx`
- [ ] Add real project screenshots where available
- [ ] Fill in exact dates for E-Cell / CSESA / AARAMBH roles
- [ ] Add GitHub repo links for the CV projects (SNNC, Online Auction, BookMyShow Clone) once available
- [ ] Wire up `VITE_FORM_ENDPOINT` to a real form backend
- [ ] Optionally generate a proper 1200×630 PNG `og-image` (an SVG placeholder is included at `/public/og-image.svg`)
