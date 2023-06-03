import "./ProjectCom.scss";
import projimg from "../../assets/Project-Imgs/gfgXleet.jpg";
import { FaLinkedin, FaGit } from 'react-icons/fa';


import React from 'react';

const ProjectCom = () => {


    // !-------------------- Port- Item Filter -s --------------------


    // const FilterContainer = document.querySelector(".port_filter"),
    //     filterBtns = FilterContainer.children,
    //     totalFilterBtn = filterBtns.length,
    //     PortItems = document.querySelectorAll(".port_item"),
    //     totalPortItems = PortItems.length;

    // // console.log(totalPortItems);

    // for (let i = 0; i < totalFilterBtn; i++) {
    //     //   console.log(filterBtns[i]);
    //     filterBtns[i].addEventListener("click", function () {
    //         // console.log(this);
    //         // console.log(this.innerHTML);

    //         FilterContainer.querySelector(".active").classList.remove("active");
    //         this.classList.add("active");

    //         const filterValue = this.getAttribute("data_filter");

    //         // console.log(filterValue);

    //         for (let k = 0; k < totalPortItems; k++) {
    //             if (filterValue == PortItems[k].getAttribute("data_category")) {
    //                 PortItems[k].classList.remove("hide");
    //                 PortItems[k].classList.add("show");
    //             }
    //             else {
    //                 PortItems[k].classList.remove("show");
    //                 PortItems[k].classList.add("hide");
    //             }

    //             if (filterValue == "all") {
    //                 PortItems[k].classList.remove("hide");
    //                 PortItems[k].classList.add("show");
    //             }
    //         }
    //     });
    // }
    //! -------------------- Port- Item Filter -e --------------------



    return (

        <section class="port_cls section_padding" id="Portfolio">
        <div class="container">
            <div class="row justify_content_cntr">
                <div class="section_title txt_align">
                    <h5 class="sub_title">Portfolio</h5>
                    <h3 class="main_title">Works I Did</h3>
                    <ul class="line">
                        <li></li>
                     
                    </ul>
                </div>
            </div>

            {/* <div class="row justify_content_cntr">

                <div class="port_filte ">
                    <button type="button" class="all_btns active" onclick="audio.play();" data_filter="all">All</button>
                    <button type="button" class="all_btns" onclick="audio.play();" data_filter="DSA">DSA</button>
                    <button type="button" class="all_btns" onclick="audio.play();" data_filter="Web_Dev">Web
                        Dev</button>
                    <button type="button" class="all_btns" onclick="audio.play();" data_filter="AI">AI</button>
                    <button type="button" class="all_btns" onclick="audio.play();" data_filter="Others">Others</button>
                </div>

            </div>  */}



            <div class="row justify_content_cntr">

                {/* <!--? Item1 -s --> */}

                <div class="p1 port_item" data_category="DSA">
                    <div class="card">
                        <input type="checkbox" class="my_checkbox"  name=""/>
                        <div class="toggle">+</div>

                        <div class="imgBx">

                            <img class="p_img" src={projimg} alt=""/>

                            <div class="img_subt">

                                <div class="subt change">


                                    <p>Coding Profiles </p>


                                    <a href="https://leetcode.com/Raj_Gurjar/" class="popup" onclick="popup()"
                                        target="_blank"><i class="fa fa-link"></i>

                                        <span class="popuptext">View leetcode</span>

                                    </a>

                                    <a href="https://auth.geeksforgeeks.org/user/raj_gurjar/" class="popup"
                                        onclick="popup()" target="_blank"><i class="fa fa-link"></i>

                                        <span class="popuptext">View GFG</span>

                                    </a>



                                </div>



                            </div>
                        </div>

                        <div class="details">
                            <h2>DSA</h2>
                            <h3>Coding Profiles</h3>

                            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Voluptatum rem qui sapiente corporis necessitatibus?

                            </p>


                        </div>


                    </div>

                </div>

                {/* <!--? item1 --> */}

                {/* <!--? Item2 -s --> */}

                <div class="p1 port_item" data_category="DSA">
                    <div class="card">
                        <input type="checkbox" name=""/>
                        <div class="toggle">+</div>

                        <div class="imgBx">

                            <img class="p_img" src={projimg} alt=""/>

                            <div class="img_subt">

                                <div class="subt">


                                    <p>Coding Profiles </p>


                                    <a href="https://leetcode.com/Raj_Gurjar/" class="popup" onclick="popup()"
                                        target="_blank"><i class="fa fa-link"></i>

                                        <span class="popuptext">View leetcode</span>

                                    </a>

                                    <a href="https://auth.geeksforgeeks.org/user/raj_gurjar/" class="popup"
                                        onclick="popup()" target="_blank"><i class="fa fa-link"></i>

                                        <span class="popuptext">View GFG</span>

                                    </a>



                                </div>



                            </div>
                        </div>

                        <div class="details">
                            <h2>DSA</h2>
                            <h3>Coding Profiles</h3>

                            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Voluptatum rem qui sapiente corporis necessitatibus?

                            </p>


                        </div>


                    </div>

                </div>

                {/* <!--? item2 --> */}

                {/* <!--? Item3 -s --> */}

                <div class="p1 port_item" data_category="DSA">
                    <div class="card">
                        <input type="checkbox" name=""/>
                        <div class="toggle">+</div>

                        <div class="imgBx">

                            <img class="p_img" src={projimg} alt=""/>

                            <div class="img_subt">

                                <div class="subt">


                                    <p>Coding Profiles </p>


                                    <a href="https://leetcode.com/Raj_Gurjar/" class="popup" onclick="popup()"
                                        target="_blank"><i class="fa fa-link"></i>

                                        <span class="popuptext">View leetcode</span>

                                    </a>

                                    <a href="https://auth.geeksforgeeks.org/user/raj_gurjar/" class="popup"
                                        onclick="popup()" target="_blank"><i class="fa fa-link"></i>

                                        <span class="popuptext">View GFG</span>

                                    </a>



                                </div>



                            </div>
                        </div>

                        <div class="details">
                            <h2>DSA</h2>
                            <h3>Coding Profiles</h3>

                            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Voluptatum rem qui sapiente corporis necessitatibus?

                            </p>


                        </div>


                    </div>

                </div>

                {/* <!--? item3 --> */}



                {/* <!--? port Item -e --> */}







            </div>


        </div>
    </section>

    )
}

export default ProjectCom;