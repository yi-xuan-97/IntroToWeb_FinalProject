// src/hooks/useDarkMode.js
// =============================================================================
// Class-based dark mode controller.
//
// Resolution order:
//   1. User's saved preference in localStorage ("dark" or "light")
//   2. Otherwise, OS preference via `prefers-color-scheme: dark`
//   3. Default fallback: light
//
// Toggle behavior:
//   - First click ALWAYS sets explicit user preference (overrides system pref)
//   - To go back to "follow system", clear localStorage manually:
//       localStorage.removeItem("theme")
//
// Initial mount runs synchronously via a small inline script in public/index.html
// (added in P8.6 setup) so the page renders without a flash of light theme.
// =============================================================================

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme";

function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "dark" || stored === "light") return stored;
  } catch {
    /* localStorage unavailable */
  }
  if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
}

export function useDarkMode() {
  const [theme, setTheme] = useState(getInitialTheme);

  // Sync the <html class> whenever the theme changes
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, [theme]);

  // Persist explicit choices
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* noop */
    }
  }, [theme]);

  // Listen for OS-level changes (only relevant if user has NEVER chosen)
  useEffect(() => {
    const stored = (() => {
      try { return window.localStorage.getItem(STORAGE_KEY); } catch { return null; }
    })();
    if (stored === "dark" || stored === "light") return; // user already chose

    const mq = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!mq) return;
    const onChange = (e) => setTheme(e.matches ? "dark" : "light");
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  const toggle = useCallback(() => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }, []);

  return { theme, toggle, setTheme };
}
