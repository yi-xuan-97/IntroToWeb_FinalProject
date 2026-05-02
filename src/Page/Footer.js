// Footer.js — refactored to Tailwind, "Warm Earthy Minimalism" design system
// Dark earth tone (emerald-800) with light text — grounds the page visually.
//
// Brand icons (GitHub, LinkedIn) and social URLs live in the shared
// src/components/BrandIcons module so NavBar + Footer stay in sync.
import React from "react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, SOCIAL_LINKS } from "../components/BrandIcons";

function Footer() {
  return (
    <footer className="bg-emerald-800 text-stone-100">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 py-12 sm:py-14 text-center">
        <p className="font-serif text-2xl sm:text-3xl text-emerald-50 leading-tight">
          Nice to meet you.
        </p>
        {/* Body text bumped from /75 to no-opacity emerald-100 for WCAG AA */}
        <p className="mt-2 text-sm sm:text-base text-emerald-100">
          Looking forward to hearing from you.
        </p>

        <div className="mt-7 flex items-center justify-center gap-7">
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-100 hover:text-white
                       transition-colors duration-200
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/70 rounded"
            aria-label="Erica Feng on LinkedIn"
          >
            <LinkedinIcon className="w-6 h-6" />
          </a>
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-100 hover:text-white
                       transition-colors duration-200
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/70 rounded"
            aria-label="Erica Feng on GitHub"
          >
            <GithubIcon className="w-6 h-6" />
          </a>
          <a
            href="mailto:ericafeng0@gmail.com"
            className="text-emerald-100 hover:text-white
                       transition-colors duration-200
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/70 rounded"
            aria-label="Email Erica Feng"
          >
            <Mail className="w-6 h-6" strokeWidth={1.75} />
          </a>
        </div>

        {/* Copyright was emerald-200/55 (~3.8:1) — failed AA. Now emerald-100/85 ≈ 6.2:1 */}
        <p className="mt-9 text-xs text-emerald-100/85 tracking-wide">
          © 2026 Erica Feng &nbsp;·&nbsp; Built with React, Tailwind, and care.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
