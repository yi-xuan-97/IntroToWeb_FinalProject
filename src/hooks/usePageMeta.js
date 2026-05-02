// src/hooks/usePageMeta.js
// =============================================================================
// Lightweight per-route <title> + <meta name="description"> updater.
// Avoids pulling in react-helmet just for two attributes.
//
// Usage in a page component:
//   import { usePageMeta } from "../hooks/usePageMeta";
//   ...
//   usePageMeta({
//     title: "Erica Feng — Resume",
//     description: "Work history, internships, and education...",
//   });
//
// On unmount the previous values are restored, so navigating away cleanly
// reverts to the index.html defaults.
// =============================================================================

import { useEffect } from "react";

const SITE_SUFFIX = " · Yixuan";

export function usePageMeta({ title, description } = {}) {
  useEffect(() => {
    const prevTitle = document.title;
    const descTag = document.querySelector('meta[name="description"]');
    const prevDescription = descTag ? descTag.getAttribute("content") : null;

    if (title) {
      // Append site name unless it's already in the title.
      // Using `includes` (not `endsWith`) so titles like
      // "Yixuan — Full Stack Developer" don't get a duplicate suffix.
      document.title = title.includes("Yixuan")
        ? title
        : `${title}${SITE_SUFFIX}`;
    }

    if (description && descTag) {
      descTag.setAttribute("content", description);
    }

    return () => {
      document.title = prevTitle;
      if (descTag && prevDescription !== null) {
        descTag.setAttribute("content", prevDescription);
      }
    };
  }, [title, description]);
}
