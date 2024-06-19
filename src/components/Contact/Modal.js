import React from "react";
// import "./Modal.scss";
import "./ContactCom.scss";

const Modal = ({ message, closeModal }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="popup-content">
          <h3>Message</h3>
          <p>{message}</p>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
