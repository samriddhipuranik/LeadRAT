import React from "react";
import "./modal.css";
import payImg from "../../images/payDone.png";

function Modal({ isOpen, onClose, quantity, ticketType }) {

  return (
    // Modal backdrop
    isOpen && (
      <div className="modal-backdrop">
        <div className="modal-card">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <h3>Details: </h3>
          <br></br>
          <p>
            <em>Number of seats booked: {quantity}</em>
          </p>
          <p> 
            <em>Ticket Type: {ticketType}</em>
          </p>
            <div>
          <img src={payImg} alt="payment done!" style={{position:'relative',left:'45%'}} />
          </div>
        
        </div>
      </div>
    )
  );
}

export default Modal;
