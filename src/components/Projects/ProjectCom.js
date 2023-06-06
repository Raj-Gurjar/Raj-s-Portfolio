import "./ProjectCom.scss";
import projimg from "../../assets/Project-Imgs/gfgXleet.jpg";
import { FaLinkedin, FaGit } from 'react-icons/fa';


import React from 'react';

const ProjectCom = () => {


    return (

        <section class="port_cls section_padding" id="Portfolio">
            <div class="container">

                <div class="row justify_content_cntr">
                    <div class="section_title txt_align">
                        <h3 class="main_title">Projects</h3>
                        <h5 class="sub_title">Works I Did</h5>
                        <div class="line" />
                    </div>
                </div>



                <div class="row justify_content_cntr">

                    {/* <!--? Item1 -s --> */}
                    <div class="col-11">

                        <div className="proj-box-1">
                            <div className="port-img">

                                <div className="proj-info">
                                    <h5>
                                        <a href="https://github.com/Raj-Gurjar">Portfolio Website</a>
                                    </h5>
                                    <span>Reactjs</span>
                                </div>

                                <img src={projimg} alt="" />

                            </div>

                        </div>
                    </div>




                    {/* <!--? item1 --> */}




                    {/* <!--? port Item -e --> */}







                </div>


            </div>
        </section >

    )
}

export default ProjectCom;