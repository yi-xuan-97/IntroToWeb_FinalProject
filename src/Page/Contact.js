import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
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
    display: "none",
  },
}));

function Contact() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  let myRef = React.createRef();

  const [toSend, setToSend] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (toSend.name !== "" && toSend.message !== "" && toSend.email !== "") {
      send("service_0w2ygyt", "template_qc1gsvj", toSend, "OYzLiCCpownpUoTOW")
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
        })
        .catch((err) => {
          console.log("FAILED...", err);
        });
      myRef.current.style.display = "flex";
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

  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }

  return (
    <div className="aboutContainer">
      <Alert
        severity="success"
        variant="outlined"
        id="form_alert"
        className={classes.alert}
        ref={myRef}
      >
        <AlertTitle>Success</AlertTitle>
        Your message already sent to Yixuan's email —{" "}
        <strong>Thank you!</strong>
      </Alert>
      <form className="about_form">
        <h1>Hello!! Nice to meet you!!!</h1>
        <h4>
          Please note that this form will DO send me an email, so please please
          please make sure you have something to say. LOLL
        </h4>
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
            multiline
            minRows={4}
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
