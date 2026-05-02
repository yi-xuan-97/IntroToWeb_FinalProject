// Project.tailwind.reference.jsx — Projects page with minimalist text-driven cards
// =============================================================================
// "Warm Earthy Minimalism" Projects page.
//
// Design choices vs the old MUI Card + clip-art image version:
//   - NO handwriting / script titles. Sans-serif bold (Outfit) only.
//   - NO inline kitschy SVG illustrations. Text-driven cards.
//   - Tech stack EXTRACTED from prose into Pill components for scannability
//     (HR can spot keywords in 2 seconds instead of reading paragraphs).
//   - GitHub link styled in brand color emerald-700 with arrow micro-animation.
//   - White cards on stone-50 with stone-200 hairline border + subtle hover lift.
// =============================================================================

import React from "react";
import { ArrowRight } from "lucide-react";
import { Pill, PillGroup } from "../components/Pill";
import { usePageMeta } from "../hooks/usePageMeta";

const projects = [
  {
    tag: "Capstone · 2020",
    title: "Jama Connect ↔ Jira Extension",
    description:
      "Capstone partnering with a real client — Jama Software. Eight-person agile team built a Jira extension that lets product teams browse and link Jama Connect requirements without leaving the Jira UI, eliminating a daily context-switch between two tools. I owned the sponsor interview cycle, translated their asks into user stories, prototyped the UI in Figma, and shipped the search experience as React components.",
    stack: ["React", "Figma", "Agile", "Jira API", "User Stories"],
    githubUrl: "https://github.com/CapstoneBitsPlease/JamaConnectFrontend",
  },
  {
    tag: "Data Project · 2020",
    title: "C-Tran GPS Data Visualization",
    description:
      "Two-person team for a regional transit org (C-Tran). The brief: characterize where their GPS data drifted and why. I cleaned the raw breadcrumb dumps (the usual messy reality of consumer GPS feeds — gaps, duplicates, suspicious zeros), built distribution and heatmap visualizations in Pandas + Seaborn, and walked through the magnitude and spatial pattern of deviation. Delivered findings + a sampling-strategy proposal back to C-Tran.",
    stack: ["Python", "Pandas", "Seaborn", "Data Analysis"],
    githubUrl: "https://github.com/yi-xuan-97/C-Tran_PartB",
  },
  {
    tag: "Coursework",
    title: "Android Task Management App",
    description:
      "Term-long Android coursework with a heavy testing emphasis. Built a Java REST backend and an Android client that consumed it, growing both incrementally across milestones — each milestone gating the next. Wrote unit + integration tests alongside features (not after), holding line coverage above 80% for the full term. The tests-first loop here is the same one I now run on production features at work.",
    stack: ["Java", "Android", "REST API", "Unit Testing", "Integration Testing"],
    githubUrl: "https://github.com/yi-xuan-97/AndriodJavaTaskManagment",
  },
  {
    tag: "AI Pair Programming · 2026",
    title: "This site — refactored with Gemini & Claude",
    description:
      "Took a 2023 React class project and rebuilt it three years later — Gemini as designer, Claude as developer, me as client scoping the work and making the calls. First time using Tailwind, first time reaching for inert and the grid-rows-[0fr/1fr] animation pattern. Migrated the design system off Material UI v4 to a custom \"Warm Earthy Minimalism\" palette, restructured Resume into a vertical timeline, and hardened a11y end-to-end. Caught a sneaky preflight-disabled Tailwind bug along the way that was making every border invisible site-wide. Live on Vercel. The site you're reading is the artifact.",
    stack: ["React", "Tailwind CSS", "lucide-react", "AI pair programming", "Design Systems", "a11y"],
    githubUrl: "https://github.com/yi-xuan-97/IntroToWeb_FinalProject",
  },
];

function ProjectCard({ project }) {
  return (
    <article
      className="rounded-2xl bg-white dark:bg-stone-800 p-7
                 border border-stone-200/60 dark:border-stone-700/60
                 shadow-sm transition-all duration-200
                 hover:shadow-md hover:-translate-y-0.5"
    >
      {/* Tag — small label up top, signals project context (capstone / data / etc.) */}
      <p className="m-0 text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
        {project.tag}
      </p>

      {/* Title — sans-serif bold, deep slate. NO handwriting font. */}
      <h3
        className="m-0 mt-2 font-display
                   text-xl md:text-[22px]
                   font-bold tracking-tight leading-snug
                   text-slate-900 dark:text-stone-100"
      >
        {project.title}
      </h3>

      {/* Description — straight prose, no italics for the body */}
      <p className="m-0 mt-3 text-[15px] leading-relaxed text-slate-700 dark:text-stone-200">
        {project.description}
      </p>

      {/* Stack pills — extracted tech for fast scanning */}
      <div className="mt-5">
        <PillGroup>
          {project.stack.map((tech) => (
            <Pill key={tech}>{tech}</Pill>
          ))}
        </PillGroup>
      </div>

      {/* GitHub link with arrow micro-interaction.
          group on the <a> means group-hover applies when this link is hovered. */}
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-6 inline-flex items-center gap-1.5
                   text-sm font-semibold
                   text-emerald-700 dark:text-emerald-400 hover:text-emerald-900
                   transition-colors duration-150
                   focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800/30 rounded"
      >
        View on GitHub
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
          strokeWidth={2.25}
          aria-hidden="true"
        />
      </a>
    </article>
  );
}

export default function Project() {
  usePageMeta({
    title: "Projects",
    description:
      "Selected projects by Yixuan — Jama Connect / Jira capstone in React, C-Tran GPS data visualization in Python, an Android task app in Java, and an ongoing AI-assisted Tailwind redesign of this site.",
  });

  return (
    <main className="bg-stone-50 dark:bg-stone-900 font-sans text-slate-700 dark:text-stone-200 text-left transition-colors">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 py-16 md:py-20">
        {/* Page header */}
        <header className="mb-12">
          <p className="m-0 text-sm font-medium uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
            / Selected work
          </p>
          <h1
            className="m-0 mt-3 font-display
                       text-4xl md:text-5xl
                       font-bold tracking-tight leading-[1.15]
                       text-slate-900 dark:text-stone-100"
          >
            Things I&rsquo;ve built.
          </h1>
          <p className="m-0 mt-5 max-w-2xl text-slate-500 dark:text-stone-400 leading-relaxed">
            A mix of capstone work, coursework, and ongoing side projects.
            Each card has a stack at a glance and a link to source.
          </p>
        </header>

        {/* 2-col on desktop, 1-col on mobile.
            md:gap-6 + md:gap-y-6 keeps card breathing room consistent. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>
    </main>
  );
}
