import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { send } from "emailjs-com";
import Button from "@material-ui/core/Button";
import "../Style/Contact.css";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Alert, AlertTitle } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "80%",
    height: "8vh",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  btn: {
    marginTop: "12vh",
  },
  alert: {
    textAlign: "left",
    width: "50%",
    height: "10vh",
    marginLeft: "27%",
    marginTop: "2%",
  },
}));

// EmailJS configuration is read from environment variables. Set these in a
// `.env` file at the project root (NOT committed to git):
//   REACT_APP_EMAILJS_SERVICE_ID=service_xxx
//   REACT_APP_EMAILJS_TEMPLATE_ID=template_xxx
//   REACT_APP_EMAILJS_PUBLIC_KEY=xxxxxxxxxx
const EMAILJS_SERVICE_ID  = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

function Contact() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [toSend, setToSend] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (toSend.name !== "" && toSend.message !== "" && toSend.email !== "") {
      send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, toSend, EMAILJS_PUBLIC_KEY)
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          setShowSuccess(true);
        })
        .catch((err) => {
          console.log("FAILED...", err);
        });
    } else {
      handleClickOpen();
    }
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="aboutContainer">
      {showSuccess && (
        <Alert
          severity="success"
          variant="outlined"
          id="form_alert"
          className={classes.alert}
        >
          <AlertTitle>Success</AlertTitle>
          Your message has been sent to Yixuan's email &mdash;{" "}
          <strong>Thank you!</strong>
        </Alert>
      )}
      <p className="contact_direct">
        Prefer your own email client? Just write me at{" "}
        <a href="mailto:ericafeng0@gmail.com">ericafeng0@gmail.com</a> &mdash;
        or use the form below.
      </p>
      <form className="about_form">
        <p className="welcome">Hello!! Nice to meet you!!!</p>
        <p>
          Please note that this form will DO send me an email, so please please
          please make sure you have something to say. LOLL
        </p>
        <div className="form_info">
          <TextField
            required
            placeholder="Your name here"
            variant="outlined"
            id="form_name"
            label="Name"
            name="name"
            value={toSend.name}
            className={classes.textField}
            onChange={handleChange}
          />
          <TextField
            required
            variant="outlined"
            placeholder="youremail@gmail.com"
            id="form_email"
            label="Email"
            name="email"
            value={toSend.email}
            className={classes.textField}
            onChange={handleChange}
          />
          <TextField
            required
            variant="outlined"
            placeholder="Hey Yixuan, nice to meet you too! I came across your website, ....."
            id="form_message"
            name="message"
            value={toSend.message}
            aria-label="message"
            multiline
            rows={4}
            label="Leave me a message"
            className={classes.textField}
            onChange={handleChange}
          />
        </div>
        <Button
          variant="contained"
          className={classes.btn}
          onClick={onSubmit}
          type="submit"
          color="primary"
        >
          Send
        </Button>
      </form>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Missing part of the form!! o(￣ヘ￣o＃) "}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You must fill all the form before send an email to me. Try again{" "}
            {":)"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Contact;
