// Top-level routing. Each visible nav link gets a canonical capitalized
// path (/Resume, /Projects, /About). The lowercase /resume style aliases
// could be added later via additional <Route> entries if SEO needs it.
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {
  NavBar,
  Home,
  About,
  Project,
  PreviousWork,
  Footer,
  NotFound,
} from "./pages";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        {/* Canonical paths matching the visible nav labels */}
        <Route path="/Resume" element={<PreviousWork />} />
        <Route path="/Projects" element={<Project />} />
        {/* Backward-compat redirects from the old internal paths */}
        <Route path="/PreviousWork" element={<Navigate to="/Resume" replace />} />
        <Route path="/Project" element={<Navigate to="/Projects" replace />} />
        {/* Catch-all 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
