import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: "flex",
    flexWrap: "wrap",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: theme.spacing(3),
    marginRight: "3vw",
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
    <AppBar position="static" style={{ backgroundColor: "#557452" }}>
      <CssBaseline />
      <Toolbar>
        <div className={classes.navlinks}>
          <Link to="/" className={classes.link} style={{ display: "none" }} />
          <Link to="/Home" className={classes.link}>
            Home
          </Link>
          <Link to="/PreviousWork" className={classes.link}>
            Resume
          </Link>
          <Link to="/Project" className={classes.link}>
            Projects
          </Link>
          <Link to="/About" className={classes.link}>
            About Me
          </Link>
          <Link to="/Contact" className={classes.link}>
            Contact Me
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
