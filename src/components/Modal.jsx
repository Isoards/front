import React from "react";
import styles from "./Modal.module.css";

export default function Modal({ show, onClose, children }) {
  if (!show) {
    return null;
  }

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={styles.modalBody}>{children}</div>
        <div className={styles.modalFooter}>
          <button className={styles.confirmButton} onClick={onClose}>
            선택 완료
          </button>
        </div>
      </div>
    </div>
  );
}
