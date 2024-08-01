import React, { useState } from "react";
import styles from "./PatientInfoForm.module.css";

export default function PatientForm({ setStep }) {
  const [formData, setFormData] = useState({
    patientName: "",
    patientBirthDate: "",
    patientHeight: "",
    patientWeight: "",
    patientGender: "",
    reservationReason: "",
    reservationLocation: "",
    startDate: "",
    endDate: "",
    dailyStartTime: "",
    dailyEndTime: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleGenderSelect = (gender) => {
    setFormData({
      ...formData,
      patientGender: gender,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setStep(true);
    // defaultInstace.post(url, { ...formData }).then(function (res) {
    //     if (res.status === 200) {
    //         console.log("인증성공");
    //     }
    // });
  };
  // const isVaild =
  //   formData.patientName &&
  //   formData.patientBirthDate &&
  //   formData.patientHeight &&
  //   formData.patientWeight &&
  //   formData.patientGender;

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
            placeholder="홍길동"
            required
            aria-required="true"
            value={formData.patientName}
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
            required
            aria-required="true"
            value={formData.patientBirthDate}
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
            placeholder="160"
            value={formData.patientHeight}
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
            placeholder="50"
            required
            aria-required="true"
            value={formData.patientWeight}
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
              formData.patientGender === "남성" ? styles.selected : ""
            }`}
            onClick={() => handleGenderSelect("남성")}
          >
            남성
          </button>
          <button
            type="button"
            className={`${styles.selectionButton} ${
              formData.patientGender === "여성" ? styles.selected : ""
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
