import React, { useState, useEffect } from 'react';

import './ContactCom.scss';
// import AOS from 'aos';

// import 'aos/dist/aos.css';
import { FaMailBulk, FaPhone, FaMap } from 'react-icons/fa';
import { BiLinkExternal } from "react-icons/bi";
import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp, FaComment } from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
import contact_down_arrow from "../../assets/proj_down-arrow.svg";
import contact_down_curl from "../../assets/contact_btm.svg";

const ContactCom = () => {


  const scriptURL = 'https://script.google.com/macros/s/AKfycbzRwP6dZ7hR2eTL93jfc0OBYpe6cHIGR89xyV5M6nykOrapPYijfMR2niWaj05pO1J7/exec';

  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.target;
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then((response) => {
        setIsLoading(false);
        setShowPopup(true);
        setFormSubmitted(true);
        form.reset();
      })
      .catch((error) => {
        console.error('Error!', error.message);
        setIsLoading(false);
      });
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <section className="contact_cls section_padding">
      <img className="contact_down-arrow" src={contact_down_arrow} data-aos="fade-down"
      alt="" />
      <img className="contact_down-curl" src={contact_down_curl} data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" alt="" />
      

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-container">
            <div className="popup-content">
              <h3>Notification</h3>
              <p>Thank you! Your form is submitted successfully.</p>
              <button onClick={closePopup}>Close</button>
            </div>
          </div>
        </div>
      )}
      <div className="container">
        <div className="row justify_content_cntr">
          <div className="col-cont-form my-3">
            <div className="contact-form card">
              <div className="section_title" data-aos="fade-up" data-aos-delay="0" data-aos-duration="300">
                <h3>Contact Me</h3>
                <div className="line" />
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-1">
                    <div className="form-group" data-aos="fade-up" data-aos-delay="0">
                      <input type="text" placeholder="Name" name="name" required />
                      <label className="form-label">Full Name*</label>
                    </div>
                  </div>
                  <div className="col-1">
                    <div className="form-group" data-aos="fade-up" data-aos-delay="25">
                      <input type="email" placeholder="Email" name="email" required />
                      <label className="form-label">Email*</label>
                    </div>
                  </div>
                  <div className="col-2" data-aos="fade-up" data-aos-delay="50">
                    <div className="form-group">
                      <input type="text" placeholder="Subject" name="subject" required />
                      <label className="form-label">Subject*</label>
                    </div>
                  </div>
                  <div className="col-2" data-aos="fade-up" data-aos-delay="100">
                    <div className="form-group">
                      <textarea placeholder="Type comment" name="comment" required />
                      <label className="form-label">Comment*</label>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="btn-bar" data-aos="fade-up" data-aos-delay="100">
                 
                        <button
                          type="submit"
                          id="submit"
                          className={`sub_btn ${isLoading ? 'loading' : ''}`}
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>
                              Loading...
                              <div className="loader" />
                            </>
                          ) : (
                            'Submit'
                          )}
                        </button>
               

                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-cont-info ml-auto my-3">
            <div className="contact-info">
              <div className="section_title" data-aos="fade-up" data-aos-delay="0" data-aos-duration="300">
                <h3>Get in Touch</h3>
                <div className="line" />
                <p>Always available for freelancing if the right project comes along. Feel free to contact me.</p>
              </div>
              <div className="media" data-aos="fade-up" data-aos-delay="50">
                <div className="icon">
                  <FaMap />
                </div>
                <span className="media-txt">
                  <span1>Address</span1>
                  <br />
                  <a href="https://goo.gl/maps/haiWM5xbmb6VNEkN7" target="_blank" rel="noreferrer">
                    Indore, Madhya Pradesh, IND <BiLinkExternal className='redirect-icon' />
                  </a>
                </span>
              </div>
              <div className="media" data-aos="fade-up" data-aos-delay="100">
                <div className="icon">
                  <FaMailBulk />
                </div>
                <span className="media-txt">
                  <span1>Email</span1>
                  <br />
                  <a href="mailto:rajchhalotre14@gmail.com" target="_blank" rel="noreferrer">
                    rajchhalotre14@gmail.com <BiLinkExternal className='redirect-icon' />
                  </a>
                </span>
              </div>
              <div className="media" data-aos="fade-up" data-aos-delay="150">
                <div className="icon">
                  <FaPhone />
                </div>
                <span className="media-txt">
                  <span1>Contact No.</span1>
                  <br />
                  <a href="tel:+919174510107" target="_blank" rel="noreferrer">
                    +91 9174510107 <BiLinkExternal className='redirect-icon' />
                  </a>
                </span>
              </div>

              <div className="social-box">
                <div className='social-tag'>
                  <h3>Follow On:</h3>
                </div>
                <div className='social-icons'>
                  <a href="https://www.linkedin.com/in/raj-chhalotre-29jul01/" rel="noreferrer" target="_blank">
                    <FaLinkedinIn />
                  </a>
                  <a href="https://github.com/Raj-Gurjar" rel="noreferrer" target="_blank">
                    <FaGithub />
                  </a>
             
                  <a href="https://wa.me/qr/CMJOEEBOTPEHH1" rel="noreferrer" target="_blank">
                    <FaWhatsapp />
                  </a>
                  <a href="https://leetcode.com/Raj_Gurjar/" rel="noreferrer" target="_blank">
                    <SiLeetcode />
                  </a>
                  <a href="https://auth.geeksforgeeks.org/user/raj_gurjar/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user" rel="noreferrer" target="_blank">
                    <SiGeeksforgeeks />
                  </a>
                </div>


              </div>
            </div>
          </div>
        </div>



      </div>
    </section>
  );
};

export default ContactCom;
