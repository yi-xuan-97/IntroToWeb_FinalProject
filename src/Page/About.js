import React from "react";
import "../Style/About.css";

import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import pic1 from "../image/LC.png";
import pic2 from "../image/ois.jpg";
import pic3 from "../image/cat.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
    flexBasis: "50%",
    fontFamily: "'Golos Text', sans-serif",
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.pxToRem(15),
    },
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    flexBasis: "38%",
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.pxToRem(10),
    },
  },
  thirdHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.primary,
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.pxToRem(10),
    },
  },
  icon: {
    height: "9vw",
    width: "8vw",
    marginTop: "1vw",
    marginLeft: "2vw",
    marginRight: "3vw",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  detail: {
    fontFamily: "'Golos Text', sans-serif",
  },
  image: {
    marginLeft: "1vw",
    marginRight: "1vw",
    flexBasis: "50%",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

function About() {
  const classes = useStyles();

  return (
    <div className="aboutContainer">
      <h1 className="about_title">
        Now that you know me enough from my CS related experince
      </h1>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            Organization of International Students Coordinator
          </Typography>
          <Typography className={classes.secondaryHeading}>
            Student Activities and Leadership Programs @PSU
          </Typography>
          <Typography className={classes.thirdHeading}>
            Aug 2022 - Present
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <a href="https://www.instagram.com/ois.psu/">
            <img
              src={pic2}
              alt="OIS Logo"
              width={150}
              height={130}
              className={classes.image}
            />
          </a>
          <Typography className={classes.detail}>
            Collaborating with fellow OIS coordinators, I help organize and host
            various cultural events for international students, such as Culture
            Night, Lunar New Year Event, Halloween Party, Game Night, and Movie
            Night. These events offer an excellent opportunity for individuals
            who are interested in exploring diverse cultures or are
            international students themselves to participate and engage in a
            vibrant community. We encourage you to follow us on Instagram and
            join us in these exciting events.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={classes.section}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Testing Services Office Assistant
          </Typography>
          <Typography className={classes.secondaryHeading}>
            Learning Center @PSU
          </Typography>
          <Typography className={classes.thirdHeading}>
            Aug 2022 - Dec 2022
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <a href="https://www.pdx.edu/learning-center/">
            <img
              src={pic1}
              alt="Learning Center Logo"
              width={150}
              height={130}
              className={classes.image}
            />
          </a>
          <Typography className={classes.detail}>
            PSU Testing Services provides accommodated testing support for PSU
            students registered with the Disability Resource Center (DRC), as
            well as for their instructors. <br />
            As the Testing Services Office Assistant, my primary responsibility
            is to facilitate exam requests and scheduling for students with
            accommodations and instructors with specific requirements. I
            maintain regular communication with both parties to ensure that any
            updates or changes are addressed promptly. Given the highly
            confidential nature of our work, we take great care to minimize the
            risk of human error.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Exam Proctor</Typography>
          <Typography className={classes.secondaryHeading}>
            Learning Center @PSU
          </Typography>
          <Typography className={classes.thirdHeading}>
            Aug 2022 - Dec 2022
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.detail}>
            My role as an exam proctor is to ensure the integrity and
            impartiality of the examination process, while also striving to
            mitigate the stress that exam takers may experience.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            Grader for Advanced Programming in Java
          </Typography>
          <Typography className={classes.secondaryHeading}>
            CS Department @PSU
          </Typography>
          <Typography className={classes.thirdHeading}>
            Jun 2022 - Aug 2022
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.detail}>
            Due to my exceptional performance in advanced Java programming, I
            was invited by the instructor to become a grader. As a grader, I am
            responsible for evaluating projects, quizzes, and exams, as well as
            addressing related questions.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            International student Mentor
          </Typography>
          <Typography className={classes.secondaryHeading}>
            International Student Mentor Program @PSU
          </Typography>
          <Typography className={classes.thirdHeading}>
            Jul 2021 - Dec 2022
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <a href="https://www.instagram.com/isss_psu/">
            <span className="sr-only">OISSS ins</span>
            <FontAwesomeIcon className={classes.icon} icon={faInstagram} />
          </a>
          <Typography className={classes.detail}>
            As an international student mentor, my role is to provide guidance
            and support to students who are in their first term at PSU. This
            includes assisting them with their transition to a new country and
            culture, helping them navigate the academic system, and offering
            advice and support on personal and social issues. I may also
            organize social and cultural events to help students build
            connections and feel more integrated into their new community, and
            facilitate communication between students and university staff.
            Through my work, I contribute to the success and well-being of
            international students, helping them to thrive academically and
            personally during their time abroad.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            Desk Operations Group Volunteer
          </Typography>
          <Typography className={classes.secondaryHeading}>
            International Student Mentor Program @ PSU
          </Typography>
          <Typography className={classes.thirdHeading}>
            Sep 2020 - Apr 2021
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <a href="https://cat.pdx.edu/">
            <img
              src={pic3}
              alt="CAT Logo"
              width={150}
              height={130}
              className={classes.image}
            />
          </a>
          <Typography className={classes.detail}>
            The responsibilities of a Computer Action Team (CAT) Desk Operations
            Group Volunteer entail various tasks to ensure the smooth
            functioning of technological infrastructure. This includes
            monitoring and addressing issues related to technology
            infrastructure raised by MCECS faculty, staff, and students, as per
            the training guidelines. Additionally, we are expected to assist
            users during front desk duties and perform any IT-related tasks
            requested. To enhance their IT skills, attending all scheduled
            trainings, meetings, or workshops is mandatory. Thus, the IT support
            personnel play a crucial role in maintaining the efficiency of
            technological infrastructure and ensuring a seamless experience for
            the users.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Great Cook</Typography>
          <Typography className={classes.secondaryHeading}></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.detail}>
            When I'm not busy adulting, I like to indulge in some self-care by
            cooking. I must say, I'm quite the chef in the kitchen, but let's
            just say my photography skills need a bit of work. No evidence of my
            culinary masterpieces can be found on Instagram, folks - unless you
            want to see blurry, poorly lit photos of half-eaten meals.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            Perfect partner for a walk
          </Typography>
          <Typography className={classes.secondaryHeading}></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.detail}>
            I'm a fan of taking leisurely walks, but let's just say I don't set
            any land-speed records. If you're also a slow-walking aficionado,
            then drop me a line and we can go for a stroll together. Who knows,
            we might even be able to make it to the end of the block before
            sunset.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default About;
