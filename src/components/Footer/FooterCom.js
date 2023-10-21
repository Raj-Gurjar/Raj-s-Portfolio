import React from 'react';
import './footer.scss';
import logo from '../../assets/myLogo22.svg';
import { Link } from 'react-scroll';

const FooterCom = () => {
    return (

        <footer class="footer">
            <div class="row justify_content_cntr">

                <div className="logo" data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="200"
                    data-aos-offset="0">
                    {/* <h2>Raj..</h2> */}
                    Visualize Your Dreams With
                    <Link to="home" smooth={true} duration={500}>
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>

                {/* <div className="footer-txt">
                    <p>Made by Raj Chhalotre</p>
                </div> */}

            </div>
        </footer>
    )
}

export default FooterCom;