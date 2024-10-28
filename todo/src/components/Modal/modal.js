import React, { useRef } from "react";
import "./modal.css";

function Modal({ children, showModal, setShowModal }) {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  }
  return (
    showModal &&
    <div className="modal">
      <div className="container" ref={modalRef} onClick={closeModal}>
        {children}
      </div>
    </div>
  );
}

export default Modal;