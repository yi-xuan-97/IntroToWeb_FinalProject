import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "../Style/Footer.css";

const useStyles = makeStyles((theme) => ({
  icons: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  icon: {
    color: "white",
    height: theme.spacing(5),
    width: theme.spacing(5),
    marginLeft: theme.spacing(4),
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <Box
      style={{ backgroundColor: "#E7DFD9", paddingTop: "10px" }}
      component="footer"
      className="foot"
    >

      <div className={classes.icons}>
        <a href="https://www.linkedin.com/in/yixuan-feng/">
          <span class="sr-only">Linkedin</span>
          <FontAwesomeIcon className={classes.icon} icon={faLinkedin} />
        </a>
        <a href="https://github.com/yi-xuan-97/">
          <span class="sr-only">Github</span>
          <FontAwesomeIcon className={classes.icon} icon={faGithub} />
        </a>
        <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=+ericafeng0@gmail.com">
          <span class="sr-only">Email</span>
          <FontAwesomeIcon className={classes.icon} icon={faEnvelope} />
        </a>
      <p>
        Nice to meet you! Looking forward to hearing from you in the future!!
      </p>
      </div>
    </Box>
  );
}

export default Footer;
