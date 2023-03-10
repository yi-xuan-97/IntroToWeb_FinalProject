import React from "react";
import "../Style/PreviousWork.css";
import pic1 from "../image/mpa.jpeg";
import pic2 from "../image/relaymile.jpeg";
import pic3 from "../image/swedemom.jpeg";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  pic: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

function PreviousWork() {
  const classes = useStyles();

  return (
    <div className="ResumeContainer">
      <Grid container spacing={3} className="gridContainer">
        <Grid item xs={3} className={classes.pic}>
          <a href="https://www.minorityprogrammers.com/">
            <img className="work_img" src={pic1} alt="mpa logo" />
          </a>
        </Grid>
        <Grid item xs={12} sm={8}>
          <h2 className="work_title">
            Web Development Intern at Minority Programmers Association
          </h2>
          <p className="work_time">March 2021 – June 2021</p>
          <p className="work_detail">
            Responsible for developing new website components and pages, as well
            as modifying existing components to enhance their functionality.
            Collaborate with UI/UX developers, QA developers, and back-end
            developers to ensure optimal website performance. Implement style
            changes based on design updates and feedback, and maintain open
            communication channels with all relevant team members to facilitate
            the development of effective website solutions.
          </p>
          <p className="work_detail">Keywords: React Next, Clickup</p>
        </Grid>
        <Grid item xs={3} className={classes.pic}>
          <a href="https://relaymile.com/">
            <img className="work_img" src={pic2} alt="repaymile logo" />
          </a>
        </Grid>
        <Grid item xs={12} sm={8}>
          <h2 className="work_title">
            Full stack Software Engineer Intern at Relaymile
          </h2>
          <p className="work_time">April 2021 – July 2021</p>
          <p className="work_detail">
            Collaborate with the back-end team to develop new routes, update
            existing routes to enhance functionality, and resolve issues with
            broken routes. Edit and optimize models to ensure optimal website
            performance. Perform code refactoring to improve the quality and
            maintainability of the codebase. Additionally, work with the
            front-end team to create and modify web pages based on established
            design principles, add new components to enhance the user
            experience, and update existing components to improve functionality.
          </p>
          <p className="work_detail">
            Keywords: React, Python, Docker, Postman, Asana
          </p>
        </Grid>
        <Grid item xs={3} className={classes.pic}>
          <a href="https://www.swedemomcenterofgiving.org/?fbclid=IwAR2FbrUj9eSL5Wk7QB5aJDheVNRLZ8XfLhVdsm0bF2JPNezAEpsucFjBL3w">
            <img className="work_img" src={pic3} alt="swedemom logo" />
          </a>
        </Grid>
        <Grid item xs={12} sm={8}>
          <h2 className="work_title">Software Engineer Intern at Swedemom</h2>
          <p className="work_time">July 2021 – August 2021</p>
          <p className="work_detail">
            Enhance the search functionality of the website by leveraging the
            SQL and C# codebase. Identify and resolve any issues related to the
            database connection to ensure optimal website performance.
          </p>
          <p className="work_detail">Keywords: SQL, C#</p>
        </Grid>
      </Grid>
    </div>
  );
}

export default PreviousWork;
