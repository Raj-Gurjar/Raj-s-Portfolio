import React from 'react'
import './SocialCom.scss';

import { FaLinkedinIn, FaGithub, FaInstagram,FaWhatsapp } from "react-icons/fa";



const SocialCom = () => {
    return (

    
        <social className="social-icons">


                <div className="social_box">

                    <a href="https://www.facebook.com/" rel="noreferrer" target="_blank"><FaLinkedinIn />
                    </a>

                    <a href="https://www.linkedin.com/" rel="noreferrer" target="_blank" ><FaGithub />
                    </a>

                    <a href="https://www.linkedin.com/" rel="noreferrer" target="_blank"><FaInstagram />
                    </a>

                    <a href="https://www.linkedin.com/" rel="noreferrer" target="_blank"><FaWhatsapp />
                    </a>

                </div>




        </social>
    )
}

export default SocialCom;