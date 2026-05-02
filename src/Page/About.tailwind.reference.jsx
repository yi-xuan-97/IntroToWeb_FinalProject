// About.tailwind.reference.jsx
// =============================================================================
// "Warm Earthy Minimalism" — refactored per UX brief
//
// Design system tokens:
//   - bg:       stone-50            (warm oat)
//   - card:     stone-100           (item container)
//   - text:     slate-700           (body)
//   - heading:  slate-900
//   - meta:     slate-500
//   - accent:   emerald-800         (pine green)
//   - radius:   rounded-xl widely
//
// Key UX fixes vs prior version:
//   1. Body text + bullets explicitly text-left (overrides .App's center).
//   2. Expanded body wrapped in max-w-2xl mx-auto for readable line length.
//   3. Each item is its own rounded-xl card on stone-100 with space-y-3 gaps,
//      not items inside one big container.
//   4. Header icon sits in a soft emerald-800/10 rounded square — more visual
//      weight, signals it's a "section icon" rather than decorative.
//   5. Footer is now bg-emerald-800 with light text — see Footer.js.
// =============================================================================

import { useState } from "react";
import {
  ChevronDown,
  Users,
  ClipboardCheck,
  GraduationCap,
  Code2,
  Compass,
  Cpu,
  ChefHat,
  Footprints,
} from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";

// ---------- DATA ----------
// Each item has an optional `teaser` (one-line preview visible when collapsed)
// and an optional `defaultOpen` (true on the first item to demo expansion).
const leadership = [
  {
    id: "ois",
    icon: Users,
    title: "OIS Coordinator",
    org: "Student Activities & Leadership Programs @ PSU",
    dates: "Aug 2022 – Jun 2023",
    teaser:
      "Ran the food section for International Night (300+ attendees) — learned fire code and food safety the hard way.",
    defaultOpen: true,
    intro:
      "Co-organized cultural programming for international students — Culture Night, Lunar New Year, Halloween, Game Night, Movie Night.",
    bullets: [
      <>
        Led the <strong>food section</strong> for{" "}
        <strong>International Night</strong>, our largest event with{" "}
        <strong>300+ attendees</strong> — owned menu design, vendor docs, and
        room layout.
      </>,
      <>
        Planned room flow with university advisors to meet{" "}
        <strong>fire code</strong> occupancy and egress requirements.
      </>,
      <>
        Coordinated with the city's local department on{" "}
        <strong>food safety sign-off</strong>, including the unforgettable
        lesson that you need at least <strong>two buckets of water</strong> for
        hand-washing at any public food event.
      </>,
      <>
        Earned a <strong>leadership certification</strong> through a paid
        leadership class that came with the role.
      </>,
    ],
  },
  {
    id: "testing",
    icon: ClipboardCheck,
    title: "Testing Services Office Assistant",
    org: "Learning Center @ PSU",
    dates: "Aug – Dec 2022",
    teaser:
      "Scheduled accommodated exams via PSU's Disability Resource Center — where one mis-scheduled test ripples through three calendars.",
    intro:
      "Provided accommodated testing for students registered with the Disability Resource Center (DRC) and their instructors.",
    bullets: [
      <>
        Scheduled exams across multiple departments; adapted workflows for
        students who needed{" "}
        <strong>extra time, separate rooms, or alternative formats</strong>.
      </>,
      <>
        Maintained tight communication between students and instructors —{" "}
        <em>one mis-scheduled exam ripples through three calendars</em>.
      </>,
      <>
        Handled confidential records with care; learned to triple-check every
        send.
      </>,
    ],
  },
  {
    id: "proctor",
    icon: GraduationCap,
    title: "Exam Proctor",
    org: "Learning Center @ PSU",
    dates: "Aug – Dec 2022",
    teaser:
      "Sat with anxious test-takers for a term — quiet work that matters when it goes right.",
    body: "Kept exams fair while keeping anxious test-takers calm. Quiet work, but the kind that matters when it goes right.",
  },
  {
    id: "grader",
    icon: Code2,
    title: "Grader — Advanced Programming in Java",
    org: "CS Department @ PSU",
    dates: "Jun – Aug 2022",
    teaser:
      "Graded Java projects after acing the course — got pretty good at explaining off-by-one errors.",
    body: (
      <>
        <p>
          Invited by the instructor after doing well in the course. Evaluated
          projects, quizzes, and exams; gave feedback on student code; fielded
          debugging questions.
        </p>
        <blockquote className="mt-4 border-l-2 border-emerald-800 pl-4 italic text-slate-600 dark:text-stone-300">
          Turns out I'm pretty good at explaining why someone's loop is
          off-by-one.
        </blockquote>
      </>
    ),
  },
  {
    id: "mentor",
    icon: Compass,
    title: "International Student Mentor",
    org: "International Student Mentor Program @ PSU",
    dates: "Jul 2021 – Dec 2022",
    teaser:
      "Weekly check-in emails + campus tours for new international students. In-person always won.",
    intro:
      "Walked newly-arrived international students through their first term — academic system, immigration paperwork, and the small daily things nobody tells you.",
    bullets: [
      <>
        Sent <strong>weekly check-in emails</strong> that mixed logistics with
        small "things I like in Portland" notes.
      </>,
      <>
        Led <strong>campus tours</strong> and{" "}
        <strong>light downtown walking tours</strong> during orientation events.
      </>,
      <>
        Found that in-person beats email every time — once you've actually met
        someone, the emails get answered.
      </>,
    ],
  },
  {
    id: "cat",
    icon: Cpu,
    title: "Desk Operations — Computer Action Team",
    org: "MCECS @ PSU",
    dates: "Sep 2020 – Apr 2021",
    teaser:
      "Front-desk IT for PSU's engineering school — tickets, troubleshooting, training.",
    body: "Front-desk IT volunteer for the engineering school. Triaged tech issues from faculty, staff, and students; answered tickets; attended trainings.",
  },
];

const lifeOutside = [
  {
    id: "cook",
    icon: ChefHat,
    title: "Aspiring Home Chef",
    teaser:
      "Currently attempting Northeastern Guobaorou (锅包肉). Photography: still embarrassing.",
    body: (
      <>
        <p>
          On weekends I'm in the kitchen attempting things that intimidate me.
          Most recently{" "}
          <strong>东北锅包肉 (Northeastern-style Guobaorou)</strong> — the kind
          that's supposed to come out{" "}
          <strong>golden, crispy, slightly sweet-and-sour</strong>, and gone
          before the rice is.
        </p>
        <p className="mt-3">
          The cooking is going well. The <em>food photography</em>, less so. No
          Instagram-worthy evidence exists, just blurry phone shots of plates
          already half-eaten. If you have a Guobaorou recipe that actually
          works at altitude, please send it.
        </p>
      </>
    ),
  },
  {
    id: "walk",
    icon: Footprints,
    title: "Slow Walker, Trail Hunter",
    teaser:
      "Walking for thinking, not for cardio. Iowa has more trails than people give it credit for.",
    body: (
      <>
        <p>
          I walk for thinking, not for cardio. Weekends that's a quiet{" "}
          <strong>trail</strong> somewhere — Iowa has more of them than people
          give it credit for, and the prairie light at 6 PM is genuinely worth
          showing up for.
        </p>
        <p className="mt-3">
          Pace is intentionally unhurried. It's how I clear a sprint week out
          of my head before Monday. If you also walk slowly enough to actually
          notice things — drop me a line. We might even make it to the end of
          the block before sunset.
        </p>
      </>
    ),
  },
];

// ---------- ACCORDION ITEM ----------
// item.defaultOpen = true → start expanded so visitors see what an open
// state looks like without having to click first.
function AccordionItem({ item }) {
  const [open, setOpen] = useState(item.defaultOpen ?? false);
  const Icon = item.icon;

  return (
    <article
      className={`rounded-xl bg-stone-100 dark:bg-stone-800 overflow-hidden
                  border border-stone-200/60 dark:border-stone-700
                  transition-all duration-200
                  ${open ? "shadow-sm dark:shadow-none dark:ring-1 dark:ring-stone-700" : ""}`}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`panel-${item.id}`}
        className="w-full flex items-center gap-4 py-4 px-5 text-left
                   bg-transparent
                   hover:bg-stone-200/60 focus-visible:bg-stone-200/60
                   dark:hover:bg-stone-700 dark:focus-visible:bg-stone-700
                   focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800/30 focus-visible:ring-offset-0
                   transition-colors duration-200"
      >
        {/* Icon — clean line icon, no background container.
            Slightly larger + thinner stroke compensates for the lost weight. */}
        <Icon
          className="w-6 h-6 text-emerald-800 dark:text-emerald-400 flex-shrink-0
                     transition-colors duration-200"
          strokeWidth={1.5}
          aria-hidden="true"
        />

        {/* Title + meta + teaser — flush left, vertical stack.
            The teaser is always visible (even when collapsed) so visitors
            can scan the whole page without clicking. */}
        <div className="flex-1 min-w-0 text-left">
          <h3 className="font-semibold text-base sm:text-lg text-slate-900 dark:text-stone-100 leading-snug">
            {item.title}
          </h3>
          {(item.org || item.dates) && (
            <p className="text-xs sm:text-sm text-slate-500 dark:text-stone-400 mt-0.5 truncate">
              {item.org}
              {item.org && item.dates ? " · " : ""}
              {item.dates}
            </p>
          )}
          {item.teaser && (
            <p className="mt-2 text-sm text-slate-600 dark:text-stone-300 leading-snug">
              {item.teaser}
            </p>
          )}
        </div>

        {/* Chevron — flips on open */}
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0
                      transition-all duration-300 ease-out
                      ${open ? "rotate-180 text-emerald-800 dark:text-emerald-400" : "text-slate-400"}`}
          strokeWidth={2}
          aria-hidden="true"
        />
      </button>

      {/* Animated reveal — modern grid-rows trick (no framer-motion needed).
          `inert` when closed: keeps Tab focus and screen-reader announcement
          out of the hidden content (native attr, supported in modern browsers). */}
      <div
        id={`panel-${item.id}`}
        role="region"
        {...(open ? {} : { inert: "" })}
        className={`grid transition-all duration-300 ease-out
                    ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          {/* Body — explicitly text-left + max-w-2xl for readable line length.
              On desktop, ml-10 aligns body with title (icon w-6 + gap-4 = 40px). */}
          <div className="px-5 pb-5 pt-1 text-left">
            <div
              className="max-w-2xl ml-0 sm:ml-10
                         text-slate-700 dark:text-stone-200 leading-relaxed text-[15px] text-left"
            >
              {item.intro && (
                <p className="mb-3 text-left">{item.intro}</p>
              )}
              {item.bullets && (
                <ul
                  className="space-y-2 list-disc pl-5
                             marker:text-emerald-800 dark:text-emerald-400 text-left"
                >
                  {item.bullets.map((b, i) => (
                    <li key={i} className="text-left">
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              {item.body && <div className="text-left">{item.body}</div>}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

// ---------- SECTION ----------
function Section({ kicker, items, id }) {
  return (
    <section aria-labelledby={`${id}-heading`} className="mb-14 text-left">
      <h2
        id={`${id}-heading`}
        className="text-xs uppercase tracking-[0.22em] text-emerald-800
                   font-semibold mb-5 px-1"
      >
        / {kicker}
      </h2>
      {/* Stack items with breathing room — each is its own rounded-xl card */}
      <div className="space-y-3">
        {items.map((item) => (
          <AccordionItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

// ---------- PAGE ----------
export default function AboutPage() {
  usePageMeta({
    title: "About",
    description:
      "Beyond the code — Erica Feng's leadership, campus impact, and life outside engineering. International Night for 300+ attendees, accommodated testing at PSU, mentoring international students, and a long-running attempt at perfect Northeastern Guobaorou.",
  });

  return (
    // text-left on <main> overrides the inherited center from .App { text-align: center }
    <main className="min-h-screen bg-stone-50 dark:bg-stone-900 font-sans text-slate-700 dark:text-stone-200 text-left transition-colors">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 py-20 md:py-28 text-left">

        {/*
          Hero — three-tier editorial typography with generous breathing room:
            Overline  → small, uppercase, tracking-widest, supporting green
            Headline  → bold, slightly looser leading for visual weight
            Subtitle  → muted slate, relaxed line-height, breathing space above

          The h1 lives here (and ONLY here on this page) — the legacy sr-only h1
          has been removed from NavBar to avoid duplicate-h1 SEO/a11y warnings.
        */}
        <header className="mb-16 md:mb-20 text-left">
          {/* Overline */}
          <p className="text-sm font-medium uppercase tracking-widest
                        text-emerald-700 dark:text-emerald-400">
            Now that you know me from my code &mdash;
          </p>

          {/* Headline — leading-[1.15] gives just enough room above descenders
              so the line feels confident, not cramped */}
          <h1 className="mt-5 text-4xl md:text-5xl
                         font-bold tracking-tight leading-[1.15]
                         text-slate-800 dark:text-stone-100">
            here&rsquo;s everything else.
          </h1>

          {/* Subtitle — leading-[1.75] is more relaxed than leading-relaxed
              (1.625), gives the multi-line description room to breathe */}
          <p className="mt-7 max-w-2xl text-slate-500 dark:text-stone-400 leading-[1.75]">
            A non-exhaustive list of things I&rsquo;ve picked up alongside
            engineering work. Click any title to expand.
          </p>
        </header>

        <Section
          id="leadership"
          kicker="Leadership & Campus Impact"
          items={leadership}
        />

        <Section id="life" kicker="Life Outside of Code" items={lifeOutside} />
      </div>
    </main>
  );
}
