// Home.tailwind.reference.jsx
// =============================================================================
// "Warm Earthy Minimalism" — Home Page rewrite for Erica Feng
//
// Design system tokens used:
//   bg          stone-50               (warm oat)
//   surface     stone-100              (currently card, pill bg alt)
//   border      stone-200
//   text body   slate-700
//   text deep   slate-900              (bold emphasis in bio)
//   accent      emerald-800            (#2F5233-ish pine)
//   accent fg   emerald-900            (text on tinted accent surface)
//   accent bg   emerald-800/10         (skill pills, "currently" dot halo)
//
// Layout:
//   Hero  — 12-col grid; photo md:col-span-5, bio md:col-span-7
//   Skills — 6 categorized rows of pill badges
//
// Typography:
//   font-display (Golos Text) for headings
//   font-sans (Golos Text)    for body
// =============================================================================

import React, { useState } from "react";
import { Download, Mail, MapPin, Check } from "lucide-react";
import photo from "../image/photo.jpg";
import { Pill, PillGroup } from "../components/Pill";
import { usePageMeta } from "../hooks/usePageMeta";
// import { Testimonials } from "../components/Testimonials";  // ← uncomment once you have quotes

const EMAIL = "ericafeng0@gmail.com";

// Configurable availability text — change in one place to update site-wide.
// When you accept an offer: swap to "Recently joined X 🎉" or set to null
// to hide the badge entirely.
const AVAILABILITY = "Open to: Full-time SWE roles · Remote";

// Privacy toggle for the active job-search window.
// When true: hero shows the photo + "Johnston, Iowa" location pin.
// When false: photo + location are hidden, bio fills the row alone.
// Flip back to true once I'm no longer worried about a current coworker
// stumbling onto the site (e.g. after I've left the contractor role).
const SHOW_PHOTO = false;

// Testimonials data — populate when you have 1-2 manager / teammate quotes,
// then uncomment the import above and the <Testimonials /> placement below.
// Each item: { quote: string, name: string, role?: string }.
// const TESTIMONIALS = [
//   {
//     quote: "Erica picks up unfamiliar code faster than anyone I've onboarded.",
//     name: "Jane Doe",
//     role: "Tech Lead, Corteva Agriscience",
//   },
// ];

// ─────────────────────────────────────────────────────────────────────────────
//  Skill data — single source of truth for the toolkit section
// ─────────────────────────────────────────────────────────────────────────────
const skillGroups = [
  {
    label: "Languages",
    items: ["C#", "TypeScript", "JavaScript", "Java", "Python", "SQL", "HTML", "CSS", "C++", "C"],
  },
  {
    label: "Backend",
    items: [".NET 8", "ASP.NET", "Entity Framework", "OData", "REST APIs"],
  },
  {
    label: "Frontend",
    items: ["Angular 16", "React", "Next.js"],
  },
  {
    label: "Testing",
    items: ["SpecFlow (BDD/TDD)", "Playwright", "xUnit"],
  },
  {
    label: "Cloud / DevOps",
    items: ["Azure", "CI/CD pipelines", "Docker"],
  },
  {
    label: "Data & Tools",
    items: ["MS SQL Server", "Git", "Visual Studio", "VS Code", "Postman", "Jira", "Figma"],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
//  Currently card — small, quietly distinguished
// ─────────────────────────────────────────────────────────────────────────────
function CurrentlyCard() {
  return (
    <aside
      className="mt-2 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-100 dark:bg-stone-800/60 p-5"
      aria-label="What I'm currently working on"
    >
      <div className="mb-2 flex items-center gap-2">
        {/* Pulsing dot — subtly signals "this is live / right now" */}
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-700 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-700" />
        </span>
        <span className="text-xs font-semibold uppercase tracking-widest text-emerald-800 dark:text-emerald-400">
          Currently
        </span>
      </div>
      <p className="text-[15px] leading-relaxed text-slate-700 dark:text-stone-200">
        Deepening BDD/TDD with SpecFlow, helping migrate our team to a new
        Azure tenant, and rebuilding this site&rsquo;s design system in
        Tailwind with Gemini &amp; Claude as pair programmers.
      </p>
    </aside>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  CTA buttons — primary filled, secondary outline
// ─────────────────────────────────────────────────────────────────────────────
function CTAs() {
  // mailto: links silently fail when the user has no default mail client
  // configured (very common in 2025+ since most people use webmail). So we
  // ALSO copy the email to clipboard on click, and show a brief "Copied!"
  // confirmation. This way the user always walks away with the address.
  const [copied, setCopied] = useState(false);

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* navigator.clipboard not available — mailto: still tries to fire */
    }
    // We do NOT preventDefault — let the mailto: open the user's mail client
    // if they have one. The click-to-copy is a defense in depth, not a replacement.
  };

  return (
    // No internal padding — vertical spacing is handled by parent's mt-*
    // so the button row's left edge aligns flush with sibling components.
    <div className="flex flex-wrap items-center gap-3">
      <a
        href="/Erica_Feng_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-xl bg-emerald-800
                   px-5 py-3 text-sm font-semibold text-white
                   shadow-sm shadow-emerald-900/20
                   transition-all duration-200
                   hover:bg-emerald-900 hover:shadow-md
                   focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800/40"
      >
        <Download className="h-4 w-4" strokeWidth={2} />
        Download Résumé (PDF)
      </a>
      <a
        href={`mailto:${EMAIL}`}
        onClick={handleEmailClick}
        aria-label={
          copied
            ? `Email address ${EMAIL} copied to clipboard`
            : `Email me at ${EMAIL}`
        }
        className="inline-flex items-center gap-2 rounded-xl
                   border-2 border-emerald-800 dark:border-emerald-400 bg-transparent
                   px-5 py-3 text-sm font-semibold text-emerald-800 dark:text-emerald-400
                   transition-colors duration-200
                   hover:bg-emerald-800/5 dark:hover:bg-emerald-400/10
                   focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800/40"
      >
        {copied ? (
          <>
            <Check className="h-4 w-4" strokeWidth={2.5} />
            Copied {EMAIL}
          </>
        ) : (
          <>
            <Mail className="h-4 w-4" strokeWidth={2} />
            Email Me
          </>
        )}
      </a>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  Skills section — pill badges grouped by category
// ─────────────────────────────────────────────────────────────────────────────
function SkillsSection() {
  return (
    <section className="border-t border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-800 dark:text-emerald-400">
          / Toolkit
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-stone-100 md:text-4xl">
          What I work with
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-stone-300">
          A grouped view of the tech I use day-to-day, plus what I've kept
          sharp from earlier projects.
        </p>

        <div className="mt-10 space-y-6">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              // Flex layout (not grid) — label has fixed width (w-36 = 144px),
              // pills take whatever's left and sit RIGHT NEXT to label.
              // No giant whitespace gap like grid-cols-2 would create.
              className="flex flex-col gap-3 md:flex-row md:items-baseline md:gap-5"
            >
              {/* Category label — slate-600 + text-sm + tracking-wider
                  reads as a confident anchor, not a faded hint. */}
              <h3
                className="md:w-36 md:flex-shrink-0
                           text-sm font-semibold uppercase tracking-wider
                           text-slate-600 dark:text-stone-300"
              >
                {group.label}
              </h3>

              {/* Pill badges — uses shared component for cross-page consistency */}
              <PillGroup>
                {group.items.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </PillGroup>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  Main Home page
// ─────────────────────────────────────────────────────────────────────────────
export default function Home() {
  usePageMeta({
    title: "Yixuan — Full Stack Developer",
    description:
      "Full-stack engineer who ships features and the tests behind them. .NET 8 + Angular 16 by day at Corteva Agriscience. Open to full-time SWE roles.",
  });

  return (
    <main className="bg-stone-50 dark:bg-stone-900 font-sans text-slate-700 dark:text-stone-200 text-left transition-colors">
      {/* Hero */}
      <section className="px-5 sm:px-8">
        <div className="mx-auto max-w-5xl py-16 md:py-24">
          {/* When SHOW_PHOTO is true → 12-col grid (photo + bio).
              When false → bio renders directly, no grid wrapper, capped
              with max-w-2xl so the prose stays at a comfortable read width. */}
          <div className={SHOW_PHOTO ? "grid gap-10 md:grid-cols-12 md:gap-14" : ""}>

            {/* — Photo column (privacy toggle) — */}
            {SHOW_PHOTO && (
              <div className="md:col-span-5">
                <div className="relative">
                  <img
                    src={photo}
                    alt="Yixuan on the Brooklyn Bridge"
                    className="w-full max-h-80 md:max-h-none md:aspect-[4/5]
                               rounded-2xl object-cover object-top
                               shadow-2xl shadow-emerald-900/15"
                  />
                  {/* Soft outer ring — ties photo to design system color */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-2xl
                               ring-1 ring-inset ring-stone-900/5"
                  />
                </div>

                {/* Location pin — small editorial detail under photo */}
                <p className="mt-4 flex items-center gap-1.5 text-sm text-slate-500 dark:text-stone-400">
                  <MapPin className="h-3.5 w-3.5" strokeWidth={2} />
                  Johnston, Iowa
                </p>
              </div>
            )}

            {/* — Bio + Currently + CTAs column —
                Explicit flex-col + items-start ensures predictable vertical
                stacking. Each child uses mt-* for spacing instead of relying
                on space-y-* + browser default <p> margins (which conflict
                because preflight is disabled in tailwind.config.js).
                Width: col-span-7 when paired with photo, max-w-2xl when alone. */}
            <div className={
              SHOW_PHOTO
                ? "md:col-span-7 flex flex-col items-start"
                : "max-w-2xl flex flex-col items-start"
            }>
              {/* Eyebrow */}
              <p className="m-0 text-sm font-medium uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
                Hi there
              </p>

              {/* Headline — name only */}
              <h1
                className="m-0 mt-3 font-display text-4xl font-bold tracking-tight
                           text-slate-900 dark:text-stone-100 md:text-5xl
                           leading-[1.15]"
              >
                I&rsquo;m Yixuan.
              </h1>

              {/* Positioning tagline — sub-heading establishing role + stack
                  + employer in a single scannable line. Outfit (font-display)
                  at medium weight gives it a distinct typographic moment. */}
              <p
                className="m-0 mt-4 font-display text-lg md:text-xl
                           font-medium leading-snug text-slate-700 dark:text-stone-200"
              >
                Full-stack engineer who ships features and the tests behind
                them.{" "}
                <strong className="font-semibold text-slate-900 dark:text-stone-100">
                  .NET 8 + Angular 16
                </strong>{" "}
                by day at{" "}
                <strong className="font-semibold text-slate-900 dark:text-stone-100">
                  Corteva Agriscience
                </strong>
                .
              </p>

              {/* Personal bio — the tagline now carries the role/stack facts,
                  so this paragraph focuses purely on personality. */}
              <p className="m-0 mt-6 text-base leading-[1.75] text-slate-700 dark:text-stone-200 md:text-[17px]">
                I&rsquo;m a quick learner who picks up new things both in
                code and out of it: this same site started as my first React
                project in 2023 and has grown alongside me. When I&rsquo;m
                not debugging or optimizing queries, you can usually find me
                walking the trails or hanging out with my
                rescue cat,{" "}
                <strong className="font-semibold text-slate-900 dark:text-stone-100">Luba</strong>.
              </p>

              {/* Currently card — w-full ensures it fills column for left-edge alignment */}
              <div className="mt-8 w-full">
                <CurrentlyCard />
              </div>

              {/* Availability badge — pulsing-dot chip signaling job-search status.
                  Hidden if AVAILABILITY constant is null. */}
              {AVAILABILITY && (
                <div className="mt-6">
                  <span
                    className="inline-flex items-center gap-2 rounded-full
                               border border-emerald-200/70 bg-emerald-50/80
                               dark:border-emerald-400/40 dark:bg-emerald-400/15
                               px-3 py-1.5"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-600 dark:bg-emerald-300 opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600 dark:bg-emerald-300" />
                    </span>
                    <span className="text-xs font-semibold tracking-wide text-emerald-800 dark:text-emerald-200">
                      {AVAILABILITY}
                    </span>
                  </span>
                </div>
              )}

              {/* CTAs — flush left, same edge as cards/badge above */}
              <div className="mt-4">
                <CTAs />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <SkillsSection />

      {/*
        Testimonials placeholder.
        When you have 1–2 quotes:
          1. Uncomment the import at the top of this file
          2. Uncomment the TESTIMONIALS array at the top of this file
          3. Uncomment the <Testimonials /> line below
      */}
      {/* <Testimonials items={TESTIMONIALS} /> */}
    </main>
  );
}
