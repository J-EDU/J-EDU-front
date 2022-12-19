import React, { Component } from 'react';
import './aboutTeam.css';
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IconContext } from 'react-icons';

class AboutUs extends Component {
    render() {
        const TeamData = require("./TeamData.json")
        return (
            <>
            <div className='backcolor'>
                <section className="">

                    <article className="">
                        <h1 className='AboutUs_h1'> ABOUT US </h1>
                       <div className='AboutUs-div'>
                       <h5 className='AboutUs_h5'>We are J-EDU team,Our goal in the project is to provide an online learning platform to help students and give appropriate courses for all disciplines in order to develop skills and experience. </h5 >
                       </div>
                    </article>

                    <IconContext.Provider value={{ color:"black" ,size :"1.8em"}} >

                        <h1 className='AboutUs_h1'> Team members</h1>
                        <div className='row'>
                            {TeamData.map(item =>
                                <div className="column">
                                    <div className="card">
                                        <img src={item.img} className="img"></img>
                                        <div className="name">{item.name}</div>
                                        <hr />
                                        <div className="title">Full Stack Developer</div>
                                        <div className="icon" >
                                            <a href={item.github} className='a' target="_blank"><FaGithub /></a>

                                        </div>

                                    </div>
                                </div>

                            )}

                        </div>

                    </IconContext.Provider>


                </section>
                </div>
            </>
        );
    }
}

export default AboutUs;