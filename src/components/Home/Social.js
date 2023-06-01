import React from 'react'
import './HomeCom.css';

import { FaLinkedinIn,FaGithub,FaInstagram } from "react-icons/fa";



const Social = () => {
    return (

        <div className="social_icon">

            <a href="https://www.linkedin.com/in/raj-chhalotre-29jul01/" target="_blank" rel="noreferrer"> <FaLinkedinIn /></a>
            <a href="https://github.com/Raj-Gurjar" target="_blank" rel="noreferrer"> <FaGithub /></a>
            <a href="https://www.linkedin.com/in/raj-chhalotre-29jul01/" target="_blank" rel="noreferrer"> <FaInstagram /></a>

        </div>
    )
}

export default Social;