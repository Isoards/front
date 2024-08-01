import { useState } from "react";
import styles from "./CaregiverInfoForm.module.css";

export default function CaregiverInfoForm({ setStep }) {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    gender: "",
    foreigner: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelect = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setStep(true);
  };
  return (
    <div className={styles.formSection}>
      <div className={styles.headerContainer}>
        <h2 className={styles.headerTitle}>간병인의 기본 정보를 알려주세요</h2>
        <div className={styles.steps}>
          <span className={styles.onStep}>1</span>
          <span className={styles.step}>2</span>
          <span className={styles.step}>3</span>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>
            이름<span>*</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="홍길동"
            required
            aria-required="true"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label>
            생년월일<span>*</span>
          </label>
          <input
            type="date"
            name="date"
            placeholder="1900.01.01"
            required
            aria-required="true"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div className={styles.selection}>
          <label>
            성별<span>*</span>
          </label>
          <button
            type="button"
            className={`${styles.selectionButton} ${
              formData.gender === "남성" ? styles.selected : ""
            }`}
            onClick={() => handleSelect("gender", "남성")}
          >
            남성
          </button>
          <button
            type="button"
            className={`${styles.selectionButton} ${
              formData.gender === "여성" ? styles.selected : ""
            }`}
            onClick={() => handleSelect("gender", "여성")}
          >
            여성
          </button>
        </div>
        <div className={styles.selection}>
          <label>
            내/외국인<span>*</span>
          </label>
          <button
            type="button"
            className={`${styles.selectionButton} ${
              formData.foreigner === "내국인" ? styles.selected : ""
            }`}
            onClick={() => handleSelect("foreigner", "내국인")}
          >
            내국인
          </button>
          <button
            type="button"
            className={`${styles.selectionButton} ${
              formData.foreigner === "외국인" ? styles.selected : ""
            }`}
            onClick={() => handleSelect("foreigner", "외국인")}
          >
            외국인
          </button>
        </div>
        <div className={styles.nextButton}>
          <button>다음</button>
        </div>
      </form>
    </div>
  );
}
