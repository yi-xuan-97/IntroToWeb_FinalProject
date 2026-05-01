// All four content pages now use Tailwind + shared design system.
// The legacy MUI-based files are kept on disk as backups — switch the import
// here back to "./Home" / "./About" / etc. if you ever need to roll back.
export { default as Home } from "./Home.tailwind.reference";
export { default as About } from "./About.tailwind.reference";
export { default as PreviousWork } from "./PreviousWork.tailwind.reference";
export { default as Project } from "./Project.tailwind.reference";
export { default as Contact } from "./Contact";
export { default as NavBar } from "./NavBar";
export { default as Footer } from "./Footer";
export { default as NotFound } from "./NotFound";
