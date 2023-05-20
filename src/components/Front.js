import "./Front-style.css";

// import frnt_hero from "../assets/ReadyPlayerMe-Avatar.png";
import resume from "../assets/Resume (Raj).pdf";

import React from 'react';

import { Link } from 'react-router-dom';

const Front = () => {


  // // !---------------------------- Greetings on Home -s -----------------------*/


  // var myDate = new Date();
  // var hrs = myDate.getHours();

  // var greet;

  // if (hrs < 12) greet = "Good Morning,";
  // else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon,";
  // else if (hrs >= 17 && hrs <= 24) greet = "Good Evening,";

  // document.querySelector(".greetings").innerHTML = greet;

  // // !---------------------------- Greetings on Home -e -----------------------*/

  // // !---------------------------- Profession multi-text in Home -s -----------------------*/


  // var typeEffect = new Typed(".prof", {
  //   strings: ["Web Developer", "DSA learner", "AI Enthusiast"],
  //   loop: true,
  //   typeSpeed: 100,
  //   backSpeed: 60,
  //   backDelay: 1400,
  // });

  // // !---------------------------- Profession multi-text in Home -e -----------------------*/


  return (

    <section className="home_cls">

      <div className="container">

        <div className="row align_cntr">

          <div className="home_txt">

            <h3 className="greetings">Hii</h3>
            <p>To Digital Voyagers ! from</p>
            <h1 className="name">Raj Chhalotre</h1>

            <p>Welcome to my portfolio website!<br />
              Here, you'll find a showcase of my skills and expertise
              <br />as Coder
              <span className="prof"></span>
            </p>

            <a href={resume} target="_blank" className="btn" rel="noreferrer" > View CV</a>

          </div>

          <div class="home_img">
            <div class="img_box">
            </div>

          </div>

        </div>

      </div>


    </section>

  )
};

export default Front;