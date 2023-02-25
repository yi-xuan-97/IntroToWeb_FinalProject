import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

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
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        style={{ backgroundColor: "	#E7DFD9" }}
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <div className={classes.icons}>
          <a href="https://www.linkedin.com/in/yixuan-feng/">
            <FontAwesomeIcon className={classes.icon} icon={faLinkedin} />
          </a>
          <a href="https://github.com/yi-xuan-97/">
            <FontAwesomeIcon className={classes.icon} icon={faGithub} />
          </a>
          <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=+ericafeng0@gmail.com">
            <FontAwesomeIcon className={classes.icon} icon={faEnvelope} />
          </a>
        </div>
      </Box>
    </Box>
  );
}

export default Footer;
