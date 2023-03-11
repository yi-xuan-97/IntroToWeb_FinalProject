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
    fontSize: "1.8vw",
    marginRight: "3vw",
    "&:hover": {
      color: "yellow",
      fontWeight: "700",
      borderBottom: "1px solid white",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "1vw",
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "2.2vw",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "3vw",
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
          <h1 style={{ width: "1px", height: "1px", overflow: "hidden" }}>
            Yixuan Feng
          </h1>
          <Link to="/" className={classes.link} style={{ display: "none" }}>
            /
          </Link>
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
