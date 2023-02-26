import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
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

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    // height: "90%",
  },
  media: {
    height: 150,
  },
});

function Project() {
  const classes = useStyles();

  return (
    <div className="ProjectContainer">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" className="pro_title">
                  Jama software
                </Typography>
              </CardContent>
              <CardMedia
                className={classes.media}
                image={pic1}
                title="Front end"
              />
              <CardContent>
                <Typography variant="body1" component="p">
                  <b>
                    Working with local company Jama software to create a Jira
                    Jama extension.
                  </b>{" "}
                  Jama Jira Extension allows developer to browse Jama content in
                  Jira page. My main responsiblity contains:
                  <ul>
                    <li>Interview sponsor for detailed project requirement</li>
                    <li>Author user stories and get feedback from sponsor</li>
                    <li>Design UI/UX using Figma</li>
                    <li>
                      Developing front-end components and pages for searching
                    </li>
                    <li>
                      Work with backend team to connect front-end with backend
                    </li>
                  </ul>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <a href="https://github.com/CapstoneBitsPlease/JamaConnectFrontend">
                  Learn More
                </a>
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" className="pro_title">
                  C-Tran data Visualization
                </Typography>
              </CardContent>
              <CardMedia
                className={classes.media}
                image={pic2}
                title="data visualization"
              />
              <CardContent>
                <Typography variant="body1" component="p">
                  <b>
                    Process raw data from regional transit organization named
                    C-Tran for visualizing it’s GPS breadcrumb data deviation.{" "}
                  </b>
                  Accomplish data cleaning and data visualization using Python
                  Pandas and Seaborn. Analyse visualization to give final
                  proposal to C-Tran
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <a href="https://github.com/yi-xuan-97/C-Tran_PartB">
                  Learn More
                </a>
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" className="pro_title">
                  Android Device Application
                </Typography>
              </CardContent>
              <CardMedia
                className={classes.media}
                image={pic3}
                title="Andoid"
              />
              <CardContent>
                <Typography variant="body1" component="p">
                  For back end section, develop a small REST-ful Android
                  Application. Increamentally increase functionality, generate
                  integration test and unit test with 80% line coverage. For
                  front end section, developing Android device using some of
                  backend code.{" "}
                  <b>
                    In additionally, work on a sepcial project with Prof. David
                    for a cloud storage based Java backend and Andoid frontend
                  </b>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <a href="https://github.com/yi-xuan-97/AndriodJavaTaskManagment">
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
