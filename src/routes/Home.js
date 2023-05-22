import React from 'react'
import Navbar from '../components/Navbar';
import HomeCom from '../components/HomeCom';
import AboutCom from '../components/AboutCom';
import SkillCom from '../components/SkillCom';
import ProjectCom from '../components/ProjectCom';
import ContactCom from '../components/ContactCom';




const Home = () => {
  return (
    <>

        <Navbar/>
        <HomeCom/>
        <AboutCom/>
        <SkillCom/>
        <ProjectCom/>
        <ContactCom/>                                                 

    </>
  )
}

export default Home;