// PreviousWork.tailwind.reference.jsx — Resume page in timeline style
// =============================================================================
// "Warm Earthy Minimalism" Resume page.
//
// Design: vertical timeline running down the left side.
//   - Thin (2px) stone-200 stem
//   - emerald-800 dot per role (filled = current, ring-only = past)
//   - role title (bold emerald-800), company + dates (muted slate-500)
//   - bullets with green disc markers
//   - tech stack at bottom as shared Pill components (matches Home + Projects)
//
// Old MUI Grid + logo-on-left layout is replaced. The legacy file is
// preserved at ./PreviousWork.js as a backup.
// =============================================================================

import React from "react";
import { Download, GraduationCap } from "lucide-react";
import { Pill, PillGroup } from "../components/Pill";
import { usePageMeta } from "../hooks/usePageMeta";

const jobs = [
  {
    role: "Full Stack Developer",
    company: "Corteva Agriscience",
    meta: "via Antra Inc. / Insight Global · Hybrid",
    dates: "Aug 2024 — Present",
    current: true,
    bullets: [
      "Ship .NET 8 REST API endpoints (OData / Entity Framework / MS SQL Server) for an internal data repository app, hitting the team's target sprint pace of ~10 story points per 2-week sprint (≈1 point/day).",
      "Built and refactored 12 Angular 16 components during the team's transition into frontend development.",
      "Author SpecFlow (BDD) scenarios and Playwright end-to-end tests for my own work; during a 3-month QA gap, maintained 70% coverage on shipped features.",
      "Helped migrate 4 services to a new Azure tenant over 6 weeks during the Corteva corporate split, coordinating Azure Cloud Function deployments with the platform team.",
    ],
    stack: [
      ".NET 8",
      "Angular 16",
      "OData",
      "Entity Framework",
      "SpecFlow",
      "Playwright",
      "Azure",
      "MS SQL Server",
      "Agile / Scrum",
    ],
  },
  {
    role: "Software Engineer Trainee",
    company: "Antra Inc.",
    meta: "Unpaid training program · Remote",
    dates: "Dec 2023 — Aug 2024",
    bullets: [
      "Built a microservices-style e-commerce backend in .NET / C# — 6 domain services (Customer, Inventory, Order, Product, Authentication, ApiGateway) with DDD-style ApplicationCore / Infrastructure layering, JWT auth, Docker Compose, and Azure DevOps CI/CD pipelines.",
      "Built the matching Angular 15 storefront (TypeScript) consuming the API gateway, with Karma unit tests.",
      "Practiced ASP.NET MVC patterns in a separate full-stack server-rendered project; brushed up on JS fundamentals through structured assignments.",
      "Passed Antra's mock client interview at the end of training, then placed at Corteva Agriscience.",
    ],
    stack: [
      ".NET",
      "C#",
      "Angular 15",
      "TypeScript",
      "Microservices",
      "JWT Auth",
      "Docker",
      "Azure DevOps",
      "xUnit",
      "Karma",
    ],
  },
  {
    // Education slot — visually fills the Sep 2021 → Jun 2023 stretch on the
    // timeline between Antra training and the internships. Renders without
    // bullets/pills since this isn't a "shipped work" entry.
    education: true,
    role: "Master of Science, Computer Science",
    company: "Portland State University",
    meta: "Portland, OR · GPA 3.89",
    dates: "Sep 2021 — Jun 2023",
  },
  {
    role: "Software Engineer Intern",
    company: "Swedemom",
    meta: "Remote · 1-month engagement",
    dates: "Jul 2021 — Aug 2021",
    bullets: [
      "Diagnosed a database connection misconfiguration on a small e-commerce team — the site was pointed at the wrong SQL Server instance, returning stale data to the search experience. Repointing restored correct product results with no application code change.",
      "Wrote SQL queries against the C# / SQL Server backend to power the on-site product search.",
    ],
    stack: ["C#", "SQL", "SQL Server"],
  },
  {
    role: "Software Engineer Intern",
    company: "Relaymile",
    meta: "Remote",
    dates: "Apr 2021 — Jul 2021",
    bullets: [
      "Shipped 2–3 Python backend endpoints for the Relaymile platform; iterated on the data models alongside full-stack teammates within a Scrum team.",
    ],
    stack: ["Python", "Docker", "Postman", "Asana"],
  },
  {
    role: "Web Development Intern",
    company: "Minority Programmers Association",
    meta: "Remote",
    dates: "Mar 2021 — Jun 2021",
    bullets: [
      "Built 2 new pages and redesigned 2 existing pages for the MPA website using React / Next.js, coordinating with UI/UX, QA, and backend developers within a Scrum team.",
    ],
    stack: ["React", "Next.js", "ClickUp"],
  },
];

// Render a bullet string, wrapping any {{TODO: ...}} placeholders in a
// visually distinct amber chip so they stand out against shipped copy.
// Plain string elsewhere so search/replace later is trivial.
function renderBullet(text) {
  const parts = text.split(/(\{\{TODO:[^}]+\}\})/g);
  return parts.map((part, i) => {
    if (/^\{\{TODO:.+\}\}$/.test(part)) {
      return (
        <span
          key={i}
          className="inline-block rounded bg-amber-100 px-1.5 py-0.5
                     text-[12px] font-medium text-amber-800
                     border border-amber-200/70"
        >
          {part}
        </span>
      );
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}

function TimelineItem({ job }) {
  return (
    <li className="relative list-none pl-0">
      {/* Dot — sits over the timeline stem.
          Position: -41px from the li's content-left edge (which is 32px from
          the ol's outer edge after pl-8). The 4px ring blends with bg-stone-50
          so the dot looks "punched through" the line.
          Education entries render as a small grad-cap icon instead of a dot
          to visually distinguish them from "shipped work" entries. */}
      {job.education ? (
        <span
          aria-hidden="true"
          className="absolute -left-[44px] top-[5px] flex h-5 w-5 items-center
                     justify-center rounded-full
                     bg-stone-50 dark:bg-stone-900
                     ring-4 ring-stone-50 dark:ring-stone-900
                     text-emerald-800 dark:text-emerald-400"
        >
          <GraduationCap className="h-4 w-4" strokeWidth={2} />
        </span>
      ) : (
        <span
          aria-hidden="true"
          className={`absolute -left-[41px] top-[7px] h-4 w-4 rounded-full
                      ring-4 ring-stone-50 dark:ring-stone-900
                      ${
                        job.current
                          ? "bg-emerald-800 dark:bg-emerald-400"
                          : "bg-stone-50 dark:bg-stone-900 border-2 border-emerald-800 dark:border-emerald-400"
                      }`}
        />
      )}

      {/* Header — items-center on the flex row so the CURRENT badge
          baselines visually with the role title (items-baseline made the
          badge sit slightly high because of its inner pulsing dot). */}
      <div className="flex flex-col gap-1">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          {/* Role title — bumped to text-xl so hierarchy with the
              text-sm subtitle below reads at a glance */}
          <h3 className="m-0 text-xl font-bold text-emerald-800 dark:text-emerald-400 leading-tight">
            {job.role}
          </h3>
          {job.current && (
            <span className="inline-flex items-center gap-1.5 rounded-full
                             bg-emerald-100/80 dark:bg-emerald-400/20
                             border border-transparent dark:border-emerald-400/40
                             px-2.5 py-0.5
                             text-[11px] font-semibold uppercase tracking-wider
                             text-emerald-800 dark:text-emerald-200">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-700 dark:bg-emerald-300 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-700 dark:bg-emerald-300" />
              </span>
              Current
            </span>
          )}
          {job.education && (
            <span className="inline-flex items-center gap-1 rounded-full
                             bg-stone-200/60 dark:bg-stone-700/60
                             px-2.5 py-0.5
                             text-[11px] font-semibold uppercase tracking-wider
                             text-slate-600 dark:text-stone-200">
              Education
            </span>
          )}
        </div>
        {/* Subtitle — text-sm establishes hierarchy distance from the role title */}
        <p className="m-0 text-sm text-slate-500 dark:text-stone-400">
          <span className="font-medium text-slate-700 dark:text-stone-200">{job.company}</span>
          {job.meta && <> &middot; {job.meta}</>}
          <span className="mx-1">&middot;</span>
          {job.dates}
        </p>
      </div>

      {/* Bullets + pills only render for work entries (not education) */}
      {!job.education && (
        <>
          {/* Bullets — renderBullet() highlights any {{TODO}} markers in amber */}
          <ul className="mt-4 space-y-2 pl-5 list-disc marker:text-emerald-700 dark:text-emerald-400 m-0">
            {job.bullets.map((b, i) => (
              <li
                key={i}
                className="text-[15px] leading-relaxed text-slate-700 dark:text-stone-200 list-disc"
              >
                {renderBullet(b)}
              </li>
            ))}
          </ul>

          {/* Tech pills — mt-6 (vs mt-5) gives bullets above more breathing room */}
          <div className="mt-6">
            <PillGroup>
              {job.stack.map((tech) => (
                <Pill key={tech}>{tech}</Pill>
              ))}
            </PillGroup>
          </div>
        </>
      )}
    </li>
  );
}

export default function PreviousWork() {
  usePageMeta({
    title: "Resume",
    description:
      "Yixuan's work history — Full Stack Developer at Corteva Agriscience, Antra training program, three internships, and an M.S. in Computer Science from Portland State University.",
  });

  return (
    <main className="bg-stone-50 dark:bg-stone-900 font-sans text-slate-700 dark:text-stone-200 text-left transition-colors">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 py-16 md:py-20">
        {/* Page header */}
        <header className="mb-14">
          <p className="m-0 text-sm font-medium uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
            / Resume
          </p>
          <h1 className="m-0 mt-3 font-display text-4xl md:text-5xl
                         font-bold tracking-tight leading-[1.15] text-slate-900 dark:text-stone-100">
            Where I&rsquo;ve shipped code.
          </h1>
          <p className="m-0 mt-5 max-w-2xl text-slate-500 dark:text-stone-400 leading-relaxed">
            A reverse-chronological tour of where I&rsquo;ve worked, what
            shipped, and the tech I touched along the way.
          </p>
          <a
            href="/Erica_Feng_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl
                       bg-emerald-800 px-4 py-2.5
                       text-sm font-semibold text-white
                       shadow-sm shadow-emerald-900/20
                       transition-all duration-200
                       hover:bg-emerald-900 hover:shadow-md
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800/40"
          >
            <Download className="h-4 w-4" strokeWidth={2} />
            Download full résumé (PDF)
          </a>
        </header>

        {/* Timeline.
            border-l-2 = the vertical "stem"
            pl-8 = content offset from stem
            list-none + p-0 + m-0 = kill default ol numbering & spacing */}
        <ol className="relative border-l-2 border-stone-200
                       pl-8 m-0 list-none
                       space-y-12 md:space-y-14">
          {jobs.map((job, i) => (
            <TimelineItem key={i} job={job} />
          ))}
        </ol>

        {/* Education block — canonical degree list below the timeline.
            The M.S. is also represented as a timeline entry (filling the
            Aug 2021 → Aug 2024 gap), but this block is the authoritative
            "I have these degrees" reference for HR scanning. */}
        <EducationSection />
      </div>
    </main>
  );
}

// ============================================================================
//  Education — compact section at the bottom of the Resume page
// ============================================================================
function EducationSection() {
  const degrees = [
    {
      degree: "Master of Science, Computer Science",
      institution: "Portland State University",
      meta: "Portland, OR",
      detail: "GPA 3.89",
      dates: "Sep 2021 — Jun 2023",
    },
    {
      degree: "Bachelor of Science, Computer Science",
      institution: "Portland State University & Changchun University of Technology",
      meta: "2+2 Joint Program",
      detail: null,
      dates: "Sep 2015 — Dec 2020",
    },
  ];

  return (
    <section className="mt-20 border-t border-stone-200 dark:border-stone-700 pt-12">
      <p className="m-0 text-sm font-medium uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
        / Education
      </p>
      <h2
        className="m-0 mt-3 font-display text-3xl md:text-4xl
                   font-bold tracking-tight leading-tight text-slate-900 dark:text-stone-100"
      >
        Where I learned the basics.
      </h2>

      <div className="mt-8 space-y-6">
        {degrees.map((d, i) => (
          <div
            key={i}
            className="flex flex-col gap-1 rounded-2xl border border-stone-200/60 dark:border-stone-700/60
                       bg-white dark:bg-stone-800 p-5"
          >
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="m-0 text-base font-bold text-emerald-800 dark:text-emerald-400">
                {d.degree}
              </h3>
              <span className="text-sm text-slate-500 dark:text-stone-400">{d.dates}</span>
            </div>
            <p className="m-0 text-sm text-slate-600 dark:text-stone-300">
              <span className="font-medium text-slate-700 dark:text-stone-200">{d.institution}</span>
              {d.meta && <> &middot; {d.meta}</>}
              {d.detail && <> &middot; {d.detail}</>}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
