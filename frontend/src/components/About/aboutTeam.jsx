import React from "react";
import Hasan from '../../assesst/hasan.png'
import Fawzi from '../../assesst/Fawzi.jpg'
 import Sedra from '../../assesst/Sedra.jpg'
 import Bayan from '../../assesst/Bayan.jpg'
 import Ruba from '../../assesst/Ruba.jpg'
// import "./aboutTeam.css";
import { FaLinkedinIn } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";

export const AboutTeam = () =>{

    return (
      <>
      <body>
        <div className="team-section">
            <div className='container1'>
                <div className="row">
                    <div className="title">
                        <p>Meet Our Team</p>
                    </div>                
                <div className="team-card">
                    <div className="card">
                        <div className="image-section">
                            <img src={Hasan}/>
                           
                        </div>

                    <div className="content">
                        <h3>Hasan Abdelqader</h3>
                        <h4>Web developer</h4>
                    </div>
                    <div className="icons-display">
                          
                          <a
                           className="about-icon"
                           href="https://github.com/Hassanabdelqader"
                         >
                           <GoMarkGithub />
                         </a>
                         <a
                           className="about-icon"
                           href=""
                         >
                           <FaLinkedinIn />
                         </a>
                           
                            </div>
                        </div>



                        <div className="card">
                        <div className="image-section">
                            <img src={Fawzi}/>
                            
                        </div>

                    <div className="content">
                        <h3>Fawzi Shiyyab</h3>
                        <h4>Web developer</h4>
                    </div>
                    <div className="icons-display">
                          
                          <a
                           className="about-icon"
                           href="https://github.com/fawzi-shiyyab19"
                         >
                           <GoMarkGithub />
                         </a>
                         <a
                           className="about-icon"
                           href=""
                         >
                           <FaLinkedinIn />
                         </a>
                           
                            </div>
                        </div>



                        <div className="card">
                        <div className="image-section">
                            <img src={Sedra}/>
                            
                        </div>

                    <div className="content">
                        <h3>Sedra Alsabagh</h3>
                        <h4>Web developer</h4>
                    </div>
                    <div className="icons-display">
                          
                          <a
                           className="about-icon"
                           href="https://github.com/Sadrah-Alsabagh"
                         >
                           <GoMarkGithub />
                         </a>
                         <a
                           className="about-icon"
                           href="https://www.linkedin.com/in/sadrah-alsabagh-a6987b246/"
                         >
                           <FaLinkedinIn />
                         </a>
                           
                            </div>
                        </div>


                        <div className="card">
                        <div className="image-section">
                            <img src={Bayan}/>
                            
                        </div>

                    <div className="content">
                        <h3>Bayan Jawawdeh</h3>
                        <h4>Web developer</h4>
                    </div>
                    <div className="icons-display">
                          
                          <a
                           className="about-icon"
                           href="https://github.com/bayanfuad"
                         >
                           <GoMarkGithub />
                         </a>
                         <a
                           className="about-icon"
                           href=""
                         >
                           <FaLinkedinIn />
                         </a>
                           
                            </div>
                        </div>



                        <div className="card">
                        <div className="image-section">
                            <img src={Ruba}/>
                            
                        </div>

                    <div className="content">
                        <h3>Ruba Albrezat</h3>
                        <h4>Web developer</h4>
                    </div>
                    <div className="icons-display">
                          
                          <a
                           className="about-icon"
                           href="https://github.com/rubaalbrezat"
                         >
                           <GoMarkGithub />
                         </a>
                         <a
                           className="about-icon"
                           href=""
                         >
                           <FaLinkedinIn />
                         </a>
                           
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
      </body>
      </>
    );
  }

