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
    marginTop: theme.spacing(1),
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginRight: theme.spacing(10),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function NavBar() {

  const classes = useStyles();

  return(
    <AppBar position="static" style={{ backgroundColor: "#0066cc" }}>
    <CssBaseline />
    <Toolbar>
      {/* <Typography variant="h5" className={classes.logo}>
        Yixuan Feng
      </Typography> */}
      <div className={classes.navlinks}>
        <Link to="/" className={classes.link}>
        </Link>
        <Link to="/About" className={classes.link}>
          About
        </Link>
        <Link to="/PreviousWork" className={classes.link}>
          Previous Work
        </Link>
        <Link to="/Project" className={classes.link}>
          Project
        </Link>
        <Link to="/Contact" className={classes.link}>
          Contact
        </Link>
      </div>
    </Toolbar>
  </AppBar>
  );
}

export default NavBar;