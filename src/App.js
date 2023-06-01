import React from "react";
import "./index.css";

import { Route, Routes } from "react-router-dom";


import Navbar from './components/Navbar/Navbar';
import HomeCom from './components/Home/HomeCom';
import AboutCom from './components/About/AboutCom';
import SkillCom from './components/Skills/SkillCom';
import ProjectCom from './components/Projects/ProjectCom';
import ContactCom from './components/Contact/ContactCom';

function App() {
  return (
    <>
      
        <Navbar />

        <main className="mainCom">

        <HomeCom />
        <AboutCom />

        <SkillCom />

        <ProjectCom />
        <ContactCom />

        </main>
   
    </>
  );
}

export default App;