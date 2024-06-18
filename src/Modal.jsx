import React from "react";
import "./Modal.css";

const Modal = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{post?.title}</h2>
        <p>{post?.body}</p>
        <button onClick={onClose} className="close-button">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
