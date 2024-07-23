import React, { useState } from "react";
import TabButton from "../TabButton";
import styles from "./PatientForm.module.css";

export default function PatientForm({ setStep }) {
  const [formData, setFormData] = useState({
    patientName: "",
    patientBirthDate: "",
    patientHeight: "",
    patientWeight: "",
    patientGender: "",
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
      <h2>환자 정보 입력</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>
            이름<span>*</span>
          </label>
          <input
            type="text"
            name="patientName"
            value={formData.patientName}
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
            value={formData.patientHeight}
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
            value={formData.patientWeight}
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
            className={`${styles.genderButton} ${
              formData.patientGender === "남성" ? styles.selected : ""
            }`}
            onClick={() => handleGenderSelect("남성")}
          >
            남성
          </button>
          <button
            type="button"
            className={`${styles.genderButton} ${
              formData.patientGender === "여성" ? styles.selected : ""
            }`}
            onClick={() => handleGenderSelect("여성")}
          >
            여성
          </button>
        </div>
        <div className={styles.nextButton}>
          <TabButton>다음</TabButton>
        </div>
      </form>
    </div>
  );
}
