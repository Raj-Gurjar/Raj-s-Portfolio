import "./ContactCom.scss";

import React from 'react';

import { FaLinkedin, FaGit, FaMailBulk, FaPhone, FaMap } from 'react-icons/fa';


const contactCom = () => {
    return (


        <section class="contact_cls section_padding">

            <div className="container">

                <div className="row justify_content_cntr">

                    <div className="col-cont-form my-3">
                        <div class="contact-form">

                            <div class="section_title">
                                <h4 class="main_title">Contact Me</h4>
                                <div class="line" />
                            </div>

                            <form>
                                <div class="row">

                                    <div class="col1">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Name" name="name" />
                                            <label class="form-label">Name</label>
                                        </div>
                                    </div>

                                    <div class="col1">
                                        <div class="form-group">
                                            <input type="email" class="form-control" placeholder="Email" name="email" />
                                            {/* <label class="form-label">Email</label> */}
                                        </div>
                                    </div>

                                    <div class="col12">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Subject" name="subject" />
                                            {/* <label class="form-label">Subject</label> */}
                                        </div>
                                    </div>

                                    <div class="col12">
                                        <div class="form-group">
                                            <textarea rows="4" class="form-control" placeholder="Type comment" name="comment"></textarea>
                                            {/* <label class="form-label">Comment</label> */}
                                        </div>
                                    </div>

                                    <div class="col12">
                                        <div class="btn-bar">
                                            <button class="btn2">Send Message</button>
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>

                    </div>






                    <div className="col-cont-info ml-auto my-3">

                        <div class="contact-info">

                            <div class="section_title">
                                <h4 class="main_title">Get in Touch</h4>
                                <div class="line" />
                                <p>Always available for freelancing if the right project comes along, Feel free to contact me.</p>
                            </div>

                            <div class="media">

                                <div class="icon">
                                    <FaMap />
                                </div>
                                <span class="media-txt">
                                    <span1>Address</span1>
                                    <br />United States Of America <br />NY 750065.
                                </span>

                            </div>

                            <div class="media">
                                <div class="icon">
                                    <FaMailBulk />
                                </div>
                                <span class="media-txt" style={{marginTop:"10px"}}>
                                    <span1>Email</span1>
                                    <br />info@domain.com
                                </span>
                            </div>

                            <div class="media">
                                <div class="icon">
                                    <FaPhone />
                                </div>
                                <span class="media-txt" style={{marginTop:"10px"}}>
                                    <span1>Contact No.</span1>
                                    <br />+044 966 9696 636
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