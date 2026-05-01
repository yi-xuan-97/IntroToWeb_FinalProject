// PostCSS config — required for Tailwind to compile inside CRA's webpack
// build. Both plugins ship as part of the Tailwind setup.
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
