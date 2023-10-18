import React, { useEffect } from 'react';
import './HomeCom.scss';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Typed from 'typed.js';

import { Link } from 'react-router-dom';

import resume from '../../assets/Other/Resume (Raj).pdf';
import home_img from "../../assets/My-imgs/PicsArt_05-24-06.05.09.png";
import star_img from "../../assets/star_icon.svg";
import curl_Brac1 from "../../assets/brac1.png";
import curl_Brac2 from "../../assets/brack2.svg";
import eight_star from "../../assets/eight-pointed-black-star.svg";

import curl_Arrow from "../../assets/curly-arrow.png";


import react from "../../assets/Skill-Icons/react.svg";

import outBox from "../../assets/outBox.png";
import inside from "../../assets/inside.png";
import reshape from "../../assets/reshape.svg";

// import bg_img from "../../assets/curve_bg.svg";


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

  // Add the rest of your code...

  // const imageUrls1 = [
  //   "Images/Skill-Icons/react.svg",
  //   "Images/Skill-Icons/next.svg",
  //   "Images/Skill-Icons/sass.svg",
  //   "Images/Skill-Icons/tailwind.svg",
  // ];



  // // Index to track the current image in the arrays
  // let imageIndex1 = 0;
  // let imageIndex2 = 0;

  // // Function to change images every 2 seconds
  // const changeImages = () => {
  //   // Update the image sources based on the current index
  //   document.getElementById('img1').src = imageUrls1[imageIndex1];


  //   // Increment the indexes (and loop back to 0 when reaching the end)
  //   imageIndex1 = (imageIndex1 + 1) % imageUrls1.length;

  // };

  // // Start the image rotation interval
  // useEffect(() => {
  //   const interval = setInterval(changeImages, 1000);
  //   return () => clearInterval(interval); // Cleanup on unmount
  // }, []);

  return (
    <section className="home_cls">

      <div className="home_cntr">

        <div className="row">

          <div className="home_txt">
            <h3 className="greeting">Good {Greetings()}<span>👋</span>, This is</h3>
            <h1>Raj Chhalotre</h1>
            <h2>Frontend developer<span> <img src={eight_star} /> </span>ML enthusiast<span> <img src={eight_star} /> </span>Problem Solver
              {/* <img id="img1" src={imageUrls1[0]} alt="" /> */}

            </h2>
            <h4>Welcome to My <span3>Portfolio Website !!!</span3></h4>
          </div>

          <div className="btn_ctnr">
            <a href={resume} target='_blank' rel="noreferrer">View Resume </a>
          </div>




        </div>



      </div>


      {/* <img src={curl_Brac1} alt="" class="curl_brac1" /> */}
      {/* <img src={curl_Brac2} alt="" class="curl_brac2" /> */}



      <img src={star_img} alt="" class="star_icon1" />
      <img src={star_img} alt="" class="star_icon2" />
      <img src={curl_Arrow} alt="" class="curl_Arrow" />

      {/* <div className="curve_bg_cntnr"> */}
        {/* <div className="curve_bg_text">
          <p>
            From Thinking Out of the Box <box1><img src={outBox} alt='outBox'></img></box1> in <span>DSA</span> questions
            to Reshaping the Box <box2><img src={reshape} alt='outBox'></img> </box2> in <span>Web Development</span> and
            Using the power of <span>AI</span> to predict what's inside the box <box3><img src={inside} alt='outBox'></img></box3> is
            my Journey to Programming and Development.
          </p>
        </div> */}
        {/* <img src={} className="curve_bg_img"></img> */}
        <div className="curve_bg_img"></div>
      {/* </div> */}


    </section>
  );
};

export default HomeCom;
