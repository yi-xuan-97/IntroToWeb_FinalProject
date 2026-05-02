// NavBar.js — Tailwind rebuild, "Warm Earthy Minimalism" design system
// Replaces the previous Material UI AppBar implementation.
//
// Highlights:
//   - sticky top + backdrop-blur for "scroll past the page" feel
//   - NavLink's isActive callback handles active state cleanly
//   - active page indicator: small green dot below the link
//   - mobile hamburger drawer using the grid-rows trick (no animation lib)
//   - the legacy sr-only <h1> was removed (it was creating duplicate-h1
//     warnings in pages that have their own h1, e.g., About)
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon, SOCIAL_LINKS } from "../components/BrandIcons";
import { DarkModeToggle } from "../components/DarkModeToggle";

// Contact lives in the Home page (Email Me CTA) and the Footer now —
// no need to surface it as a top-level nav item.
const links = [
  { to: "/Resume", label: "Resume" },
  { to: "/Projects", label: "Projects" },
  { to: "/About", label: "About Me" },
];

function NavItem({ to, label, mobile, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        [
          "relative text-sm font-medium transition-colors duration-200",
          mobile
            ? "block px-5 py-3"
            : "px-3 py-2 rounded-md",
          isActive
            ? "text-emerald-800 dark:text-emerald-400 font-semibold"
            : "text-slate-700 dark:text-stone-200 hover:bg-stone-200/50 dark:hover:bg-stone-700/40 hover:text-slate-900 dark:hover:text-stone-100",
        ]
          .filter(Boolean)
          .join(" ")
      }
    >
      {({ isActive }) => (
        <>
          <span>{label}</span>
          {/* Active dot — desktop only; mobile uses font-weight + color alone */}
          {isActive && !mobile && (
            <span
              aria-hidden="true"
              className="absolute -bottom-0.5 left-1/2 -translate-x-1/2
                         w-1 h-1 rounded-full bg-emerald-800 dark:bg-emerald-400"
            />
          )}
        </>
      )}
    </NavLink>
  );
}

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50
                 bg-stone-50/80 dark:bg-stone-900/80 backdrop-blur-md
                 border-b border-stone-200 dark:border-stone-800"
      // GPU layer: keeps backdrop-blur from flickering in Safari with sticky.
      style={{ transform: "translateZ(0)" }}
    >
      <div
        className="max-w-6xl mx-auto px-5 sm:px-8
                   h-16 flex items-center justify-between"
      >
        {/* Brand — links home; `end` prevents partial path matching */}
        <NavLink
          to="/"
          end
          onClick={() => setOpen(false)}
          className="text-sm font-bold tracking-widest text-emerald-800 dark:text-emerald-400
                     hover:opacity-80 transition-opacity
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800/30 rounded"
        >
          YIXUAN
        </NavLink>

        {/* Desktop nav (md and up).
            list-none + p-0 + m-0 explicitly kills the default ul bullets
            and indentation (preflight is disabled in tailwind.config.js). */}
        <ul className="hidden md:flex items-center gap-1 list-none p-0 m-0">
          {links.map((link) => (
            <li key={link.to} className="list-none">
              <NavItem {...link} />
            </li>
          ))}

          {/* Hairline divider between text links and social icons */}
          <li className="list-none mx-2 h-5 w-px bg-stone-300 dark:bg-stone-700" aria-hidden="true" />

          {/* Social icon links — open in new tab, never become "active" */}
          <li className="list-none">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="inline-flex items-center justify-center
                         h-9 w-9 rounded-md
                         text-slate-500 hover:text-slate-900 hover:bg-stone-200/50
                         dark:text-stone-300 dark:hover:text-stone-100 dark:hover:bg-stone-700/40
                         transition-colors duration-200
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800/30"
            >
              <GithubIcon className="h-[18px] w-[18px]" />
            </a>
          </li>
          <li className="list-none">
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex items-center justify-center
                         h-9 w-9 rounded-md
                         text-slate-500 hover:text-slate-900 hover:bg-stone-200/50
                         dark:text-stone-300 dark:hover:text-stone-100 dark:hover:bg-stone-700/40
                         transition-colors duration-200
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800/30"
            >
              <LinkedinIcon className="h-[18px] w-[18px]" />
            </a>
          </li>
          <li className="list-none">
            <DarkModeToggle />
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="md:hidden p-2 -mr-2 rounded-md
                     text-slate-700 dark:text-stone-200
                     hover:bg-stone-200/50 dark:hover:bg-stone-700/40
                     transition-colors duration-200
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800/30"
        >
          {open ? (
            <X className="w-5 h-5" strokeWidth={2} />
          ) : (
            <Menu className="w-5 h-5" strokeWidth={2} />
          )}
        </button>
      </div>

      {/* Mobile drawer — grid-rows trick animates auto-height smoothly */}
      <div
        id="mobile-nav"
        className={`md:hidden grid transition-all duration-300 ease-out
                    ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <ul className="list-none m-0 px-0 py-2 border-t border-stone-200/60">
            {links.map((link) => (
              <li key={link.to} className="list-none">
                <NavItem {...link} mobile onClick={() => setOpen(false)} />
              </li>
            ))}
          </ul>
          {/* Mobile drawer's social row — sits flush with the text links */}
          <div className="flex items-center gap-2 px-5 pb-3 pt-1
                          border-t border-stone-200/40">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center h-9 w-9 rounded-md
                         text-slate-500 hover:text-slate-900 hover:bg-stone-200/50
                         transition-colors duration-200"
            >
              <GithubIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center h-9 w-9 rounded-md
                         text-slate-500 hover:text-slate-900 hover:bg-stone-200/50
                         transition-colors duration-200"
            >
              <LinkedinIcon className="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
