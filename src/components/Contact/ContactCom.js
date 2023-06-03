import "./ContactCom.css";

import React from 'react'

const contactCom = () => {
    return (


        <section class="contact_cls section_padding">

            <div className="container">

                <div className="row justify_content_cntr">

                    <div className="section_title txt_align">
                        <h3 className="main_title">Contact</h3>
                        <h5 className="sub_title">Get in Touch</h5>
                        <ul className="line">
                            <li></li>
                        </ul>
                    </div>
                </div>


                {/* <!-- Contact item -s --> */}
                <div class="row justify_content_cntr">

                    <div class="contact_item card_item card">

                        <div class="contact_item_inner card_item_inner">
                            <div class="icon">
                                <i class="fas fa-phone"></i>
                            </div>
                            <h3>Phone</h3>
                            <p><span style={{ opacity: 0.5 }}>+91</span>&nbsp; 9174510107</p>
                        </div>
                    </div>

                    <div class="contact_item card_item card">
                        <div class="contact_item_inner card_item_inner">
                            <div class="icon">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <h3>Email</h3>
                            <p>rajchhalotre14<span style={{ opacity: 0.8 }}>@gmail.com</span></p>
                        </div>
                    </div>

                    <div class="contact_item card_item card">
                        <div class="contact_item_inner card_item_inner">
                            <div class="contact_icon icon">
                                <i class="fas fa-map-location"></i>
                            </div>
                            <h3>Address</h3>
                            <p>Indore<span style={{ opacity: 0.5 }} />, M.P., India</p>
                        </div>
                    </div>
                    {/* <!-- Contact item -e --> */}
                </div>

                {/* <!--? ------- Contact Form -------------- --> */}

                <div class="row justify_content_cntr">

                    <div class="contact_form card">
                        <h2>
                            <i class="fas fa-comment"></i>
                            Feedback
                        </h2>
                        <form action="">

                            <div class="row justify_content_cntr">
                                <div class="w_50">
                                    <div class="input_group">
                                        <input type="text" placeholder="Name" class="input_control" />
                                    </div>
                                    <div class="input_group">
                                        <input type="email" placeholder="Email" class="input_control" />
                                    </div>
                                    <div class="input_group">
                                        <input type="text" placeholder="Subject" class="input_control" />
                                    </div>
                                </div>
                                <div class="w_50">
                                    <div class="input_group">
                                        <textarea name="" class="input_control" placeholder="Message" id="" cols="20"
                                            rows="10"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="row justify_content_cntr">
                                <div class="submit_btn">
                                    <button type="submit" onclick="audio.play();" class="btn4 all_btns">
                                        Send Message
                                    </button>
                                </div>
                            </div>


                        </form>
                    </div>
                </div>
            </div>

        </section>



        // {/* <!--! ---------------======= Contact - e ==========-----------------------> */ }





    )
}

export default contactCom;