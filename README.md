# Yixuan — Personal Portfolio

A personal portfolio site originally built as a 2023 grad-school final project (Intro to Web Dev), refactored end-to-end in 2026 with Tailwind CSS and AI pair programming.

**Live:** [yixuan-feng.vercel.app](https://yixuan-feng.vercel.app)

## What's inside

A Single-Page Application (SPA) with four routes:

- `/` — Home: hero, bio, current focus, contact CTAs
- `/Resume` — Reverse-chronological work history rendered as a vertical timeline
- `/Projects` — Selected projects with stack pills and GitHub links
- `/About` — Leadership, campus impact, and life-outside-of-code (accordion-driven)

## Tech stack

| Layer | Choice |
|---|---|
| Framework | React 18 (Create React App) |
| Routing | react-router-dom v6 |
| Styling | Tailwind CSS (`darkMode: 'class'`, `preflight: false` for legacy MUI coexistence) |
| Icons | lucide-react + inline SVG brand icons |
| Theming | Class-based dark mode + `localStorage` persistence + `prefers-color-scheme` default |
| SEO | Per-route document title + meta description via custom `usePageMeta` hook |
| Deployment | Vercel (auto-deploy on push to `main`) |

## Design system — "Warm Earthy Minimalism"

| Token | Value |
|---|---|
| Page bg | `stone-50` (light) / `stone-900` (dark) |
| Card bg | `stone-100` (light) / `stone-800` (dark) |
| Body text | `slate-700` (light) / `stone-200` (dark) |
| Accent | `emerald-800` (light) / `emerald-400` (dark) |
| Display heading | Outfit (Google Fonts), weight 700–800 |
| Body | Golos Text |

## Project structure

```
src/
├── App.js                     # Router + top-level layout
├── index.js / index.css       # Entry point + global Tailwind directives
├── pages/                     # Route components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── PreviousWork.jsx       # Resume page (timeline)
│   ├── Project.jsx
│   ├── NavBar.js
│   ├── Footer.js
│   ├── NotFound.js
│   └── index.js               # Barrel export consumed by App.js
├── components/                # Shared, reusable UI
│   ├── Pill.jsx               # Skill / tag pill (used across Home, Resume, Projects)
│   ├── BrandIcons.jsx         # Inline SVG GitHub + LinkedIn (lucide-react no longer ships these)
│   ├── DarkModeToggle.jsx
│   └── Testimonials.jsx       # Renders nothing if items=[] (ready to populate)
├── hooks/
│   ├── useDarkMode.js         # Class strategy + localStorage + media query listener
│   └── usePageMeta.js         # Per-route title + meta description
└── assets/
    └── portrait.jpg
```

## Local development

```bash
npm install
npm start                      # http://localhost:3000
```

## Production build

```bash
npm run build                  # outputs to ./build
```

CI flag is enabled in deploy environments, so any ESLint warning fails the build.

## Notable engineering details

- **`preflight: false` in `tailwind.config.js`** lets Tailwind coexist with the legacy Material UI v4 imports that still live in some component subtrees. Side effect: a couple of browser-default styles need to be manually re-added in `src/index.css` (border-style, button background reset). See the inline comments in `index.css` for the rationale.
- **`darkMode: 'class'`** + an inline FOUC-prevention script in `public/index.html` — the `<html>` class is set before paint so dark-pref users never see a white flash on first load.
- **Accordion uses `inert` + the `grid-rows-[0fr]/[1fr]` animation pattern** — modern HTML/CSS only, no `framer-motion` dependency.
- **`.npmrc` sets `legacy-peer-deps=true`** — required so npm 7+ (used by Vercel) accepts the React 18 + MUI v4 peer-dep mismatch.

## Deployment

Pushes to `main` auto-deploy to Vercel. The site uses noindex meta + `robots.txt` Disallow during the active job-search window — anyone with the URL can load it, but it stays out of search engines.

## Origin story

This same site started as my first React project in 2023, when I was learning how to wire up state, routes, and components. In 2026 I refactored it end-to-end — first time with Tailwind, first time pair-programming with Gemini and Claude as specialists (Gemini designed, Claude implemented, I scoped). The result is the site you're reading.
