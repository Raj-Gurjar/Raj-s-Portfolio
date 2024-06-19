import React, { useState } from "react";
import "./ContactCom.scss";
import { FaMailBulk, FaPhone, FaMap } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
import contact_down_arrow from "../../assets/proj_down-arrow.svg";
import contact_down_curl from "../../assets/contact_btm.svg";
import Modal from "./Modal";

const ContactCom = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [result, setResult] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setResult("Sending....");
    setIsModalOpen(true);

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    data.append("access_key", "44b60023-7b4c-47bf-904f-05ef351fb008");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const resultData = await response.json();

      if (resultData.success) {
        setResult("Form Submitted Successfully 😄");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        console.log("Error", resultData);
        setResult(resultData.message);
      }
    } catch (error) {
      console.error("Error submitting the form", error);
      setResult("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="contact_cls section_padding">
      <img className="contact_down-arrow" src={contact_down_arrow} alt="" />
      <img className="contact_down-curl" src={contact_down_curl} alt="" />

      {isModalOpen && <Modal message={result} closeModal={closeModal} />}

      <div className="container">
        <div className="row justify_content_cntr">
          <div className="col-cont-form my-3">
            <div className="contact-form card">
              <div className="section_title">
                <h3>Contact Me</h3>
                <div className="line" />
              </div>
              <form onSubmit={onSubmit}>
                <div className="row">
                  <div className="col-1">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <label className="form-label">Full Name*</label>
                    </div>
                  </div>
                  <div className="col-1">
                    <div className="form-group">
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <label className="form-label">Email*</label>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="form-group">
                      <input
                        type="tel"
                        placeholder="Phone no."
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      <label className="form-label">Phone no.</label>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="form-group">
                      <textarea
                        placeholder="Enter your message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                      <label className="form-label">Message*</label>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="btn-bar">
                      <button
                        type="submit"
                        className={`sub_btn ${isLoading ? "loading" : ""}`}
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            Loading...
                            <div className="loader" />
                          </>
                        ) : (
                          "Send Us"
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
              <div className="section_title">
                <h3>Get in Touch</h3>
                <div className="line" />
                <p>
                  Always available for freelancing if the right project comes
                  along. Feel free to contact me.
                </p>
              </div>
              <div className="media">
                <div className="icon">
                  <FaMap />
                </div>
                <span className="media-txt">
                  <span1>Address</span1>
                  <br />
                  <a
                    href="https://goo.gl/maps/haiWM5xbmb6VNEkN7"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Indore, Madhya Pradesh, IND{" "}
                    <BiLinkExternal className="redirect-icon" />
                  </a>
                </span>
              </div>
              <div className="media">
                <div className="icon">
                  <FaMailBulk />
                </div>
                <span className="media-txt">
                  <span1>Email</span1>
                  <br />
                  <a
                    href="mailto:rajchhalotre14@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    rajchhalotre14@gmail.com{" "}
                    <BiLinkExternal className="redirect-icon" />
                  </a>
                </span>
              </div>
              <div className="media">
                <div className="icon">
                  <FaPhone />
                </div>
                <span className="media-txt">
                  <span1>Contact No.</span1>
                  <br />
                  <a href="tel:+919174510107" target="_blank" rel="noreferrer">
                    +91 9174510107 <BiLinkExternal className="redirect-icon" />
                  </a>
                </span>
              </div>

              <div className="social-box">
                <div className="social-tag">
                  <h3>Follow On:</h3>
                </div>
                <div className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/raj-chhalotre-29jul01/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://github.com/Raj-Gurjar"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://wa.me/qr/CMJOEEBOTPEHH1"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaWhatsapp />
                  </a>
                  <a
                    href="https://leetcode.com/Raj_Chhalotre"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <SiLeetcode />
                  </a>
                  <a
                    href="https://auth.geeksforgeeks.org/user/raj_gurjar/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user"
                    rel="noreferrer"
                    target="_blank"
                  >
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
