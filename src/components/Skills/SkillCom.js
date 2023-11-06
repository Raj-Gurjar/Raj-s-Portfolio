import React, { useEffect } from "react";
import "./SkillCom.scss";
import AOS from "aos";
import { sections } from "./skill-Item";
import bread from "../../assets/bread.svg";
import proj_sq from "../../assets/proj_sqr.svg";


const SkillCom = () => {

  return (
    <section className="skill_cls section_padding">
      <div className="container">
        <div className="row justify_content_cntr">
          <div className="section_title txt_align">
            <h2>Skills</h2>
            <h4>Why Hire Me?</h4>
            <div className="line" />
          </div>
        </div>

        <div className="row justify_content_cntr">
          {sections.map((section, sectionIndex) => (
            <div className='card' key={sectionIndex} data-aos="fade-right">
              <div className="skill_heading">
                <h3>{section.title}</h3>
                {/* <p>{section.description}</p> */}
              </div>

              <div className="skill_box">
                {section.data.map((item, index) => (
                  <div className="skill_item" key={index}>
                    <img src={item.img} loading='lazy' alt="skill-icons" />
                    <h5>{item.name}</h5>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <img className="bread" src={bread} data-aos="fade-right"></img>
      <img className="proj_sq" src={proj_sq} alt=""  data-aos="zoom-in-up"/>
    </section>
  );
};

export default SkillCom;
