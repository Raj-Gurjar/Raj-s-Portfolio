import React from "react";
import "./index.scss";

// import React from "react";
import Navbar from './components/Navbar/Navbar';
import HomeCom from './components/Home/HomeCom';
import AboutCom from './components/About/AboutCom';
import SkillCom from './components/Skills/SkillCom';
import ProjectCom from './components/Projects/ProjectCom';
import ContactCom from './components/Contact/ContactCom';
import FooterCom from "./components/Footer/FooterCom";
import ScrollCom from "./components/Scrollup/ScrollCom";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import OtherProjects from "./components/Projects/Other-Projects";

function App() {


  return (

    <>
      {/* // <BrowserRouter> */}
      <Navbar />

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
      <div id="portfolio">
        <ProjectCom />
      </div>
      <div id="contact">
        <ContactCom />
      </div>
      <div id="footer">
        <FooterCom />
      </div>
      <Routes>
        <Route path='/OtherProjects' element={<OtherProjects />}></Route>
      </Routes>
    </>


    //   <Routes>
    //     <Route path="/" element={<HomeCom />} id = "home" />
    //     <Route path="/" element={<AboutCom />} id = "about"/>
    //     <Route path="/allCustomers" element={<SkillCom />} id = "skills" />
    //     <Route path="/transactions" element={<ProjectCom />} id = "portfolio"/>
    //     <Route path="/moneyTransfer" element={<ContactCom />} id = "contact"/>
    //     <Route path="/signIn" element={<FooterCom />} id = "footer"/>

    //  
    //   </Routes>
    // </BrowserRouter> 

  );
}

export default App;
