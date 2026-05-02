// Central re-export for the page components used by App.js routing.
// Keeping all imports through this single barrel keeps App.js clean and
// makes future route refactors a one-file change.
export { default as Home } from "./Home";
export { default as About } from "./About";
export { default as PreviousWork } from "./PreviousWork";
export { default as Project } from "./Project";
export { default as NavBar } from "./NavBar";
export { default as Footer } from "./Footer";
export { default as NotFound } from "./NotFound";
