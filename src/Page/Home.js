import React from "react";
import "../Style/Home.css";
import pic from "../image/photo.jpg";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

function Home() {
  return (
    <div className="HomeContainer">
      <Grid container spacing={2}>
        <Grid item xs={4} className="home_img rm">
          <a href="https://www.linkedin.com/in/yixuan-feng/">
            <img src={pic} className="my_pic" alt="Erica in NY" />
          </a>
        </Grid>
        <Grid item xs={12} sm={8} className="home_info">
          <h1 className="home_title">Hello, I'm Erica Feng</h1>
          <p>
            I'm a full-stack developer based in <b>Johnston, Iowa</b>, currently
            a contractor at <b>Corteva Agriscience</b>. Day-to-day I ship .NET 8
            REST APIs and Angular 16 features in an agile, BDD-driven team — and
            write the SpecFlow / Playwright tests to back them up. I'm a quick
            learner who picks up new things in code and out of it: this same site
            started as my first React project in 2023 and has grown alongside me.
          </p>
          <p className="home_currently">
            <b>Currently:</b> deepening BDD/TDD with SpecFlow, helping migrate
            our team to a new Azure tenant, and slowly making this site nicer.
          </p>
          <ul>
            <li>
              <b>Languages:</b> C#, TypeScript, JavaScript, Java, Python, SQL,
              HTML, CSS, C++, C
            </li>
            <li>
              <b>Backend:</b> .NET 8, ASP.NET, Entity Framework, OData, REST APIs
            </li>
            <li>
              <b>Frontend:</b> Angular 16, React, Next.js
            </li>
            <li>
              <b>Testing:</b> SpecFlow (BDD/TDD), Playwright, xUnit
            </li>
            <li>
              <b>Cloud / DevOps:</b> Azure (Cloud Functions, DevOps, App
              Service), CI/CD pipelines, Docker
            </li>
            <li>
              <b>Data &amp; Tools:</b> MS SQL Server (incl. Bulk Load), Git,
              Visual Studio, VS Code, Postman, Jira, Figma
            </li>
          </ul>
          <div className="home_actions">
            <Button
              variant="contained"
              color="primary"
              href="/Erica_Feng_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download résumé (PDF)
            </Button>
            <Button
              variant="outlined"
              color="primary"
              href="mailto:ericafeng0@gmail.com"
              style={{ marginLeft: "12px" }}
            >
              Email me
            </Button>
          </div>
        </Grid>
        <Grid item xs={1} className="rm"></Grid>
        <Grid item xs={12} sm={6} className="home_info_etra">
          <h2 className="home_subtitle">Education</h2>
          <h3 className="home_co_title">Portland State University</h3>
          <p>
            Master of Science in Computer Science <b>Sep. 2021 – Jun. 2023</b>{" "}
            (GPA 3.89)
          </p>
          <h3 className="home_co_title">
            Portland State University &amp; Changchun University of Technology
          </h3>
          <p>
            Bachelor of Science in Computer Science (2+2 Joint Program){" "}
            <b>Sep. 2015 – Dec. 2020</b>
          </p>
        </Grid>
        <Grid item xs={12} sm={4} className="home_info_etra">
          <h2 className="home_subtitle">Experience</h2>
          <p>
            <b>Full Stack Developer</b> at Corteva Agriscience{" "}
            <span className="home_role_meta">(Aug 2024 — Present)</span>
          </p>
          <p>
            <b>Software Engineer Intern</b> at Swedemom
          </p>
          <p>
            <b>Full-stack Software Engineer Intern</b> at Relaymile
          </p>
          <p>
            <b>Web Development Intern</b> at Minority Programmers Association
          </p>
          <p>
            <b>Grader</b> for Advanced Programming with Java
          </p>
          <p>
            Testing Services <b>Office Assistant</b>
          </p>
          <p>
            Organization of International Student <b>Coordinator</b>
          </p>
          <p>
            International Student <b>Mentor</b>
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
