import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
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
  title: {
    fontFamily: "Shantell Sans",
    fontSize: "2vw",
    [theme.breakpoints.down("xs")]: {
      fontSize: "5vw",
    },
  },
  detail: {
    fontSize: "1vw",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.5vw",
    },
  },
}));

function Project() {
  const classes = useStyles();

  return (
    <div className="ProjectContainer">
      <Grid container spacing={2}>
        <Grid item className="card" xs={12} sm={4}>
          <Card className={classes.root}>
            <CardContent>
              <Typography gutterBottom variant="h2" className={classes.title}>
                Jama software
              </Typography>
            </CardContent>
            <CardMedia
              className={classes.media}
              image={pic1}
              title="Front end"
            />
            <CardContent>
              <Typography
                variant="body1"
                component="p"
                className={classes.detail}
              >
                <b>
                  Work with local company Jama software to create a Jira Jama
                  extension.
                </b>{" "}
                Jama Jira Extension enables developers to browse Jama content on
                Jira page. In this capacity, my primary responsibilities
                included: interviewing the sponsor to determine detailed project
                requirements, authoring user stories, and obtaining feedback
                from the sponsor. I designed the extension's user interface and
                user experience using Figma and developed front-end components
                and pages for searching. I worked closely with the back-end team
                to ensure seamless integration of the front-end and back-end
                components.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                <a
                  className="project_link"
                  href="https://github.com/CapstoneBitsPlease/JamaConnectFrontend"
                >
                  Learn More
                </a>
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item className="card" xs={12} sm={4}>
          <Card className={classes.root}>
            <CardContent>
              <Typography gutterBottom variant="h2" className={classes.title}>
                C-Tran data Visualization
              </Typography>
            </CardContent>
            <CardMedia
              className={classes.media}
              image={pic2}
              title="data visualization"
            />
            <CardContent>
              <Typography
                variant="body1"
                component="p"
                className={classes.detail}
              >
                <b>
                  Process raw data from a regional transit organization named
                  C-Tran for visualizing its GPS breadcrumb data deviation and
                  visualize it for analysis.{" "}
                </b>
                <br />
                <br />
                As part of my responsibilities, I performed data cleaning and
                utilized Python Pandas and Seaborn to create statistical
                visualizations of the GPS breadcrumb deviation. I analyzed these
                visualizations to identify statistical results on GPS breadcrumb
                deviation, and presented my findings in a final proposal to
                C-Tran."
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                <a
                  className="project_link"
                  href="https://github.com/yi-xuan-97/C-Tran_PartB"
                >
                  Learn More
                </a>
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item className="card" xs={12} sm={4}>
          <Card className={classes.root}>
            <CardContent>
              <Typography gutterBottom variant="h2" className={classes.title}>
                Android Device Application
              </Typography>
            </CardContent>
            <CardMedia className={classes.media} image={pic3} title="Andoid" />
            <CardContent>
              <Typography
                variant="body1"
                component="p"
                className={classes.detail}
              >
                <b>
                  The ultimate goal of this project is to create an Android
                  application. To ensure best practices, the development process
                  has been broken down into manageable steps.{" "}
                </b>
                For the back end section, develop a small RESTful Android
                Application. Incrementally increase functionality, generate
                integration test and unit test with 80% line coverage. For the
                front end section, developing Android devices using some backend
                code.{" "}
                <b>
                  In addition, work on a special project with Prof. David for
                  creating a new application with a cloud storage-based Java
                  backend and Android frontend
                </b>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                <a
                  className="project_link"
                  href="https://github.com/yi-xuan-97/AndriodJavaTaskManagment"
                >
                  Learn More
                </a>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Project;
