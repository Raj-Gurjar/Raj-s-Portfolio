import "./ProjectCom.css";
import projimg from "../assets/gfgXleet.jpg";

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
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>   


            <div className="row justify_content_cntr">

                {/* <!--? Item1 -s --> */}

                <div className="p1 port_item" data_category="DSA">
                    <div className="card">
                        <input type="checkbox" className="my_checkbox"  name=""/>
                        <div className="toggle">+</div>

                        <div className="imgBx">

                            <img className="p_img" src={projimg} alt="" />

                            <div className="img_subt">

                                <div className="subt change">


                                    <p>Coding Profiles </p>


                                    <a href="https://leetcode.com/Raj_Gurjar/" className="popup" onclick="popup()"
                                        target="_blank"><i className="fa fa-link"></i>

                                        <span className="popuptext">View leetcode</span>

                                    </a>

                                    <a href="https://auth.geeksforgeeks.org/user/raj_gurjar/" className="popup"
                                        onclick="popup()" target="_blank"><i className="fa fa-link"></i>

                                        <span className="popuptext">View GFG</span>

                                    </a>



                                </div>



                            </div>
                        </div>

                        <div className="details">
                            <h2>DSA</h2>
                            <h3>Coding Profiles</h3>

                            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Voluptatum rem qui sapiente corporis necessitatibus?

                            </p>


                        </div>


                    </div>

                </div>

                {/* <!--? item1 --> */}

             



                {/* <!--? port Item -e --> */}







            </div>


        </div>
    </section>

  )
}

export default ProjectCom;