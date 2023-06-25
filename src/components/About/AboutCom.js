import React, { useState, useEffect } from 'react';
import "./AboutCom.scss";

import AOS from 'aos';
import 'aos/dist/aos.css';
import about_img from "../../assets/Background-imgs/bg1.png";
import resume from '../../assets/Other/Resume (Raj).pdf';

const AboutCom = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000, // Set the animation duration to 1200ms (1.2 seconds)
        });
      }, []);
    
    const [activeTab, setActiveTab] = useState('skillss');



    function opentab(tabname) {
        setActiveTab(tabname);
    }

    return (
        <section className="about_cls section_padding after_bg_col">
            <div className="container">
                <div className="row justify_content_cntr">
                    <div className="about_img" data-aos="fade-up"> {/* Apply fade-right animation */}
                        <div className="img_box frame">
                            <div className="frame">
                                <img src={about_img} alt="" />
                            </div>
                            <div className="abt_btn_box" data-aos="fade-up">
                                <button className='res_btn'><a href={resume} target='_blank' rel="noreferrer" data-aos="fade-up" data-aos-delay="500"> View Resume</a></button>
                                <button className='res_btn'><a href='https://www.linkedin.com/in/raj-chhalotre-29jul01/' target='_blank' rel="noreferrer" data-aos="fade-up" data-aos-delay="500">Linkedin</a></button>
                            </div>
                        </div>



                    </div>

                    <div className="about_box" id="text" data-aos="fade-up">
                        <div className="section_title">
                            <h3 className="main_title">About</h3>
                            <h5 className="sub_title">Let's Know Me</h5>
                            <div className="line" />

                        </div>

                        <div className="about_content">
                            <div className="about_txt">
                                <p>
                                    From Thinking Out of the Box in <span>DSA</span> questions to Reshaping the Box in{' '}
                                    <span>Web Development</span> and Using the power of <span>AI</span> to predict what's inside the box is my
                                    Journey to Programming and Development.
                                </p>
                            </div>

                            <div className="title_box">
                                <div className="titles">
                                    <p
                                        className={`tab_links ${activeTab === 'skillss' ? 'active_link' : ''}`}
                                        onClick={() => opentab('skillss')}
                                    >
                                        Major Skills
                                    </p>
                                    <p
                                        className={`tab_links ${activeTab === 'education' ? 'active_link' : ''}`}
                                        onClick={() => opentab('education')}
                                    >
                                        Education
                                    </p>
                                    <p
                                        className={`tab_links ${activeTab === 'other' ? 'active_link' : ''}`}
                                        onClick={() => opentab('other')}
                                    >
                                        Other
                                    </p>
                                </div>
                            </div>

                            <div className={`tab_contents ${activeTab === 'skillss' ? 'active_tab' : ''}`} id="skillss">
                                <ul>
                                    <li>
                                        <span>Front-End Web Developer</span>
                                        <p>UI/UX, Reactjs</p>

                                    </li>

                                    <li>
                                        <span>Data Structures and Algorithms</span>
                                        <p>
                                            Competitive Programming, Logical Thinking <br />
                                            Solved 600+ ques. on different coding platforms.</p>

                                    </li>

                                    <li>
                                        <span>AI</span>
                                        <p>
                                            Python, ML
                                        </p>
                                    </li>

                                </ul>
                            </div>

                            <div className={`tab_contents ${activeTab === 'education' ? 'active_tab' : ''}`} id="education">
                                <ul>
                                    <li>
                                        <span>B.Tech in IT &ensp;&ensp; (2020-24)</span>
                                        <br />
                                        Specialization in AI and Robotics
                                        <br />
                                        MITS,Gwalior(M.P.)
                                        <br />
                                        current CGPA: 8.4
                                    </li>
                                    <li>
                                        <span>Certificate of Excellence in DSA</span>
                                        <br />
                                        Got Certificate of Excellence in DSA from Coding Ninjas
                                        <br />{' '}
                                        <a href="https://certificate.codingninjas.com/verify/ab974c889cb236b1" target="_blank" rel="noreferrer">
                                            View Certificate
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className={`tab_contents ${activeTab === 'other' ? 'active_tab' : ''}`} id="other">
                                <ul>
                                    <li>
                                        <span>
                                            <s1 id="cnt"></s1> Days Coding Streak
                                        </span>
                                        <br />
                                        Maintaining the Streak of <s1 id="cnt"></s1> days on Leetcode and ongoing.
                                        <br />
                                        #CodingWithConsistency
                                    </li>
                                    <li>
                                        <span>Team Leader</span>
                                        <br />
                                        Managed a team in a Major Tech Event of College.
                                    </li>
                                    <li>
                                        <span>Languages</span>
                                        <br />
                                        English, Hindi.
                                    </li>
                                </ul>
                            </div>

                            {/* <button>ff</button> */}

                        </div>
                        {/* <button>ff</button> */}

                    </div>

                </div>
            </div>
        </section>
    );
};



export default AboutCom;
