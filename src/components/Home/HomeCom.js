import "./HomeCom.css";
import Social from "./Social";

// import frnt_hero from "../assets/ReadyPlayerMe-Avatar.png";
import resume from "../../assets/Other/Resume (Raj).pdf";
import home_img from "../../assets/My-imgs/PicsArt_05-24-06.05.09.png";



import React from 'react';

import { Link } from 'react-router-dom';

const HomeCom = () => {


  // !---------------------------- Greetings on Home -s -----------------------*/

  const Greetings = () => {
    let myDate = new Date();
    let hours = myDate.getHours();
    let greet;

    if (hours < 12)
      greet = "morning";
    else if (hours >= 12 && hours <= 17)
      greet = "afternoon";
    else if (hours >= 17 && hours <= 24)
      greet = "evening";

    return greet;
  }

  // !---------------------------- Greetings on Home -e -----------------------*/

  // !---------------------------- Profession multi-text in Home -s -----------------------*/



  // var typeEffect = new Typed(".prof", {
  //   strings: ["Web Developer", "DSA learner", "AI Enthusiast"],
  //   loop: true,
  //   typeSpeed: 100,
  //   backSpeed: 60,
  //   backDelay: 1400,
  // });

  // !---------------------------- Profession multi-text in Home -e -----------------------*/


  return (

    <section className="home_cls">

      <div className="container">

        <div className="row align_cntr">

          <div className="home_txt">

            <div className="greet_box">
              <p1 className="greetings">Good <Greetings />,</p1>
              <p>To Digital Voyagers!</p>
            </div>

            <div className="name_box">
              <p>This is,</p>
              <div className="name">
                <h1>Raj <span>Chhalotre</span></h1>
              </div>

              <p className="prof_box">a <span className="prof"> Coder</span></p>

            </div>





            {/* <a href={resume} target="_blank" className="btn" rel="noreferrer" > View CV</a> */}

            <btn className="btn1">
              <a href={resume} target="_blank" rel="noreferrer">
                View CV
                <svg viewBox="0 0 70 36">
                  <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
                </svg>
              </a>
            </btn>


          </div>



        </div>

      </div>


      {/* <!--! ---------- ---- social media -------------------------> */}

   
      <Social/>



    </section>

  )
};

export default HomeCom;