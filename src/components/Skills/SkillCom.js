import React, { useEffect } from "react";
import "./SkillCom.scss";
import AOS from "aos";
import { sections } from "./skill-Item";

const SkillCom = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100, once: true });
  }, []);

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

        <div className="grid justify_content_cntr">
          {sections.map((section, sectionIndex) => (
            <div className={`card ${section.className}`} key={sectionIndex}>
              <div className="skill_heading">
                <h3>{section.title}</h3>
                <p>{section.description}</p>
              </div>

              <div className="skill_box">
                {section.data.map((item, index) => (
                  <div className="skill_item" key={index}>
                    <img src={item.img} />
                    <h5>{item.name}</h5>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillCom;
