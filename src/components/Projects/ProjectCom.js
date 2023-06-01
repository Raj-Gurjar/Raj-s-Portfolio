import "./ProjectCom.scss";
import projimg from "../../assets/Project-Imgs/gfgXleet.jpg";
import { FaLinkedin, FaGit } from 'react-icons/fa';


import React from 'react';

const ProjectCom = () => {


    // !-------------------- Port- Item Filter -s --------------------


    const FilterContainer = document.querySelector(".port_filter"),
        filterBtns = FilterContainer.children,
        totalFilterBtn = filterBtns.length,
        PortItems = document.querySelectorAll(".port_item"),
        totalPortItems = PortItems.length;

    // console.log(totalPortItems);

    for (let i = 0; i < totalFilterBtn; i++) {
        //   console.log(filterBtns[i]);
        filterBtns[i].addEventListener("click", function () {
            // console.log(this);
            // console.log(this.innerHTML);

            FilterContainer.querySelector(".active").classList.remove("active");
            this.classList.add("active");

            const filterValue = this.getAttribute("data_filter");

            // console.log(filterValue);

            for (let k = 0; k < totalPortItems; k++) {
                if (filterValue == PortItems[k].getAttribute("data_category")) {
                    PortItems[k].classList.remove("hide");
                    PortItems[k].classList.add("show");
                }
                else {
                    PortItems[k].classList.remove("show");
                    PortItems[k].classList.add("hide");
                }

                if (filterValue == "all") {
                    PortItems[k].classList.remove("hide");
                    PortItems[k].classList.add("show");
                }
            }
        });
    }
    //! -------------------- Port- Item Filter -e --------------------



    return (

        <section className="port_cls section_padding">
            <div className="container">
                <div className="row justify_content_cntr">
                    <div className="section_title txt_align">
                        <h5 className="sub_title">Projects</h5>
                        <h3 className="main_title">Works I Did</h3>
                        <ul className="line">
                            <li></li>
                        </ul>
                    </div>
                </div>



                <div class="row justify_content_cntr">

                    <div class="port_filter ">
                        <button type="button" class="all_btns active" onclick="audio.play();" data_filter="all">All</button>
                        <button type="button" class="all_btns" onclick="audio.play();" data_filter="DSA">DSA</button>
                        <button type="button" class="all_btns" onclick="audio.play();" data_filter="Web_Dev">Web
                            Dev</button>
                        <button type="button" class="all_btns" onclick="audio.play();" data_filter="AI">AI</button>
                        <button type="button" class="all_btns" onclick="audio.play();" data_filter="Others">Others</button>
                    </div>

                </div>



                <div className="row justify_content_cntr">

                    <div className="proj_card_box flex-card-box">

                        <div className="proj_item card" data_category="DSA">

                            <div className="heading">
                                <h1>Project title</h1>

                                <h3>Frontend</h3>
                                <input type="checkbox" class="my_checkbox" name="" />
                                <div class="toggle">+</div>

                            </div>

                            <div className="proj_img">
                                <img src={projimg} alt="proj img" />

                                <div className="proj_desc hide">
                                    <p>Lorem ipsum dolor sit amet consectetur adsa ipsum consequatur et quia repellat veritatis assumenda natus quis consectetur labore, porro quidem.</p>
                                    <p>Made with <span>React, Css, HTML</span></p>
                                </div>
                            </div>
                            <div className="proj_btn">
                                <button> <a href="https://github.com/Raj-Gurjar" target="_blank">Live Demo</a>  </button>
                                <button> <a href="https://github.com/Raj-Gurjar" target="_blank">View Code</a>  </button>
                            </div>






                        </div>


                    </div>



                </div>

            </div>


        </section>

    )
}

export default ProjectCom;