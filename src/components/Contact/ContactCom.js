import React, {useEffect} from 'react';

import "./ContactCom.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';



import { FaLinkedin, FaGit, FaMailBulk, FaPhone, FaMap } from 'react-icons/fa';


const contactCom = () => {
    return (
   
       
    
        <section class="contact_cls section_padding">

            <div className="container">

                <div className="row justify_content_cntr">

                    <div className="col-cont-form my-3">
                        <div class="contact-form">

                            <div class="section_title" data-aos="fade-up" data-aos-delay="0" data-aos-duration="300">
                                <h4 class="main_title">Contact Me</h4>
                                <div class="line" />
                            </div>

                            <form>
                                <div class="row">

                                    <div class="col-1">
                                        <div class="form-group" data-aos="fade-up" data-aos-delay="0">
                                            <input type="text"  placeholder="Name" name="name" />
                                            <label class="form-label">Name</label>
                                        </div>
                                    </div>

                                    <div class="col-1">
                                        <div class="form-group" data-aos="fade-up" data-aos-delay="25">
                                            <input type="email"  placeholder="Email" name="email" />
                                            <label class="form-label">Email</label>
                                        </div>
                                    </div>

                                    <div class="col-2" data-aos="fade-up" data-aos-delay="50">
                                        <div class="form-group">
                                            <input type="text"  placeholder="Subject" name="subject" />
                                            <label class="form-label">Subject</label>
                                        </div>
                                    </div>

                                    <div class="col-2" data-aos="fade-up" data-aos-delay="100">
                                        <div class="form-group">
                                            <textarea  placeholder="Type comment" name="comment"></textarea>
                                            <label class="form-label">Comment</label>
                                        </div>
                                    </div>

                                    <div class="col-2">
                                        <div class="btn-bar" data-aos="fade-up" data-aos-delay="125">
                                            <button class="btn2">Send Message</button>
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>

                    </div>

                    <div className="col-cont-info ml-auto my-3">

                        <div class="contact-info">

                            <div class="section_title" data-aos="fade-up" data-aos-delay="0" data-aos-duration="300">
                                <h4 class="main_title">Get in Touch</h4>
                                <div class="line" />
                                <p>Always available for freelancing if the right project comes along, Feel free to contact me.</p>
                            </div>

                            <div class="media" data-aos="fade-up" data-aos-delay="50">

                                <div class="icon">
                                    <FaMap />
                                </div>
                                <span class="media-txt">
                                    <span1>Address</span1>
                                    <br />Indore,Madhya Pradesh<br />IND.
                                </span>

                            </div>

                            <div class="media" data-aos="fade-up" data-aos-delay="100">
                                <div class="icon">
                                    <FaMailBulk />
                                </div>
                                <span class="media-txt" style={{marginTop:"10px"}}>
                                    <span1>Email</span1>
                                    <br />rajchhalotre14@gmail.com
                                </span>
                            </div>

                            <div class="media" data-aos="fade-up" data-aos-delay="150">
                                <div class="icon">
                                    <FaPhone />
                                </div>
                                <span class="media-txt" style={{marginTop:"10px"}}>
                                    <span1>Contact No.</span1>
                                    <br />+91 9174510107
                                </span>
                            </div>

                        </div>
                    </div>

                </div>


            </div>
            

        </section>



        // {/* <!--! ---------------======= Contact - e ==========-----------------------> */ }





    )
}

export default contactCom;