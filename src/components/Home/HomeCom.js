import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Social from '../Social-icon/SocialCom';
import resume from '../../assets/Other/Resume (Raj).pdf';
import home_img from '../../assets/My-imgs/PicsArt_05-24-06.05.09.png';
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

  return (
    <section className="home_cls">
      <div className="home-banner overlay">
        <div className="hb-typo txt_align">
          <h6 data-aos="fade-up" data-aos-delay="0" className="greeting">Good {Greetings()}, I'm</h6>
          <h1 data-aos="fade-up" data-aos-delay="100">Raj <span>Chhalotre</span></h1>
          <h3 data-aos="fade-up" data-aos-delay="200">
            <div className="prof">Web Developer</div>
          </h3>
        </div>
      </div>
      <div className="quote_box">
        <p>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, quos."</p>
      </div>
    </section>
  );
};

export default HomeCom;
