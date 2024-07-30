import { useState } from "react";
import TabButton from "../TabButton";
import styles from "./WorkExperienceForm.module.css";
import { CERTIFICATIONS } from "../../data.js";

export default function WorkExperienceForm({ setStep }) {
  const [formData, setFormData] = useState({
    licenseType: "",
    licenseFile: null,
    workExperience: "",
    workDate: "",
    introduction: "",
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    if (files) {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setStep(true);
  };
  return (
    <div className={styles.formSection}>
      <div className={styles.headerContainer}>
        <h2 className={styles.headerTitle}>어떤 일을 했었는지 알려주세요.</h2>
        <div className={styles.steps}>
          <span className={styles.step}>1</span>
          <span className={styles.onStep}>2</span>
          <span className={styles.step}>3</span>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>면허/자격증 종류 선택 및 인증</label>
          <div className={styles.flexRow}>
            <select
              name="licenseType"
              value={formData.licenseType}
              onChange={handleChange}
              className={styles.selectInput}
            >
              {CERTIFICATIONS.map((CERTIFICATION, index) => (
                <option key={index} value={CERTIFICATION}>
                  {CERTIFICATION}
                </option>
              ))}
            </select>
            <div className={styles.fileInputContainer}>
              <input
                type="file"
                name="licenseFile"
                onChange={handleChange}
                className={styles.fileInput}
              />
            </div>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label>근무 경력 기재 및 인증</label>
          <div className={styles.flexRow}>
            <input
              type="text"
              name="workExperience"
              value={formData.workExperience}
              onChange={handleChange}
              placeholder="00병원 00동 2년 근무"
              className={styles.textInput}
            />
          </div>
          <div className={styles.flexRow}>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className={styles.dateInput}
            />
            <span> ~ </span>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className={styles.dateInput}
            />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label>환자나 보호자에게 설명할 수 있는 나의 소개글을 써주세요</label>
          <textarea
            name="introduction"
            value={formData.introduction}
            onChange={handleChange}
            placeholder="근무 경력과 관련지어 소개글을 작성하면, 더 많은 도움을 줄 수 있는 환자와 매칭이 가능해집니다."
            className={styles.textArea}
          />
        </div>
        <div className={styles.formNavigation}>
          <button
            className={styles.previousButton}
            onClick={() => setStep(false)}
          >
            이전
          </button>
          <button className={styles.nextButton}>다음</button>
        </div>
      </form>
    </div>
  );
}
