import React, { useEffect } from 'react';
import './HomeCom.scss';

import AOS from 'aos';
import 'aos/dist/aos.css';


import resume from '../../assets/Other/Resume(Raj).pdf';

import star_img from "../../assets/star_icon.svg";

import eight_star from "../../assets/eight-pointed-black-star.svg";

import curl_Arrow from "../../assets/curly-arrow.png";







const HomeCom = () => {

  useEffect(() => {
    AOS.init({
      duration: 900, 
      debounceDelay: 50, 

      
      once: false, 
      mirror: true, 

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

      <div className="home_cntr">

        <div className="row">

          <div className="home_txt">
            <h3 className="greeting">Good {Greetings()}<span>👋</span>, This is</h3>

            <div class="my-name">
              <div class="title1">
                <h1>RAJ CHHALOTRE</h1>
              </div>
              <div class="ghost">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>

            <h2>Web Developer<span> <img src={eight_star} /> </span>ML enthusiast<span> <img src={eight_star} /> </span>Problem Solver
    

            </h2>
            <h4>Welcome to My <span3>Portfolio Website !!!</span3></h4>
          </div>


          <div className="btn_ctnr">
            <a href={resume} target='_blank' rel="noreferrer">View Resume </a>
          </div>


        </div>

      </div>


      {/* <img src={star_img} alt="" class="star_icon1" /> */}
      <img src={star_img} alt="" class="star_icon2" />
      <img src={curl_Arrow} alt="" class="curl_Arrow" data-aos="fade-right" />

      <div class="wave">

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFF7EE" fill-opacity="1" d="M0,128L48,122.7C96,117,192,107,288,122.7C384,139,480,181,576,181.3C672,181,768,139,864,122.7C960,107,1056,117,1152,144C1248,171,1344,213,1392,234.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      </div>
    </section>
  );
};

export default HomeCom;
