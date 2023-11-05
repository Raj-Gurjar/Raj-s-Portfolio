// OtherProjects.js

import './Other-Projects.scss'

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProjectCom.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjData from './Proj-Data';
import reshape from "../../assets/reshape.svg";

import proj_curls from "../../assets/proj_curls.svg";



import { FaGithub, FaArrowRight } from 'react-icons/fa';
import { BsArrowRight } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { transform } from 'framer-motion';

const filteredProjects = ProjData.filter(project => project.id >= 5 && project.id <= 7);

const OtherProjects = () => {
    return (
        <section className='OtherProj section_padding port_cls'>

            <div className="port_bg">
                <img src={reshape} alt="" />
            </div>

            <div className="container">
                <div className="section_title txt_align">
                    <h2>Other Projects</h2>
                    <h4>Some Other Works of Mine</h4>
                    <div className="line" />
                </div>

                <div className="proj_card_comp">
                    {filteredProjects.map((project, index) => (
                        <div className='card1' key={index}>
                            <div className="proj_img">
                                <img src={project.image} alt="" />
                                <div className="proj_details">
                                    <p>
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                            <div className="proj_content">
                                <div className="proj_text">
                                    <div className="proj_title" data-aos="fade-right" >
                                        <h3>
                                            {project.title}
                                        </h3>
                                    </div>
                                    <div className="proj_sub-title">
                                        <p>{project.subTitle}</p>
                                    </div>
                                </div>

                                <div className="proj_links">

                                    {project.id === 4 ? (

                                        // Use a different icon for the project with id: 4 ("DSA Profiles")
                                        <>
                                            <a href={project.liveLink} className='leetcode' target="_blank" style={{ transform: "none" }}>
                                                <SiLeetcode />
                                            </a>

                                            <a href={project.liveLink} className="gfg" target="_blank">
                                                <SiGeeksforgeeks />
                                            </a>
                                        </>
                                    ) : (
                                        // Use the default FaArrowRight icon for other projects
                                        <>
                                            <a href={project.liveLink} target="_blank">
                                                <FaArrowRight />
                                            </a>

                                            <a href={project.gitLink} target="_blank">
                                                <FaGithub />
                                            </a>
                                        </>
                                    )}


                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>




        </section>
    );
};

export default OtherProjects;
