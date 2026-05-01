// src/components/Pill.jsx
// =============================================================================
// Shared "Pill Badge" component — used on Home, Resume, Projects to display
// tech stacks. Single source of truth for the pill visual style.
//
// Style follows the "Warm Earthy Minimalism" design system:
//   bg-emerald-50/80      — pale green tint (white-ish but reads green)
//   text-emerald-800      — deep pine green text
//   border-emerald-200/50 — soft green hairline border
//   rounded-full          — fully pill-shaped
//   text-xs font-medium   — small but legible
// =============================================================================

import React from "react";

export function Pill({ children, className = "" }) {
  return (
    <span
      className={
        "inline-flex items-center " +
        "bg-emerald-50/80 text-emerald-800 " +
        "border border-emerald-200/50 " +
        "rounded-full px-3 py-1.5 " +
        "text-xs font-medium " +
        "transition-colors duration-150 " +
        "hover:bg-emerald-100/80 " +
        className
      }
    >
      {children}
    </span>
  );
}

export function PillGroup({ children, className = "" }) {
  return (
    <div className={"flex flex-wrap gap-2 " + className}>
      {children}
    </div>
  );
}
