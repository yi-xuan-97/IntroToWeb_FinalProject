import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "10vh 5vw",
        minHeight: "60vh",
        fontFamily: "'Golos Text', sans-serif",
      }}
    >
      <h1
        style={{
          fontFamily: "'Shantell Sans', cursive",
          fontSize: "60px",
          marginBottom: "16px",
        }}
      >
        404
      </h1>
      <p style={{ fontSize: "20px", marginBottom: "8px" }}>
        Looks like that page wandered off.
      </p>
      <p style={{ fontSize: "16px", color: "#666", marginBottom: "32px" }}>
        Try one of these instead:
      </p>
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Link to="/Home" style={linkStyle}>
          Home
        </Link>
        <Link to="/Resume" style={linkStyle}>
          Resume
        </Link>
        <Link to="/Projects" style={linkStyle}>
          Projects
        </Link>
        <Link to="/About" style={linkStyle}>
          About Me
        </Link>
        <Link to="/Contact" style={linkStyle}>
          Contact Me
        </Link>
      </div>
    </div>
  );
}

const linkStyle = {
  color: "#557452",
  fontSize: "18px",
  textDecoration: "underline",
};

export default NotFound;
