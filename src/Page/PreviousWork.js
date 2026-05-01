import React from "react";
import "../Style/PreviousWork.css";
import pic1 from "../image/mpa.jpeg";
import pic2 from "../image/relaymile.jpeg";
import pic3 from "../image/swedemom.jpeg";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  pic: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  // Stylized placeholder used in place of a Corteva logo (we don't ship the
  // real logo with this repo).
  cortevaBadge: {
    width: "100%",
    aspectRatio: "1 / 1",
    background: "linear-gradient(135deg, #2E7D5F 0%, #76A856 100%)",
    color: "#fff",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Golos Text', sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

function PreviousWork() {
  const classes = useStyles();

  return (
    <div className="ResumeContainer">
      <div className="resume_top">
        <Button
          variant="contained"
          color="primary"
          href="/Erica_Feng_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download full résumé (PDF)
        </Button>
      </div>

      <Grid container spacing={3} className="gridContainer">
        {/* Corteva — current role */}
        <Grid item xs={3} className={classes.pic}>
          <div className={classes.cortevaBadge}>
            <span style={{ fontSize: "28px", fontWeight: 700, letterSpacing: "0.02em" }}>
              Corteva
            </span>
            <span style={{ fontSize: "12px", marginTop: "4px", opacity: 0.85 }}>
              Agriscience
            </span>
          </div>
        </Grid>
        <Grid item xs={12} sm={8}>
          <h2 className="work_title">
            Full Stack Developer at Corteva Agriscience
          </h2>
          <p className="work_time">
            August 2024 – Present &nbsp;·&nbsp; via Antra Inc. / Insight Global
            &nbsp;·&nbsp; Johnston, IA (Hybrid)
          </p>
          <p className="work_detail">
            Implement and maintain backend REST API endpoints using <b>.NET 8</b>,
            <b> OData</b>, <b>Entity Framework</b>, and <b>MS SQL Server</b> for
            an internal data repository application. Build and modify
            <b> Angular 16</b> components per sprint requirements, contributing
            to the team's transition into frontend development.
          </p>
          <p className="work_detail">
            Author <b>SpecFlow (BDD/TDD)</b> scenarios and <b>Playwright</b>{" "}
            end-to-end tests for the work I ship, in line with the team's policy
            that developers own test coverage. Contribute to <b>Azure Cloud
            Function</b> development and support the team's Azure tenant
            migration tied to the Corteva corporate split.
          </p>
          <p className="work_detail">
            Keywords: .NET 8, Angular 16, OData, Entity Framework, SpecFlow,
            Playwright, Azure, MS SQL Server, Agile / Scrum
          </p>
        </Grid>

        {/* Earlier internships */}
        <Grid item xs={3} className={classes.pic}>
          <a href="https://www.swedemomcenterofgiving.org/?fbclid=IwAR2FbrUj9eSL5Wk7QB5aJDheVNRLZ8XfLhVdsm0bF2JPNezAEpsucFjBL3w">
            <img className="work_img" src={pic3} alt="Swedemom logo" />
          </a>
        </Grid>
        <Grid item xs={12} sm={8}>
          <h2 className="work_title">Software Engineer Intern at Swedemom</h2>
          <p className="work_time">July 2021 – August 2021</p>
          <p className="work_detail">
            Improved on-site product search performance by tuning SQL queries
            against the C# / SQL Server backend. Identified and resolved
            database connection issues to keep the site responsive.
          </p>
          <p className="work_detail">Keywords: SQL, C#</p>
        </Grid>

        <Grid item xs={3} className={classes.pic}>
          <a href="https://relaymile.com/">
            <img className="work_img" src={pic2} alt="Relaymile logo" />
          </a>
        </Grid>
        <Grid item xs={12} sm={8}>
          <h2 className="work_title">
            Full-stack Software Engineer Intern at Relaymile
          </h2>
          <p className="work_time">April 2021 – July 2021</p>
          <p className="work_detail">
            Built page templates and shipped feature additions to the Relaymile
            site in React, HTML, and CSS within a Scrum environment. Created
            and updated backend routes and adjusted Python data models
            alongside full-stack teammates.
          </p>
          <p className="work_detail">
            Keywords: React, Python, Docker, Postman, Asana
          </p>
        </Grid>

        <Grid item xs={3} className={classes.pic}>
          <a href="https://www.minorityprogrammers.com/">
            <img className="work_img" src={pic1} alt="MPA logo" />
          </a>
        </Grid>
        <Grid item xs={12} sm={8}>
          <h2 className="work_title">
            Web Development Intern at Minority Programmers Association
          </h2>
          <p className="work_time">March 2021 – June 2021</p>
          <p className="work_detail">
            Built and restyled pages for the MPA website using React / Next.js
            as part of a Scrum team, coordinating with UI/UX, QA, and backend
            developers.
          </p>
          <p className="work_detail">Keywords: React, Next.js, Clickup</p>
        </Grid>
      </Grid>
    </div>
  );
}

export default PreviousWork;
