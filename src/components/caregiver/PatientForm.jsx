import React from "react";
import styles from "./PatientForm.module.css";
import { useRecoilState } from "recoil";
import { careReservationRequest } from "../../state/atoms";

export default function PatientForm({ setStep }) {
  const [careReservationRequestState, setCareReservationRequestState] =
    useRecoilState(careReservationRequest);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCareReservationRequestState({
      ...careReservationRequestState,
      [name]: value,
    });
  };

  const handleGenderSelect = (gender) => {
    setCareReservationRequestState({
      ...careReservationRequestState,
      patientGender: gender,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(true);
  };

  return (
    <div className={styles.formSection}>
      <div className={styles.headerContainer}>
        <h2 className={styles.headerTitle}>환자 정보 입력</h2>
        <div className={styles.steps}>
          <span className={styles.onStep}>1</span>
          <span className={styles.step}>2</span>
          <span className={styles.step}>3</span>
          <span className={styles.step}>4</span>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>
            이름<span>*</span>
          </label>
          <input
            type="text"
            name="patientName"
            value={careReservationRequestState.patientName}
            placeholder="홍길동"
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label>
            생년월일<span>*</span>
          </label>
          <input
            type="date"
            name="patientBirthDate"
            placeholder="1900.01.01"
            value={careReservationRequestState.patientBirthDate}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label>
            키<span>*</span>
          </label>
          <input
            type="number"
            name="patientHeight"
            value={careReservationRequestState.patientHeight}
            placeholder="160"
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label>
            몸무게<span>*</span>
          </label>
          <input
            type="number"
            name="patientWeight"
            value={careReservationRequestState.patientWeight}
            placeholder="50"
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
              careReservationRequestState.patientGender === "남성"
                ? styles.selected
                : ""
            }`}
            onClick={() => handleGenderSelect("남성")}
          >
            남성
          </button>
          <button
            type="button"
            className={`${styles.selectionButton} ${
              careReservationRequestState.patientGender === "여성"
                ? styles.selected
                : ""
            }`}
            onClick={() => handleGenderSelect("여성")}
          >
            여성
          </button>
        </div>
        <div className={styles.nextButton}>
          <button>다음</button>
        </div>
      </form>
    </div>
  );
}