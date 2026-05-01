import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import "../Style/Project.css";
import pic1 from "../image/frontend.webp";
import pic2 from "../image/data.jpg";
import pic3 from "../image/Android_Robot.png";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
  },
  card: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "2vw",
    },
  },
  media: {
    height: 150,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  // Stylized media for the "this site" project (no real image asset)
  siteMedia: {
    height: 150,
    background:
      "linear-gradient(135deg, #fbf7ef 0%, #f4eedd 60%, #f4d5bd 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Shantell Sans', cursive",
    fontSize: "42px",
    color: "#557452",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  title: {
    fontFamily: "Shantell Sans",
    fontSize: "30px",
  },
  detail: {
    fontSize: "16px",
    lineHeight: 1.55,
  },
}));

function Project() {
  const classes = useStyles();

  return (
    <div className="ProjectContainer">
      <Grid container spacing={2}>
        <Grid item className="card" xs={12} sm={6}>
          <Card className={classes.root}>
            <CardContent>
              <Typography gutterBottom variant="h2" className={classes.title}>
                Jama Connect ↔ Jira Extension
              </Typography>
            </CardContent>
            <CardMedia
              className={classes.media}
              image={pic1}
              title="Jama Connect / Jira Extension"
            />
            <CardContent>
              <Typography
                variant="body1"
                component="p"
                className={classes.detail}
              >
                <b>
                  Capstone project — eight-person agile team partnering with
                  local company Jama Software to build a Jira ↔ Jama Connect
                  extension.
                </b>{" "}
                The extension lets developers browse Jama content from Jira,
                create cross-tool links, and sync user-defined fields. I
                interviewed the sponsor to capture requirements, authored user
                stories, designed the UI/UX in Figma, and developed frontend
                search components in React. I worked closely with the back-end
                team to keep front and back integrated.
              </Typography>
            </CardContent>
            <CardActions>
              <a
                className="project_link"
                href="https://github.com/CapstoneBitsPlease/JamaConnectFrontend"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub →
              </a>
            </CardActions>
          </Card>
        </Grid>

        <Grid item className="card" xs={12} sm={6}>
          <Card className={classes.root}>
            <CardContent>
              <Typography gutterBottom variant="h2" className={classes.title}>
                C-Tran Data Visualization
              </Typography>
            </CardContent>
            <CardMedia
              className={classes.media}
              image={pic2}
              title="C-Tran data visualization"
            />
            <CardContent>
              <Typography
                variant="body1"
                component="p"
                className={classes.detail}
              >
                <b>
                  Two-person team analyzing GPS breadcrumb data from a regional
                  transit organization (C-Tran) to characterize position
                  deviation.
                </b>{" "}
                I cleaned the raw data, built statistical visualizations in
                Python with Pandas and Seaborn, analyzed the distribution and
                magnitude of GPS deviation, and presented findings in a final
                proposal back to C-Tran.
              </Typography>
            </CardContent>
            <CardActions>
              <a
                className="project_link"
                href="https://github.com/yi-xuan-97/C-Tran_PartB"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub →
              </a>
            </CardActions>
          </Card>
        </Grid>

        <Grid item className="card" xs={12} sm={6}>
          <Card className={classes.root}>
            <CardContent>
              <Typography gutterBottom variant="h2" className={classes.title}>
                Android Task Management App
              </Typography>
            </CardContent>
            <CardMedia
              className={classes.media}
              image={pic3}
              title="Android task management app"
            />
            <CardContent>
              <Typography
                variant="body1"
                component="p"
                className={classes.detail}
              >
                <b>
                  Coursework project building an Android application
                  incrementally over a term, with a strong testing focus.
                </b>{" "}
                I developed a small RESTful Android backend and grew its
                functionality each milestone, generating integration and unit
                tests with 80%+ line coverage. Then I built the Android
                front-end on top. As an extra, I worked with Prof. David on a
                cloud-storage-backed task manager with a Java backend and an
                Android frontend.
              </Typography>
            </CardContent>
            <CardActions>
              <a
                className="project_link"
                href="https://github.com/yi-xuan-97/AndriodJavaTaskManagment"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub →
              </a>
            </CardActions>
          </Card>
        </Grid>

        <Grid item className="card" xs={12} sm={6}>
          <Card className={classes.root}>
            <CardContent>
              <Typography gutterBottom variant="h2" className={classes.title}>
                This Personal Website
              </Typography>
            </CardContent>
            <div className={classes.siteMedia}>{"{ erica.feng }"}</div>
            <CardContent>
              <Typography
                variant="body1"
                component="p"
                className={classes.detail}
              >
                <b>
                  The site you're on right now — my first React project, kept
                  alive and gradually improved as I've grown.
                </b>{" "}
                Originally built as my Intro to Web Dev final project (React,
                Material UI, React Router, EmailJS), it's been refactored to
                modernize the routing, add a 404 page, move credentials out of
                source, and refresh the content to reflect my current role at
                Corteva. A perpetual side-project.
              </Typography>
            </CardContent>
            <CardActions>
              <a
                className="project_link"
                href="https://github.com/yi-xuan-97/IntroToWeb_FinalProject"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub →
              </a>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Project;
