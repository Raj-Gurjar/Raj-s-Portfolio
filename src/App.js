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
import FooterCom from "./components/Footer/FooterCom";
import ScrollCom from "./components/Scrollup/ScrollCom";

function App() {
  return (
    <>
      <Navbar />
      <main className="mainCom">
        <SocialCom />
        <ScrollCom />
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
        <div id="footer">
          <FooterCom />
        </div>
      </main>
    </>
  );
}

export default App;
