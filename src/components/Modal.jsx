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
          <h3>진단명 검색</h3>
        </div>
        <div className={styles.modalBody}>{children}</div>
      </div>
    </div>
  );
}
