// src/components/Testimonials.jsx
// =============================================================================
// Optional testimonials block. Pass in 1-2 short manager / teammate quotes
// when you have them. Renders nothing if `items` is empty, so it's safe to
// import + place in the page tree before you have any content.
//
// To enable on a page:
//   1. Import:    import { Testimonials } from "../components/Testimonials";
//   2. Place:     <Testimonials items={TESTIMONIAL_DATA} />
//   3. Populate:  see EXAMPLE_TESTIMONIALS below — copy the shape, fill in
//                 your own quotes, and pass them in via props.
//
// Style follows the "Warm Earthy Minimalism" design system:
//   - bg-stone-50 page background, white cards with stone-200 hairlines
//   - emerald-700 quote glyph
//   - slate-700 quote body, slate-500 attribution
// =============================================================================

import React from "react";
import { Quote } from "lucide-react";

// Drop-in example showing the expected data shape. NOT used by default —
// the parent page passes its own `items` array via props.
//
// export const EXAMPLE_TESTIMONIALS = [
//   {
//     quote:
//       "Erica picks up unfamiliar code faster than anyone I've onboarded. " +
//       "Her tests caught two regressions before they hit staging.",
//     name: "Jane Doe",
//     role: "Tech Lead, Corteva Agriscience",
//   },
//   {
//     quote:
//       "Reliable, calm under deadline pressure, and a really clean PR style.",
//     name: "John Smith",
//     role: "Senior Engineer, Antra Inc.",
//   },
// ];

export function Testimonials({ items = [], heading = "What people say" }) {
  // Render nothing until there's content — keeps the page clean while
  // you're collecting quotes.
  if (!items || items.length === 0) return null;

  return (
    <section className="border-t border-stone-200 bg-stone-50 py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <p className="m-0 text-xs font-semibold uppercase tracking-widest text-emerald-800">
          / Testimonials
        </p>
        <h2
          className="m-0 mt-2 font-display text-3xl md:text-4xl
                     font-bold tracking-tight text-slate-900"
        >
          {heading}
        </h2>

        <div
          className={`mt-10 grid gap-5 md:gap-6 ${
            items.length === 1 ? "md:grid-cols-1" : "md:grid-cols-2"
          }`}
        >
          {items.map((t, i) => (
            <figure
              key={i}
              className="rounded-2xl bg-white p-7
                         border border-stone-200/60
                         shadow-sm"
            >
              <Quote
                className="h-6 w-6 text-emerald-700 mb-3"
                strokeWidth={2}
                aria-hidden="true"
              />
              <blockquote className="m-0">
                <p className="m-0 text-[16px] md:text-[17px]
                              leading-relaxed text-slate-700">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-semibold text-slate-900">{t.name}</span>
                {t.role && (
                  <span className="text-slate-500"> &middot; {t.role}</span>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
