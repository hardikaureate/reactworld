import React, { useEffect, useRef } from "react";
import styles from "./modal.module.css";

const Modal = ({ modalStyle, children, show, onClose, backdropStyle }) => {
  const modalRef = useRef(null);
  useEffect(() => {
    if (show) {
      modalRef.current.classList.add(styles.visible);
    } else {
      modalRef.current.classList.remove(styles.visible);
    }
  }, [show]);
  return (
    <React.Fragment>
      <div ref={modalRef} style={backdropStyle} className={`${styles.modal}`}>
        <button
          onClick={onClose}
          style={{
            width: 60,
            height: 40,
            position: "absolute",
            top: 50,
            right: 0,
            margin: "1rem",
            cursor: "pointer",
            boxShadow:'none'
          }}
          className={styles.close__btn}
        >
          
          <i class="far fa-times-circle"></i>
        </button>
        <div style={modalStyle} className={styles.modal__wrap}>
          {children}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
