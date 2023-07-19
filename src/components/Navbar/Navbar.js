import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/mylogo2.png';
import './Navbar.scss';
import { FaShare} from "react-icons/fa";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const handleLinkClick = closeMenu;

    const menuItems = [
        { name: 'Home', to: 'home' },
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Portfolio', to: 'portfolio' },
        { name: 'Contact', to: 'contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.innerHeight * 0.03; // 30vh as offset

            const currentSection = menuItems.find(({ to }, index) => {
                const element = document.getElementById(to);
                const nextElement = document.getElementById(menuItems[index + 1]?.to);
                const rect = element?.getBoundingClientRect();
                const nextRect = nextElement?.getBoundingClientRect();
                return rect && (rect.top <= offset && (!nextRect || nextRect.top > offset));
            });
            setActiveSection(currentSection?.to || activeSection);

            setIsSticky(window.scrollY >= offset);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [menuItems, activeSection]);

    return (
        <navbar className={`navbar ${isSticky ? 'sticky' : ''}`}>
            <div className="row space_btw">
                <div className="logo">
                    <h2>Raj..</h2>
                    {/* <Link to="home" smooth={true} duration={500}>
            <img src={logo} alt="Logo" />
          </Link> */}
                </div>

                <div className="main_menu">

                    <ul className={`menu ${menuOpen ? 'active' : ''}`}>
                        {menuItems.map(({ name, to }) => (
                            <li key={name}>
                                <Link
                                    to={to}
                                    className={`nav_item ${activeSection === to ? 'active_Sec' : ''}`}
                                    smooth={true}
                                    duration={0}
                                    onClick={handleLinkClick}
                                >
                                {name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>


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
