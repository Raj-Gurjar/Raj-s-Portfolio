import React, { useState } from 'react';
import { Link } from "react-scroll";
import logo from "../../assets/mylogo2.png";
import "./Navbar.scss";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const handleLinkClick = () => {
        closeMenu();
        // You can add additional logic here if needed
    };

    return (

        <navbar className="navbar">

            <div className="row space_btw">

                <div className="logo">

                    <h2>Raj..</h2>

                    {/* <Link to="home" smooth={true} duration={500}>
                     <img src={logo} alt="Logo" />
                    </Link> */}

                </div>

                <ul className={`menu ${menuOpen ? 'active' : ''}`}>

                    <li>

                        <Link
                            to="home"
                            className="nav_item"
                            smooth={true}
                            duration={0}
                            onClick={handleLinkClick}
                        >
                            Home
                        </Link>

                    </li>


                    <li>
                        <Link
                            to="about"
                            className="nav_item"
                            smooth={true}
                            duration={0}
                            onClick={handleLinkClick}
                        >
                            About
                        </Link>

                    </li>


                    <li>
                        <Link
                            to="skills"
                            className="nav_item"
                            smooth={true}
                            duration={0}
                            onClick={handleLinkClick}
                        >
                            Skills
                        </Link>
                    </li>


                    <li>
                        <Link
                            to="projects"
                            className="nav_item"
                            smooth={true}
                            duration={0}
                            onClick={handleLinkClick}
                        >
                            Projects
                        </Link>
                    </li>


                    <li>
                        <Link
                            to="contact"
                            className="nav_item"
                            smooth={true}
                            duration={0}
                            onClick={handleLinkClick}
                        >
                            Contact
                        </Link>
                    </li>


                </ul>


                <div className={`menu_btn ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>

                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>

                </div>


            </div>

        </navbar>
    );
};

export default Navbar;
