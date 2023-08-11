import React, { useEffect } from "react";
import "./SkillCom.scss";
import AOS from "aos";
import { sections } from "./skill-Item";

const SkillCom = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100, once: true });
  }, []);

  const skills = [
    { name: 'HTML', icon: 'html.svg' },
    { name: 'CSS', icon: 'css.svg' },
    { name: 'JavaScript', icon: 'javascript.svg' },
    { name: 'JavaScript', icon: 'javascript.svg' },
    { name: 'JavaScript', icon: 'javascript.svg' },
    { name: 'JavaScript', icon: 'javascript.svg' },
  ];


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

      


      </div>
    </section>
  );
};

export default SkillCom;
