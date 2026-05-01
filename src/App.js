import "./App.css";
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
  Contact,
  Footer,
  NotFound,
} from "./Page";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          {/* New canonical paths matching the visible nav labels */}
          <Route path="/Resume" element={<PreviousWork />} />
          <Route path="/Projects" element={<Project />} />
          <Route path="/Contact" element={<Contact />} />
          {/* Backward-compat redirects from the old internal paths */}
          <Route path="/PreviousWork" element={<Navigate to="/Resume" replace />} />
          <Route path="/Project" element={<Navigate to="/Projects" replace />} />
          {/* Catch-all 404 — anything not matched above lands here */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
