import { useState } from "react";
import TabButton from "../TabButton";
import styles from "./CaregiverInfoForm.module.css";
import { useRecoilState } from "recoil";

import { caregiverSignUpState } from "../../state/atoms";

export default function CaregiverInfoForm({ setStep }) {

  const [caregiverSignUp, setCaregiverSignUp] = useRecoilState(caregiverSignUpState)
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCaregiverSignUp({
      ...caregiverSignUp,
      [name]: value,
    });
  };


  const handleSelect = (name, value) => {
    setCaregiverSignUp({
      ...caregiverSignUp,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(caregiverSignUp);
    setStep(true);
  };
  return (
    <div className={styles.formSection}>
      <div className={styles.headerContainer}>
        <h2 className={styles.headerTitle}>간병인의 기본 정보를 알려주세요</h2>
        <div className={styles.steps}>
          <span className={styles.step}>1</span>  
          <span className={styles.onStep}>2</span>
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
            value={caregiverSignUp.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label>
            생년월일<span>*</span>
          </label>
          <input
            type="date"
            name="birthDate"
            value={caregiverSignUp.birthDate}
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
              caregiverSignUp.gender === "남성" ? styles.selected : ""
            }`}
            onClick={() => handleSelect("gender", "남성")}
          >
            남성
          </button>
          <button
            type="button"
            className={`${styles.selectionButton} ${
              caregiverSignUp.gender === "여성" ? styles.selected : ""
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
              caregiverSignUp.foreigner === "내국인" ? styles.selected : ""
            }`}
            onClick={() => handleSelect("foreigner", "내국인")}
          >
            내국인
          </button>
          <button
            type="button"
            className={`${styles.selectionButton} ${
              caregiverSignUp.foreigner === "외국인" ? styles.selected : ""
            }`}
            onClick={() => handleSelect("foreigner", "외국인")}
          >
            외국인
          </button>
        </div>
        <div className={styles.formNavigation}>
          <TabButton onSelect={() => setStep(false)}>이전</TabButton>
          <TabButton>다음</TabButton>
        </div>
      </form>
    </div>
  );
}
