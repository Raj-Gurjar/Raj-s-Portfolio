import React from "react";
import "./index.scss";

// import React from "react";
import Navbar from './components/Navbar/Navbar';
import HomeCom from './components/Home/HomeCom';
import AboutCom from './components/About/AboutCom';
import SkillCom from './components/Skills/SkillCom';
import ProjectCom from './components/Projects/ProjectCom';
import ContactCom from './components/Contact/ContactCom';
import SocialCom from './components/Social-icon/SocialCom';

function App() {
  return (
    <>
      <Navbar />
      <main className="mainCom">
        <SocialCom />
        <div id="home">
          <HomeCom />
        </div>
        <div id="about">
          <AboutCom />
        </div>
        <div id="skills">
          <SkillCom />
        </div>
        <div id="projects">
          <ProjectCom />
        </div>
        <div id="contact">
          <ContactCom />
        </div>
      </main>
    </>
  );
}

export default App;
