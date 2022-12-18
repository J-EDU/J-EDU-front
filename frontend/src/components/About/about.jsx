import { Box } from "@chakra-ui/react";
import React from "react";
// import "./about.css";
import { AboutTeam } from "./aboutTeam";
export const About = () => {
  return (
    <>
      <body className="body">
        <br />
        <p className="title"> ABOUT J-EDU</p>
        <div className="background">
          <div className="container">
            <p className="title2"> WHO WE ARE?</p>
          
              <Box>
              An online platform that allows instructors to build online courses
              on their preferred topics. Using J-EDU, instructors can upload
              videos, PowerPoint presentations, PDFs and any other content that
              learners might find helpful. As student you will find different
              courses in a very convenient environment.
            </Box>
            <p className="subTitle">WE'RE DIFFRENT THAN THE REST</p>
            <Box>
              Provides to you a process of teaching, training and learning, to
              improve your knowledge develop your skills, and enhance your way
              of thinking. We make you the smartest creature on earth. We
              empowers you and gets you ready to face challenges efficiently.
              Here we're simplify concepts for you to enjoy your education
              journey.
              </Box>
            <div className="content">
              <div className="left-side">
                <div className="address details">
                  <i className="fas fa-map-marker-alt"> </i>
                  <div className="topic"></div>
                  <div className="text-one"> </div>
                  <div className="text-two"> </div>
                </div>
                <div className="Phone details">
                  <i className="fas fa-phone-alt"></i>
                  <div className="topic"></div>
                  <div className="text-one"> </div>
                  <div className="text-two"> </div>
                </div>
                <div className="email details">
                  <i className="fas fa-envelope"></i>
                  <div className="topic"></div>
                  <div className="text-one"></div>
                </div>
              </div>

              <div className="right-side">
                <div className="topic-text"></div>
                <p> </p>
                <form action="#">
                  <div className="input-box"></div>
                  <div className="input-box"></div>
                  <div className="input-box message-box"></div>
                  <div className="input-box"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </body>

      <AboutTeam/>
    </>
  );
};
