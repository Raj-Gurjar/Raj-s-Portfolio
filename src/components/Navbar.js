// import { Link } from "react-router-dom"
import "./Nav-style.css"

import logo from "../assets/mylogo2.png";
import React, { useState } from 'react';

import { Link } from "react-router-dom";

const Navbar = () => {
     
    //!-------------------- Sticky Navbar -s --------------------

    const [color, setColor] = useState(false);
    const changeColor = () => {

        if (window.scrollY >= 29) {
            setColor(true);
        }
        else {
            setColor(false);
        }
    }

    window.addEventListener('scroll', changeColor);

    //!-------------------- Sticky Navbar -e --------------------
   

    // //!-------------------- Current Nav Item Highlighting -s --------------------
    // const navLi = document.querySelectorAll('nav ul li a');
    // const sections = document.querySelectorAll('section');

    // window.addEventListener('scroll', () => {
    //     let current = '';
    //     sections.forEach(section => {
    //         let sectionTop = section.offsetTop;
    //         // eslint-disable-next-line no-restricted-globals
    //         if (scrollY >= sectionTop - 65) {
    //             current = section.getAttribute('id');
    //         }
    //     });
    //     navLi.forEach(li => {
    //         li.classList.remove('active');
    //         document.querySelector('nav ul li a[href*= ' + current + ']').classList.add('active');
    //     });
    // });

    // //!-------------------- Current Nav Item Highlighting -e --------------------

    // //! -------------------------- Responsive Nav Toogler -s  -------------------------------*/


    // const navMenu = document.querySelector(".menu"),
    //     navToggle = document.querySelector(".menu_btn");

    // if (navToggle) {
    //     navToggle.addEventListener("click", () => {
    //         navMenu.classList.toggle("active");
    //     });
    // }

    // // close menu when link is clicked automaticaly

    // const navLink = document.querySelectorAll(".menu li");

    // function linkAction() {
    //     const navMenu = document.querySelector(".menu");
    //     navMenu.classList.remove("active");
    //     navToggle.classList.remove("change");
    // }

    // navLink.forEach((n) => n.addEventListener("click", linkAction));

    // //! -------------------------- Responsive Nav Toogler -e   -------------------------------*/


    // //!-------------------- Menu Crossbar -s --------------------


    // // function changeX(x) {
    // // x.classList.toggle("change");
    // // }

    // //!-------------------- Menu Crossbar -e --------------------


    return (

        <div className={color ? "navbar sticky" : "navbar"}>

            <div className="row space_btw">
                <div className="logo">
                    <Link to="/">
                        <img src={logo}></img>
                    </Link>

                </div>

                <ul className="menu">

                    <li>
                        <a href="/" className="nav_item active" >Home</a>
                    </li>

                    <li>
                        <a href="/about" className="nav_item">About</a>
                    </li>

                    <li>
                        <a href="/skills" className="nav_item">Skills</a>
                    </li>

                    <li>
                        <a href="/projects" className="nav_item">Projects</a>
                    </li>

                    <li>
                        <a href="/contact" className="nav_item">Contact</a>
                    </li>


                </ul>


                <div className="menu_btn">

                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>

                </div>
            </div>

        </div>
    )
}

export default Navbar