import React, { useEffect } from 'react';
import "./SkillCom.scss";
import { FaLinkedin, FaGit } from 'react-icons/fa';
import AOS from 'aos';




const SkillCom = () => {

    useEffect(() => {
        AOS.init({
            duration: 1200, // Set the animation duration to 1200ms (1.2 seconds)
        });
    }, []);



    return (

        <section className="skill_cls section_padding">

            <div className="container">

                <div className="row justify_content_cntr">

                    <div className="section_title txt_align">
                        <h3 className="main_title">Skills</h3>
                        <h5 className="sub_title">Why you Hire me?</h5>
                        <div className="line" />

                    </div>
                </div>


                {/* <!-- skill Item -s --> */}


                <div class="row justify_content_cntr">

                    <div class="card" data-aos="fade-right" data-aos-delay="0" >

                        <div className="content">

                            <div className="heading">
                                <h2 className="skill-type-icon"><FaLinkedin /></h2>
                                <h3>Frontend</h3>
                            </div>


                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A doloribus excepturi minima.
                                Neque repellendus dolorem magni qui.

                            </p>

                            <h4>Skills for it</h4>

                            <div className="skill-icons-box">

                                <div className="skill-icon">
                                    <FaLinkedin />
                                    <h5>Linkssfsfsfsfsf</h5>
                                </div>
                                <div className="skill-icon">
                                    <FaLinkedin />
                                    <h5>Linkqq</h5>
                                </div>
                                <div className="skill-icon">
                                    <FaLinkedin />
                                    <h5>Linkqq</h5>
                                </div>
                                <div className="skill-icon">
                                    <FaLinkedin />
                                    <h5>Linkqq</h5>
                                </div>
                                <div className="skill-icon">
                                    <FaLinkedin />
                                    <h5>Linkqq</h5>
                                </div>
                                <div className="skill-icon">
                                    <FaLinkedin />
                                    <h5>Linkqq</h5>
                                </div>
                                <div className="skill-icon">
                                    <FaLinkedin />
                                    <h5>Linkqq</h5>
                                </div>


                            </div>
                        </div>

                        <div className="layer"></div>

                    </div>

                    <div class="card" data-aos="fade-right" data-aos-delay="100">

                        <div className="content">

                            <div className="heading">
                                <h2 className="skill-type-icon"><FaLinkedin /></h2>
                                <h3>Frontend <span></span></h3>
                            </div>


                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A doloribus excepturi minima.
                                Neque repellendus dolorem magni qui.

                            </p>

                            <h4>Skills for it</h4>

                            <div className="skill-icons-box">

                                <div className="skill-icon">
                                    <FaLinkedin />
                                    <h5>Linkssfsfsfsfsf</h5>
                                </div>
                                <div className="skill-icon">
                                    <FaLinkedin />
                                    <h5>Linkqq</h5>
                                </div>
                                <div className="skill-icon">
                                    <FaLinkedin />
                                    <h5>Linkqq</h5>
                                </div>
                                <div className="skill-icon">
                                    <FaLinkedin />
                                    <h5>Linkqq</h5>
                                </div>
                                <div className="skill-icon">
                                    <FaLinkedin />
                                    <h5>Linkqq</h5>
                                </div>
                                <div className="skill-icon">
                                    <FaLinkedin />
                                    <h5>Linkqq</h5>
                                </div>
                                <div className="skill-icon">
                                    <FaLinkedin />
                                    <h5>Linkqq</h5>
                                </div>


                            </div>
                        </div>

                        <div className="layer"></div>

                    </div>
                    <div class="card" data-aos="fade-right" data-aos-delay="200">

                        <div className="content">

                            <div className="heading">
                                <h2 className="skill-type-icon"><FaLinkedin /></h2>
                                <h3>Frontend <span></span></h3>
                            </div>


                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A doloribus excepturi minima.
                                Neque repellendus dolorem magni qui.

                            </p>

                            <h4>Skills for it</h4>

                            <div className="skill-icons-box">

                                <div className="skill-icon">
                                    <FaLinkedin />
                                    <h5>Linkssfsfsfsfsf</h5>
                                </div>
                                <div className="skill-icon">
                                    <FaLinkedin />
                                    <h5>Linkqq</h5>
                                </div>
                                <div className="skill-icon">
                                    <FaLinkedin />
                                    <h5>Linkqq</h5>
                                </div>
                                <div className="skill-icon">
                                    <FaLinkedin />
                                    <h5>Linkqq</h5>
                                </div>
                                <div className="skill-icon">
                                    <FaLinkedin />
                                    <h5>Linkqq</h5>
                                </div>
                                <div className="skill-icon">
                                    <FaLinkedin />
                                    <h5>Linkqq</h5>
                                </div>
                                <div className="skill-icon">
                                    <FaLinkedin />
                                    <h5>Linkqq</h5>
                                </div>


                            </div>
                        </div>

                        <div className="layer"></div>

                    </div>


                </div>



            </div>









        </section >


    )
}

export default SkillCom;