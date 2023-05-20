import React from 'react';
import "./SkillCom.css";


const SkillCom = () => {
    return (

        <section className="skill_cls section_padding">

            <div className="container">

                <div className="row justify_content_cntr">

                    <div className="section_title txt_align">
                        <h5 className="sub_title">Skills</h5>
                        <h3 className="main_title">Why you Hire me?</h3>
                        <ul type="none" className="line">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>

                <div className="row justify_content_cntr">

                    {/* <!-- skill Item -s --> */}



                    <div className="skill_type  card_item card">
                        <div className="skill_item_inner  card_item_inner">

                            <div className="icon">
                                <i className="fas fa-code"> </i>
                            </div>
                            <h3>Language</h3>

                            <div className="skill_items ani1">

                                <div className="skill_item">
                                    <div className="skill_img">
                                    </div>
                                    Html5
                                </div>
                                <div className="skill_item">
                                    <div className="skill_img">

                                    </div>
                                    CSS
                                </div>
                                <div className="skill_item">
                                    <div className="skill_img">

                                    </div>
                                    JS
                                </div>
                                <div className="skill_item">
                                    <div className="skill_img">

                                    </div>
                                    Cpp
                                </div>
                                <div className="skill_item">
                                    <div className="skill_img">

                                    </div>
                                    Python
                                </div>

                            </div>



                        </div>
                    </div>

                    {/* <!-- --------------- --> */}

                    <div className="skill_type   card_item card">
                        <div className="skill_item_inner  card_item_inner">

                            <div className="icon">
                                <i className="fas fa-laptop-code"> </i>
                            </div>
                            <h3>Framework</h3>

                            <div className="skill_items ani2">

                                <div className="skill_item">
                                    <div className="skill_img">

                                    </div>
                                    React
                                </div>
                                <div className="skill_item">
                                    <div className="skill_img">
                                    </div>
                                    Bootstrap
                                </div>
                                <div className="skill_item">
                                    <div className="skill_img">
                                    </div>
                                    Tailwind
                                </div>
                                <div className="skill_item">
                                    <div className="skill_img">
                                    </div>
                                    Nextjs
                                </div>


                            </div>



                        </div>
                    </div>
                </div>


            </div>

        </section>


    )
}

export default SkillCom