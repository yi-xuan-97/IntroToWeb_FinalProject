import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import {NavBar, About, Project, PreviousWork, Contact} from './Page';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
        <Route
            exact
            path="/"
            element={<About />}
          />
          <Route
            exact
            path="/About"
            element={<About />}
          />
          <Route
            exact
            path="/PreviousWork"
            element={<PreviousWork />}
          />
          <Route
            exact
            path="/Project"
            element={<Project />}
          />
          <Route
            exact
            path="/Contact"
            element={<Contact />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
