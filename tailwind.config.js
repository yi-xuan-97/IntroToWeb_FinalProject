/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tell Tailwind which files to scan for class names. Without this,
  // production builds would purge most classes and break the page.
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  // Class-based dark mode: the user's <html> gets a `dark` class added
  // either by the toggle (manual override) or by the OS preference (default).
  // See src/hooks/useDarkMode.js for the management logic.
  darkMode: "class",

  // Disable preflight so Tailwind's CSS reset doesn't fight with Material UI's
  // CssBaseline (used by NavBar) and the existing site's `<ul>`/`<h1>` styling
  // on Home / Resume / Project pages. The Tailwind-styled About page sets
  // explicit margin/padding/list classes anyway, so it doesn't need preflight.
  corePlugins: {
    preflight: false,
  },

  theme: {
    extend: {
      // Map Tailwind font families to the Google Fonts loaded in
      // public/index.html.
      //
      // - sans:      Golos Text — body text (humanist, slightly rounded)
      // - display:   Outfit     — geometric sans for headings (warm + modern)
      // - serif:     Gloock     — high-contrast serif for editorial moments
      // - script:    Shantell Sans (italic) — playful accent only
      // - handwrite: Mynerve    — handwritten feel
      fontFamily: {
        sans: ['"Golos Text"', "Inter", "system-ui", "-apple-system", "sans-serif"],
        display: ['"Outfit"', '"Golos Text"', "system-ui", "sans-serif"],
        serif: ['"Gloock"', "Georgia", "serif"],
        script: ['"Shantell Sans"', "cursive"],
        handwrite: ['"Mynerve"', "cursive"],
      },
    },
  },

  plugins: [],
};
