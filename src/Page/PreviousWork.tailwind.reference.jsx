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
import { Download } from "lucide-react";
import { Pill, PillGroup } from "../components/Pill";

const jobs = [
  {
    role: "Full Stack Developer",
    company: "Corteva Agriscience",
    meta: "via Antra Inc. / Insight Global · Johnston, IA (Hybrid)",
    dates: "Aug 2024 — Present",
    current: true,
    bullets: [
      "Implement and maintain backend REST API endpoints for an internal data repository app, picking up sprint tickets across new features and bug fixes.",
      "Build and modify Angular components per sprint requirements, contributing to the team's transition into frontend development.",
      "Author SpecFlow (BDD/TDD) scenarios and Playwright end-to-end tests for the work I ship — my team owns coverage for the tickets each of us writes.",
      "Contribute to Azure Cloud Function development and support the team's Azure tenant migration tied to the Corteva corporate split.",
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
    role: "Software Engineer Intern",
    company: "Swedemom",
    meta: "Remote",
    dates: "Jul 2021 — Aug 2021",
    bullets: [
      "Improved on-site product search performance by tuning SQL queries against the C# / SQL Server backend.",
      "Identified and resolved database connection issues affecting site responsiveness.",
    ],
    stack: ["C#", "SQL", "SQL Server"],
  },
  {
    role: "Full-Stack Software Engineer Intern",
    company: "Relaymile",
    meta: "Remote",
    dates: "Apr 2021 — Jul 2021",
    bullets: [
      "Built page templates and shipped feature additions to the Relaymile site in React, HTML, and CSS within a Scrum environment.",
      "Created and updated backend routes; adjusted Python data models alongside full-stack teammates.",
    ],
    stack: ["React", "Python", "Docker", "Postman", "Asana"],
  },
  {
    role: "Web Development Intern",
    company: "Minority Programmers Association",
    meta: "Remote",
    dates: "Mar 2021 — Jun 2021",
    bullets: [
      "Built and restyled pages for the MPA website using React / Next.js as part of a Scrum team.",
      "Coordinated with UI/UX, QA, and backend developers to ensure a smooth integration.",
    ],
    stack: ["React", "Next.js", "ClickUp"],
  },
];

function TimelineItem({ job }) {
  return (
    <li className="relative list-none pl-0">
      {/* Dot — sits over the timeline stem.
          Position: -41px from the li's content-left edge (which is 32px from
          the ol's outer edge after pl-8). The 4px ring blends with bg-stone-50
          so the dot looks "punched through" the line. */}
      <span
        aria-hidden="true"
        className={`absolute -left-[41px] top-[7px] h-4 w-4 rounded-full
                    ring-4 ring-stone-50
                    ${
                      job.current
                        ? "bg-emerald-800"
                        : "bg-stone-50 border-2 border-emerald-800"
                    }`}
      />

      {/* Header — items-center on the flex row so the CURRENT badge
          baselines visually with the role title (items-baseline made the
          badge sit slightly high because of its inner pulsing dot). */}
      <div className="flex flex-col gap-1">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          {/* Role title — bumped to text-xl so hierarchy with the
              text-sm subtitle below reads at a glance */}
          <h3 className="m-0 text-xl font-bold text-emerald-800 leading-tight">
            {job.role}
          </h3>
          {job.current && (
            <span className="inline-flex items-center gap-1.5 rounded-full
                             bg-emerald-100/80 px-2.5 py-0.5
                             text-[11px] font-semibold uppercase tracking-wider
                             text-emerald-800">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-700 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-700" />
              </span>
              Current
            </span>
          )}
        </div>
        {/* Subtitle — text-sm establishes hierarchy distance from the role title */}
        <p className="m-0 text-sm text-slate-500">
          <span className="font-medium text-slate-700">{job.company}</span>
          {job.meta && <> &middot; {job.meta}</>}
          <span className="mx-1">&middot;</span>
          {job.dates}
        </p>
      </div>

      {/* Bullets */}
      <ul className="mt-4 space-y-2 pl-5 list-disc marker:text-emerald-700 m-0">
        {job.bullets.map((b, i) => (
          <li
            key={i}
            className="text-[15px] leading-relaxed text-slate-700 list-disc"
          >
            {b}
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
    </li>
  );
}

export default function PreviousWork() {
  return (
    <main className="bg-stone-50 font-sans text-slate-700 text-left">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 py-16 md:py-20">
        {/* Page header */}
        <header className="mb-14">
          <p className="m-0 text-sm font-medium uppercase tracking-widest text-emerald-700">
            / Resume
          </p>
          <h1 className="m-0 mt-3 font-display text-4xl md:text-5xl
                         font-bold tracking-tight leading-[1.15] text-slate-900">
            Where I&rsquo;ve shipped code.
          </h1>
          <p className="m-0 mt-5 max-w-2xl text-slate-500 leading-relaxed">
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
      </div>
    </main>
  );
}
