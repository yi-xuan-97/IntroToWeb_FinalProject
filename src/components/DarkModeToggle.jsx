// src/components/DarkModeToggle.jsx
// =============================================================================
// Sun / Moon icon button that flips the site theme.
//
// Reads + writes via the useDarkMode hook (handles localStorage and the
// <html class="dark"> sync). Designed to fit into the NavBar's icon row.
// =============================================================================

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useDarkMode } from "../hooks/useDarkMode";

export function DarkModeToggle({ className = "" }) {
  const { theme, toggle } = useDarkMode();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={
        "inline-flex items-center justify-center h-9 w-9 rounded-md " +
        "text-slate-500 hover:text-slate-900 hover:bg-stone-200/50 " +
        "dark:text-stone-300 dark:hover:text-stone-100 dark:hover:bg-stone-700/40 " +
        "transition-colors duration-200 " +
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800/30 " +
        className
      }
    >
      {isDark ? (
        <Sun className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden="true" />
      ) : (
        <Moon className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden="true" />
      )}
    </button>
  );
}
