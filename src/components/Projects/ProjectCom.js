import "./ProjectCom.scss";
import projimg from "../../assets/Project-Imgs/gfgXleet.jpg";
import { FaLinkedin, FaGit } from 'react-icons/fa';


import React from 'react';

const ProjectCom = () => {






    return (

        <section className="port_cls section_padding">
            <div className="container">
                <div className="row justify_content_cntr">
                    <div className="section_title txt_align">
                        <h5 className="sub_title">Portfolio</h5>
                        <h3 className="main_title">Works I Did</h3>
                        <ul className="line">
                            <li></li>
                        </ul>
                    </div>
                </div>
                


                <div class="row justify_content_cntr">

                    <div class="port_filte ">
                        <button type="button" class="all_btns active" onclick="audio.play();" data_filter="all">All</button>
                        <button type="button" class="all_btns" onclick="audio.play();" data_filter="DSA">DSA</button>
                        <button type="button" class="all_btns" onclick="audio.play();" data_filter="Web_Dev">Web
                            Dev</button>
                        <button type="button" class="all_btns" onclick="audio.play();" data_filter="AI">AI</button>
                        <button type="button" class="all_btns" onclick="audio.play();" data_filter="Others">Others</button>
                    </div>

                </div>



                <div className="row justify_content_cntr">

                    <div className="proj_card">

                        <div className="">

                            <div className="heading">
                                <h2 className="skill-type-icon"><FaLinkedin /></h2>
                                <h3 className='line'>Frontend <span></span></h3>
                            </div>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, officiis?</p>

                            <h4>Skills for it</h4>




                        </div>


                    </div>



                </div>

            </div>


        </section>

    )
}

export default ProjectCom;