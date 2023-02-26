import React from "react";
import "../Style/PreviousWork.css";
import pic1 from "../image/mpa.jpeg";
import pic2 from "../image/relaymile.jpeg";
import pic3 from "../image/swedemom.jpeg";
import Grid from "@material-ui/core/Grid";

function PreviousWork() {
  return (
    <div className="ResumeContainer">
      <Grid container spacing={2} className="gridContainer">
        <Grid item xs={4}>
          <img src={pic1} />
        </Grid>
        <Grid item xs={8}>
          <p className="work_title">
            Web Development Intern at Minority Programmers Association
          </p>
          <p className="work_detail">
            Create/modify new page, add new component, and modify component of
            existing page for more functionality. Style component and page based
            on change of design. Communicate with UI/UX developer, QA developer
            and back-end developer for better way to complete task.
          </p>
          <p className="work_detail">Keywords: React Next, Clickup</p>
        </Grid>
        <Grid item xs={4}>
          <img src={pic2} />
        </Grid>
        <Grid item xs={8}>
          <p className="work_title">
            Full stack Software Engineer Intern at Relaymile
          </p>
          <p className="work_detail">
            Work in back-end team to create new route, edit route, fix broken
            route and edit model for the use of front-end team. Code refactor
            for future improvement. Work in front-end team to create/adjust web
            page based on design, modify existing component for more
            functionality, add new component to existing page. Creating new page
            for new feature.
          </p>
          <p className="work_detail">
            Keywords: React, Python, Docker, Postman, Asana
          </p>
        </Grid>
        <Grid item xs={4}>
          <img src={pic3} />
        </Grid>
        <Grid item xs={8}>
          <p className="work_title">Software Engineer Intern at Swedemom</p>
          <p className="work_detail">
            Improve searching function based on code base of SQL and C#. Fix
            database connection issue.
          </p>
          <p className="work_detail">Keywords: SQL, C#</p>
        </Grid>
      </Grid>
    </div>
  );
}

export default PreviousWork;
