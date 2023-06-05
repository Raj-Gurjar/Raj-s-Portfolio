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
                    <div class="card1">

                        <div className="content">

                            <div className="heading1">
                                <h3 className='line'>Portfolio</h3>
                                <h4>Frontend</h4>
                            </div>

                            <div className="proj_imgBox">
                                <img src={projimg} alt="" />
                            </div>

                            <div className="btn_box">
                                <button> <a href="https://github.com/Raj-Gurjar" target="_blank">Live Demo</a>  </button>
                                <button> <a href="https://github.com/Raj-Gurjar" target="_blank">View Code</a>  </button>
                            </div>

                        </div>



                        <div className="layer"></div>

                    </div>
                    <div class="card1">

                        <div className="content">

                            <div className="heading1">
                                <h3 className='line'>Portfolio</h3>
                                <h4>Frontend</h4>
                            </div>

                            <div className="proj_imgBox">
                                <img src={projimg} alt="" />
                            </div>

                            <div className="btn_box">
                                <button> <a href="https://github.com/Raj-Gurjar" target="_blank">Live Demo</a>  </button>
                                <button> <a href="https://github.com/Raj-Gurjar" target="_blank">View Code</a>  </button>
                            </div>

                        </div>



                        <div className="layer"></div>

                    </div>
                    <div class="card1">

                        <div className="content">

                            <div className="heading1">
                                <h3 className='line'>Portfolio</h3>
                                <h4>Frontend</h4>
                            </div>

                            <div className="proj_imgBox">
                                <img src={projimg} alt="" />
                            </div>

                            <div className="btn_box">
                                <button> <a href="https://github.com/Raj-Gurjar" target="_blank">Live Demo</a>  </button>
                                <button> <a href="https://github.com/Raj-Gurjar" target="_blank">View Code</a>  </button>
                            </div>

                        </div>



                        <div className="layer"></div>

                    </div>


                    {/* <!--? item1 --> */}




                    {/* <!--? port Item -e --> */}







                </div>


            </div>
        </section>

    )
}

export default ProjectCom;