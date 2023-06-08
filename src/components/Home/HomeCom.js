import "./HomeCom.scss";
import "../../index.scss";
import Social from "../Social-icon/SocialCom";

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

    <section className="home_cls home-banner overlay" style={{backgroundImage:"url(Images/bg3-bw.jpg)"}}>

      <div className="container">

        <div className="row align_cntr justify_content_cntr">

          <div className="col-lg-12">

            <div className="hb-typo txt_align">

              <h6>Hii there, i'm</h6>
              <h1>Raj <span>Chhalotre</span></h1>
              <h3>
                <div className="prof">
                  Web Developer
                </div>
              </h3>
            </div>

          </div>

        </div>

      </div>

      <Social />



    </section>

  )
};

export default HomeCom;