import React from 'react';

import './ProjectCom.scss';

import 'aos/dist/aos.css';
import ProjData from './Proj-Data';
import reshape from "../../assets/Skill-Icons/html.svg";

import proj_curls from "../../assets/proj_curls.svg";



import { FaGithub, FaArrowRight } from 'react-icons/fa';

import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";



const filteredProjects = ProjData.filter(project => project.id >= 1 && project.id <= 5);
const ProjectCom = () => {

    return (
        <section className="port_cls section_padding">

            <div className="port_bg">
                <img src={reshape} alt="" />
            </div>

            <div className="container">
                <div className="section_title txt_align">
                    <h2>Portfolio</h2>
                    <h4>Works I Did</h4>
                    <div className="line" />
                </div>

                <div className="proj_card_comp">
                    {filteredProjects.map((project, index) => (


                        <div className='card1' key={index}>
                            <div className="proj_img">
                                <img src={project.image} alt="proj-img" loading='lazy' />
                                <div className="proj_details">
                                    <p>
                                        {project.description.split('.').map((sentence, index) => (
                                            <span key={index}>
                                                {sentence.trim()}{index < project.description.split('.').length - 1 ? '.' : null}
                                                {index < project.description.split('.').length - 1 ? <br /> : null}
                                            </span>
                                        ))}
                                    </p>
                                </div>
                            </div>
                            <div className="proj_content">
                                <div className="proj_text">
                                    <div className="proj_title" data-aos="fade-right" data-aos-offset="129px" >
                                        <h3>
                                            {project.title}
                                        </h3>
                                    </div>
                                    <div className="proj_sub-title">
                                        <p>{project.subTitle}</p>
                                    </div>
                                </div>

                                <div className="proj_links">

                                    {project.id === 5 ? (

                                        // Use a different icon for the project with id: 4 ("DSA Profiles")
                                        <>
                                            <a href={project.liveLink} className='leetcode' target="_blank" style={{ transform: "none" }} rel="noreferrer">
                                                <SiLeetcode />
                                            </a>

                                            <a href={project.gitLink} className="gfg" target="_blank" rel="noreferrer">
                                                <SiGeeksforgeeks />
                                            </a>
                                        </>
                                    ) : (
                                        // Use the default FaArrowRight icon for other projects
                                        <>
                                            <a href={project.liveLink} target="_blank" rel="noreferrer">
                                                <FaArrowRight />
                                            </a>

                                            <a href={project.gitLink} target="_blank" rel="noreferrer">
                                                <FaGithub />
                                            </a>
                                        </>
                                    )}


                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* <div className="more">
                    <a href={OtherProjects} target="_blank">See More</a>
                </div> */}
            </div>


            <img className="proj_curls" data-aos="fade-right" src={proj_curls} alt="" />

        </section>
    );
};

export default ProjectCom;
