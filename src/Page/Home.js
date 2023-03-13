import React from "react";
import "../Style/Home.css";
import pic from "../image/photo.jpg";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

function Home() {
  return (
    <div className="HomeContainer">
      <Grid container spacing={2}>
        <Grid item xs={4} className="home_img, rm">
          <a href="https://www.linkedin.com/in/yixuan-feng/">
            <img src={pic} className="my_pic" alt="Yixuan in NY" />
          </a>
        </Grid>
        <Grid item xs={12} sm={8} className="home_info">
          <h1 className="home_title">Hello there, I'm Yixuan Feng</h1>
          <p>
            I am currently a graduate student at Portland State University, with
            an expected graduation date of June 2023 and a cumulative GPA of
            3.9. During my academic tenure, I have gained valuable experience in
            both front-end development and full-stack software engineering
            through my previous internships. I am a quick learner and have a
            passion for expanding my technological knowledge. Below is a summary
            of my skills:
          </p>
          <ul>
            <li>Languages: C++, Java, Python, SQL, JavaScript, C#, HTML, C</li>
            <li>
              Technologies: React, React Next, Pandas, Kafka, GCP, Docker,
              Postman
            </li>
          </ul>
        </Grid>
        <Grid item xs={1} className="rm"></Grid>
        <Grid item xs={12} sm={5} className="home_info_etra">
          <h2 className="home_subtitle">Education</h2>
          <p className="home_co_title">Portland State University</p>
          <p>
            Master of Science in Computer Science <b>Sep. 2021 – Jun. 2023</b>
          </p>
          <p className="home_co_title">Portland State University</p>
          <p>
            Bachelor of Science in Computer Science <b>Sep. 2017 – Dec. 2020</b>
          </p>
          <p className="home_co_title">Changchun University of Technology</p>
          <p>
            Bachelor of Science in Computer Science <b>Sep. 2015 – Sep. 2017</b>
          </p>
        </Grid>
        <Grid item sm={1} className="rm"></Grid>
        <Grid item xs={12} sm={4} className="home_info_etra">
          <h2 className="home_subtitle">Experience</h2>
          <p>
            <b>Software Engineer Intern</b> at Swedemom
          </p>
          <p>
            <b>Full stack Software Engineer Intern</b> at Relaymile
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
            International student <b>Mentor</b>
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
