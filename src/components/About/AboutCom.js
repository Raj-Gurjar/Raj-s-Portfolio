import React, { useState, useEffect } from 'react';
import "./AboutCom.scss";

import AOS from 'aos';
import 'aos/dist/aos.css';
import about_img from "../../assets/My-imgs/Untitled design.png";


import { FaGithub, FaArrowRight, FaLightbulb, FaLaptopCode, } from 'react-icons/fa';
import { IoSchool } from 'react-icons/io5';
import { CgWebsite } from "react-icons/cg";




const AboutCom = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Set the animation duration to 1200ms (1.2 seconds)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)


            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            once: false, // whether animation should happen only once - while scrolling down
            mirror: true, // whether elements should animate out while scrolling past them

        });
    }, []);

    const [activeTab, setActiveTab] = useState('education');



    function opentab(tabname) {
        setActiveTab(tabname);
    }

    return (
        <section className="about_cls section_padding">
            <div className="container">

                <div className="row justify_content_cntr">

                    <div className="about_img" > {/* Apply fade-right animation */}

                        <div className="img_box" data-aos="fade-right">
                            <div className="frame">
                                <img src={about_img} alt="" loading='lazy' />
                            </div>
                        </div>

                    </div>

                    <div className="about_box" id="text" data-aos="fade-up">
                        <div className="section_title">
                            <h2>About Me</h2>
                            <h4>Let's Know Me</h4>
                            <div className="line" />
                        </div>

                        <div className="abt_txt">
                            <p>
                                From Thinking Out of the Box <box1></box1> in <span>DSA</span> questions
                                to Reshaping the Box <box2></box2> in <span>Web Development</span> and
                                Using the power of <span>AI</span> to predict what's inside the box <box3></box3> is
                                my Journey to Programming and Development.
                            </p>
                        </div>
                        <div className="about_content" data-aos="zoom-in">

                            <div className="card2">
                                <div className="abt_logo">
                                    <IoSchool />
                                </div>
                                <h3>Education</h3>
                                <div className='degree'>
                                    <p>B.tech in Information Technology, 2020-24</p>
                                    <p>Madhav Institue of Technology and Science,Gwl,Ind</p>
                                    <p>Specialization in AI and Robotics</p>


                                </div>
                            </div>

                            <div className="card2">
                                <div className="abt_logo">
                                    <FaLightbulb />
                                </div>
                                <h3>Problem Solving</h3>
                                <p>Learnt Data Structures and Algo. which helps in logic building in Programming
                                    and also helps in solving real life problems.</p>

                                <a href='https://certificate.codingninjas.com/verify/ab974c889cb236b1' target='_blank' rel="noreferrer">View Certificate</a>


                            </div>
                            <div className="card2">
                                <div className="abt_logo">
                                    <FaLaptopCode />
                                </div>
                                <h3>AI and ML</h3>
                                <p>As I am doing Specialization in AI in my College degree,
                                    I have learnt about how AI works and How to use it for real world Problems.</p>
                            </div>
                            <div className="card2">
                                <div className="abt_logo">
                                    <CgWebsite />
                                </div>
                                <h3>Web Developement</h3>
                                <p>I have explored different field in Tech. and Web Dev is the most rapidly growing and intresting thing I found.</p>
                            </div>




                        </div>


                    </div>

                </div>
            </div>


        </section>
    );
};



export default AboutCom;
