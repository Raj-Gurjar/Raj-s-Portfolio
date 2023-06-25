import React, { useState } from 'react';
import './SocialCom.scss';
// import socialImg from 'Images/socialM.png';
import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp,FaComment } from "react-icons/fa";
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const SocialCom = () => {
    const [showIcons, setShowIcons] = useState(false);

    const handleToggle = () => {
        setShowIcons(!showIcons);
    };

    return (
        <div className={`social-icons ${showIcons ? 'show' : ''}`}>
            <div className="social-toggle" onClick={handleToggle} >
                <img src='Images/socialM.png' alt="social" />
            </div>

            <div className="social-box">
                <a href="https://www.facebook.com/" rel="noreferrer" target="_blank">
                    <FaLinkedinIn />
                </a>
                <a href="https://www.linkedin.com/" rel="noreferrer" target="_blank">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/" rel="noreferrer" target="_blank">
                    <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/" rel="noreferrer" target="_blank">
                    <FaWhatsapp />
                </a>
            </div>
        </div>
    );
};

export default SocialCom;
