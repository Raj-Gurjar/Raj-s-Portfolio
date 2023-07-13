import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Social from '../Social-icon/SocialCom';
import resume from '../../assets/Other/Resume (Raj).pdf';
import home_img from '../../assets/My-imgs/PicsArt_05-24-06.05.09.png';
import poly from "../../assets/Polygon 2.png"
import rainbow from "../../assets/Rainbow.svg";
import spiral from "../../assets/Spiral.svg";
import Typed from 'typed.js';

import './HomeCom.scss';
import '../../index.scss';

const HomeCom = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the animation duration to 1200ms (1.2 seconds)
    });
  }, []);

  const Greetings = () => {
    const myDate = new Date();
    const hours = myDate.getHours();
    let greet;

    if (hours < 12) greet = 'Morning';
    else if (hours >= 12 && hours <= 17) greet = 'Afternoon';
    else if (hours >= 17 && hours <= 24) greet = 'Evening';

    return greet;
  };

  useEffect(() => {
    const options = {
      strings: ["Web Developer", "DSA learner", "AI Enthusiast"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 60,
      backDelay: 1400,
    };

    const typed = new Typed(".prof", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="home_cls">
      <div className="home_cntr">
        <div className="grid_box">

          <img src={rainbow} className="rainbow" alt="" />
          <img src={spiral} className="spiral" alt="" />

          <div className="home_txt">
            <h3 className="greeting">Good {Greetings()}<span>👋</span>,I'm</h3>
            <h1>Raj Chhalotre</h1>
            <h2><span className='prof'></span></h2>
          </div>

          <div className="resume_btn">
            <a href={resume} className="rnd_txt" target='_blank' rel="noreferrer" >
              {['v', 'i', 'e', 'w', ' ', 'R', 'e', 's', 'u', 'm', 'e'].map((letter, index) => (
                <li key={index} style={{ '--tm': index + 1 }}>{letter}</li>
              ))}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCom;
