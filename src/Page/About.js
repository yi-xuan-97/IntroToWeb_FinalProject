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
import pic2 from "../image/ois.png";
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
        Now that you know me enough from my CS-related experience —
        here's everything else.
      </h1>
      <p className="about_intro">
        A non-comprehensive list of things I've picked up alongside the
        code: organizing events, mentoring people, accommodating exam
        needs, grading Java, cooking. Click any title to expand.
      </p>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-ois-content"
          id="panel-ois-header"
        >
          <Typography className={classes.heading}>
            Organization of International Students Coordinator
          </Typography>
          <Typography className={classes.secondaryHeading}>
            Student Activities and Leadership Programs @PSU
          </Typography>
          <Typography className={classes.thirdHeading}>
            Aug 2022 - Jun 2023
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
            Collaborated with fellow OIS coordinators to organize and host
            cultural events for international students &mdash; Culture Night,
            Lunar New Year, Halloween Party, Game Night, Movie Night. I led the
            <b> food section</b> for our largest event, <b>International Night</b>
            (300+ attendees): worked with university advisors on documents and
            menu design, planned room layouts to meet fire code, and coordinated
            with the local department for food safety inspections. I also
            learned, the hard way, that you need at least <i>two buckets of
            water</i> for hand-washing at a public food event &mdash; I will
            never forget this.
            <br />
            <br />
            As part of the role, I was also paid to attend a leadership class
            and earned a <b>leadership certification</b> at the end. Walked away
            with a much healthier respect for spreadsheets.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={classes.section}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-testing-content"
          id="panel-testing-header"
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
            PSU Testing Services provides accommodated testing support for
            students registered with the <b>Disability Resource Center (DRC)</b>
            and their instructors. As the office assistant I scheduled exams,
            handled requests across departments, and adapted workflows for
            students who needed extra time, separate rooms, or different
            setups. The work is confidential and detail-heavy &mdash; one
            mis-scheduled exam ripples through three calendars &mdash; so I
            learned to triple-check everything before sending it.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-proctor-content"
          id="panel-proctor-header"
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
          aria-controls="panel-grader-content"
          id="panel-grader-header"
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
            The instructor invited me to grade after I did well in the course.
            As a grader I evaluated projects, quizzes, and exams, gave students
            feedback on their code, and answered questions on programming
            concepts and debugging. Turns out I'm pretty good at explaining why
            someone's loop is off-by-one.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-mentor-content"
          id="panel-mentor-header"
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
            Mentored newly-arrived international students in their first term
            at PSU &mdash; helping them navigate a new country, the academic
            system, and life on the ground. Sent <b>weekly check-in emails</b>
            with helpful info and small "things I like in Portland" notes; some
            students wrote back, some didn't. The real bonding happened in
            person: I led <b>campus tours</b>, ran light walking tours of
            downtown when there was an event, and showed up at orientation
            programs. Once you've actually met someone, the emails get answered
            faster &mdash; turns out in-person breaks the ice in a way email
            never quite does.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-cat-content"
          id="panel-cat-header"
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
          aria-controls="panel-cook-content"
          id="panel-cook-header"
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
          aria-controls="panel-walk-content"
          id="panel-walk-header"
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
