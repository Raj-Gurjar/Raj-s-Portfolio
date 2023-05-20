import "./AboutCom.css";

import heroimg from "../assets/ReadyPlayerMe-Avatar.png";
import React from 'react';

const AboutCom = () => {
    return (


        <section className="about_cls section_padding">

            <div className="container">
                <div className="row justify_content_cntr">
                    <div className="about_img" >
                      

                    </div>

                    <div className="about_box" id="text">

                        <div className="section_title">
                            <h5 className="sub_title">About</h5>
                            <h3 className="main_title">Let's Know Me</h3>
                            <ul className="line">
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>


                        <div className="about_content card">

                            <div className="about_txt">
                                <h3>Who Am I?</h3>
                                <p>From Thinking Out of the Box in <span>DSA</span> questions to Reshaping the Box for
                                    <span>
                                        Web Development</span>
                                    and

                                    Using the power of <span>AI</span> to predict what's inside the box
                                    is my Journey to Programming and Development.
                                </p>
                            </div>

                            <div className="title_box">
                                <div className="titles">
                                    <p className="tab_links active_link" onclick="opentab('skillss')">Major Skills</p>
                                    <p className="tab_links" onclick="opentab('education')">Education</p>
                                    <p className="tab_links" onclick="opentab('other')">Other</p>
                                </div>

                            </div>


                            <div className="tab_contents active_tab" id="skillss">
                                <ul>
                                    <li>
                                        <span>Front-End Web Developer</span><br />UI/UX, Reactjs
                                    </li>
                                    <li>
                                        <span>Data Structures and Algorithms</span><br />Competitive Programming, Logical
                                        Thinking
                                        <br />Solved 600+ ques. on different coding platforms.
                                    </li>
                                    <li>
                                        <span>AI</span><br /> Python, ML
                                    </li>
                                </ul>
                            </div>

                            <div className="tab_contents" id="education">
                                <ul>
                                    <li>
                                        <span>B.Tech in IT &ensp;&ensp; (2020-24)</span><br />Specialization in AI and
                                        Robotics<br />MITS,Gwalior(M.P.)<br />current CGPA: 8.4
                                    </li>
                                    <li>
                                        <span>Certificate of Excellence in DSA</span><br />
                                        Got Certificate of Excellence in DSA from Coding Ninjas
                                        <br /> <a href="https://certificate.codingninjas.com/verify/ab974c889cb236b1"
                                            target="_blank">View Certificate</a>
                                    </li>


                                </ul>
                            </div>

                            <div className="tab_contents" id="other">
                                <ul>

                                    <li>
                                        <span>
                                            <s1 id="cnt"></s1> Days Coding Streak
                                        </span><br />
                                        Maintaining the Streak of <s1 id="cnt"></s1> days on Leetcode and on going.
                                        <br />#CodingWithConsistency
                                    </li>
                                    <li>
                                        <span>Team Leader</span><br />Managed a team in a Major Tech Event of College.
                                    </li>
                                    <li>
                                        <span>Languages</span><br />English, Hindi.
                                    </li>

                                </ul>
                            </div>


                        </div>





                    </div>

                </div>
            </div>




        </section>




    )
}

export default AboutCom;