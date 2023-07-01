import React, { useEffect } from 'react';
import './ContactCom.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaLinkedin, FaGit, FaMailBulk, FaPhone, FaMap } from 'react-icons/fa';

const ContactCom = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const scriptURL = 'https://script.google.com/macros/s/AKfycbzRwP6dZ7hR2eTL93jfc0OBYpe6cHIGR89xyV5M6nykOrapPYijfMR2niWaj05pO1J7/exec';

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then((response) => {
        alert('Thank you! Your form is submitted successfully.');
        window.location.reload();
      })
      .catch((error) => console.error('Error!', error.message));
  };

  return (
    <section className="contact_cls section_padding">
      <div className="container">
        <div className="row justify_content_cntr">
          <div className="col-cont-form my-3">
            <div className="contact-form">
              <div className="section_title" data-aos="fade-up" data-aos-delay="0" data-aos-duration="300">
                <h4 className="main_title">Contact Me</h4>
                <div className="line" />
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-1">
                    <div className="form-group" data-aos="fade-up" data-aos-delay="0">
                      <input type="text" placeholder="Name" name="name" />
                      <label className="form-label">Full Name</label>
                    </div>
                  </div>
                  <div className="col-1">
                    <div className="form-group" data-aos="fade-up" data-aos-delay="25">
                      <input type="email" placeholder="Email" name="email" />
                      <label className="form-label">Email</label>
                    </div>
                  </div>
                  <div className="col-2" data-aos="fade-up" data-aos-delay="50">
                    <div className="form-group">
                      <input type="text" placeholder="Subject" name="subject" />
                      <label className="form-label">Subject</label>
                    </div>
                  </div>
                  <div className="col-2" data-aos="fade-up" data-aos-delay="100">
                    <div className="form-group">
                      <textarea placeholder="Type comment" name="comment" />
                      <label className="form-label">Comment</label>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="btn-bar" data-aos="fade-up" data-aos-delay="125">
                      <input type="submit" value="Submit" id="submit" className="btn2" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-cont-info ml-auto my-3">
            <div className="contact-info">
              <div className="section_title" data-aos="fade-up" data-aos-delay="0" data-aos-duration="300">
                <h4 className="main_title">Get in Touch</h4>
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
                  Indore, Madhya Pradesh
                  <br />
                  IND.
                </span>
              </div>
              <div className="media" data-aos="fade-up" data-aos-delay="100">
                <div className="icon">
                  <FaMailBulk />
                </div>
                <span className="media-txt" style={{ marginTop: '10px' }}>
                  <span1>Email</span1>
                  <br />
                  rajchhalotre14@gmail.com
                </span>
              </div>
              <div className="media" data-aos="fade-up" data-aos-delay="150">
                <div className="icon">
                  <FaPhone />
                </div>
                <span className="media-txt" style={{ marginTop: '10px' }}>
                  <span1>Contact No.</span1>
                  <br />
                  +91 9174510107
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCom;
