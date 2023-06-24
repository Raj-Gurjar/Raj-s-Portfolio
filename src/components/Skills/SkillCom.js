import React, { useEffect } from 'react';
import "./SkillCom.scss";
import { FaLinkedin } from 'react-icons/fa';
// import {SiTailwindcss} from ''
import { SiTailwindcss } from "react-icons/si";
import AOS from 'aos';
import { Languages, WebFrameWorks, Others } from './skill-Item'; // Import the array objects from the skillsData file

const renderSkills = (skills) => {

    return skills.map((skill, index) => (

        <div key={index} className="card" data-aos="fade-right" data-aos-delay={index * 100}>
            <div className="content">

                <div className="heading">
                    <h3>{skill.category}</h3>
                </div>

                <p>{skill.description}</p>

                <h4>Skills for it</h4>

                <div className="skill-icons-box">

                    {skill.skills.map((item, idx) => (
                        <div key={idx} className="skill-icon">
                            <img src={item.img} alt={item.name} />
                            <h5>{item.name}</h5>
                        </div>
                    ))}

                </div>

            </div>
            <div className="layer"></div>
        </div>
    ));
};

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

                <div className="row justify_content_cntr">
                    {renderSkills([
                        { category: 'Languages', description: 'Lorem ipsum dolor sit...', skills: Languages },
                        { category: 'Web Frameworks', description: 'Lorem ipsum dolor sit...', skills: WebFrameWorks },
                        { category: 'Others', description: 'Lorem ipsum dolor sit...', skills: Others },
                    ])}
                </div>
            </div>
        </section>
    );
};

export default SkillCom;
