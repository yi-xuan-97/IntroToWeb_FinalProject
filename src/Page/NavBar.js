import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: "flex",
    flexWrap: "wrap",
  },
  icons: {
    marginLeft: theme.spacing(35),
  },
  icon: {
    color: "white",
    height: theme.spacing(5),
    width: theme.spacing(5),
    marginLeft: theme.spacing(4),
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "22px",
    marginRight: theme.spacing(8),
    "&:hover": {
      color: "yellow",
      fontWeight: "700",
      borderBottom: "1px solid white",
    },
  },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <AppBar position="static" style={{ backgroundColor: "#0066cc" }}>
      <CssBaseline />
      <Toolbar>
        <div className={classes.navlinks}>
          <Link to="/" className={classes.link}></Link>
          <Link to="/Home" className={classes.link}>
            Home
          </Link>
          <Link to="/About" className={classes.link}>
            About
          </Link>
          <Link to="/Project" className={classes.link}>
            Projects
          </Link>
          <Link to="/PreviousWork" className={classes.link}>
            Resume
          </Link>
          <Link to="/Contact" className={classes.link}>
            Contact Me
          </Link>
          <div className={classes.icons}>
            <FontAwesomeIcon className={classes.icon} icon={faLinkedin} />
            <FontAwesomeIcon className={classes.icon} icon={faGithub} />
            <FontAwesomeIcon className={classes.icon} icon={faEnvelope} />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
