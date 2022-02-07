import './about.css';
import NeelyMann from "./NeelyMann.png";

import {Col, Container, Row } from 'react-bootstrap';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';


function AboutComponent() {


  return (
    <div id="aboutDiv">
      <Container id="aboutContainer" style={{ "marginTop": "10vh", "marginBottom": "10vh" }}>
        <Row id="rowOne" style={{ "marginLeft": "3vw", "marginRight": "3vw" }}>
          <Col lg={8} >
            <img
              id="profile"
              src= {NeelyMann}
              width="195"
              height="300"
              alt=""
            />
            <p id="wrapText">
            I'm a Full Stack Web Developer passionate about developing web applications that are 
            easy to use and appealing to the public.

            I believe quality design is rooted in both simplicity and elegance; therefore, I 
            build and contribute to applications that are simple, yet effective, and put user 
            interface first.
            </p>
            <p id="wrapText">
              I earned a certificate in Full Stack Web Development from the 
              Georgia Institute of Technology to add technical expertise alongside my Bachelor of 
              Science in Biology from the University of Georgia, and have also earned additional 
              certifications from Talent Path, AWS, and other online resources. I have demonstrated 
              skills in JavaScript, Java, CSS, HTML, responsive web design, and a variety subcategories 
              of each that help to conquer both my own challenges and others. I have since also continued 
              my studies in other areas such as cloud providers like Amazon Web Services.
            </p>
            <p id="wrapText">
              I bring the following to every project:
            </p>
              <ul>
                <li>Unique problem-solving skills</li>
                <li>Creativity and imagination</li>
                <li>Dedication to teamwork and team management with flexibility and understanding</li>
                <li>A basic understanding of UX/UI principles</li>
              </ul>
            </Col>
          <Col lg={4} id="wrapText">
            <Timeline position="alternate">
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot/>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Eat</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Code</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Sleep</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>Repeat</TimelineContent>
              </TimelineItem>
            </Timeline>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutComponent;
