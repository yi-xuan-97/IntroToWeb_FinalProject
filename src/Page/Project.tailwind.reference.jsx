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

const projects = [
  {
    tag: "Capstone · 2020",
    title: "Jama Connect ↔ Jira Extension",
    description:
      "Eight-person agile team capstone partnering with local company Jama Software to build a Jira ↔ Jama Connect extension. The extension lets developers browse Jama content from Jira, create cross-tool links, and sync user-defined fields. I interviewed the sponsor to capture requirements, authored user stories, designed the UI/UX in Figma, and developed frontend search components in React.",
    stack: ["React", "Figma", "Agile", "Jira API", "User Stories"],
    githubUrl: "https://github.com/CapstoneBitsPlease/JamaConnectFrontend",
  },
  {
    tag: "Data Project · 2020",
    title: "C-Tran GPS Data Visualization",
    description:
      "Two-person team analyzing GPS breadcrumb data from a regional transit organization (C-Tran) to characterize position deviation. I cleaned the raw data, built statistical visualizations in Python with Pandas and Seaborn, analyzed the distribution and magnitude of GPS deviation, and presented findings in a final proposal back to C-Tran.",
    stack: ["Python", "Pandas", "Seaborn", "Data Analysis"],
    githubUrl: "https://github.com/yi-xuan-97/C-Tran_PartB",
  },
  {
    tag: "Coursework",
    title: "Android Task Management App",
    description:
      "Coursework project building an Android application incrementally over a term, with a strong testing focus. I developed a small RESTful Android backend and grew its functionality each milestone, generating integration and unit tests with 80%+ line coverage. Then I built the Android front-end on top.",
    stack: ["Java", "Android", "REST API", "Unit Testing", "Integration Testing"],
    githubUrl: "https://github.com/yi-xuan-97/AndriodJavaTaskManagment",
  },
  {
    tag: "Ongoing",
    title: "This Personal Website",
    description:
      "The site you're on right now — my first React project, kept alive and gradually improved as I've grown. Originally built as my Intro to Web Dev final project; now a living testbed for design system work in Tailwind, accessibility tweaks, and modern React patterns.",
    stack: ["React", "Tailwind CSS", "React Router", "EmailJS", "Lucide Icons"],
    githubUrl: "https://github.com/yi-xuan-97/IntroToWeb_FinalProject",
  },
];

function ProjectCard({ project }) {
  return (
    <article
      className="rounded-2xl bg-white p-7
                 border border-stone-200/60
                 shadow-sm transition-all duration-200
                 hover:shadow-md hover:-translate-y-0.5"
    >
      {/* Tag — small label up top, signals project context (capstone / data / etc.) */}
      <p className="m-0 text-xs font-semibold uppercase tracking-wider text-emerald-700">
        {project.tag}
      </p>

      {/* Title — sans-serif bold, deep slate. NO handwriting font. */}
      <h3
        className="m-0 mt-2 font-display
                   text-xl md:text-[22px]
                   font-bold tracking-tight leading-snug
                   text-slate-900"
      >
        {project.title}
      </h3>

      {/* Description — straight prose, no italics for the body */}
      <p className="m-0 mt-3 text-[15px] leading-relaxed text-slate-700">
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
                   text-emerald-700 hover:text-emerald-900
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
  return (
    <main className="bg-stone-50 font-sans text-slate-700 text-left">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 py-16 md:py-20">
        {/* Page header */}
        <header className="mb-12">
          <p className="m-0 text-sm font-medium uppercase tracking-widest text-emerald-700">
            / Selected work
          </p>
          <h1
            className="m-0 mt-3 font-display
                       text-4xl md:text-5xl
                       font-bold tracking-tight leading-[1.15]
                       text-slate-900"
          >
            Things I&rsquo;ve built.
          </h1>
          <p className="m-0 mt-5 max-w-2xl text-slate-500 leading-relaxed">
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
