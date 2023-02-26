import React from "react";
import "../Style/Home.css";
import pic from "./photo.jpg";
import Grid from "@material-ui/core/Grid";

function Home() {
  return (
    <div className="HomeContainer">
      <Grid container spacing={2}>
        <Grid item xs={4} className="home_img">
          <img src={pic} alt="Yixuan in NY" width={300} height={300} />
        </Grid>
        <Grid item xs={8} className="home_info">
          <h1>Hello there, I'm Yixuan Feng</h1>
          <p>
            I’m currently a graduate student studying in Portland State
            University with GPA of 3.9 and will graduate in 2023 June. I have
            previously worked as both front-end development intern and full
            stack software engineering intern. I have learned valuable
            technology knowledge from my previous experience and am a quick
            learner. Here is a quick summary of my skills:
          </p>
          <ul>
            <li>Languages: C++, Java, Python, SQL, JavaScript, C#, HTML, C</li>
            <li>
              Technologies: React, React Next, Pandas, Kafka, GCP, Docker,
              Postman
            </li>
          </ul>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={4} className="home_info_etra">
          <h2>Education</h2>
          <p className="home_co_title">Portland State University</p>
          <p>
            Master of Science in Computer Science <b>Sep. 2021 – Jun. 2023</b>
          </p>
          <p className="home_co_title">Portland State University</p>
          <p>
            Bachelar of Science in Computer Science <b>Sep. 2017 – Dec. 2020</b>
          </p>
          <p className="home_co_title">Changchun University of Technology</p>
          <p>
            Bachelar of Science in Computer Science <b>Sep. 2015 – Sep. 2017</b>
          </p>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={4} className="home_info_etra">
          <h2>Experince</h2>
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
