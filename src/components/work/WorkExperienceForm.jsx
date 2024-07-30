import { useState } from "react";
import TabButton from "../TabButton";
import { useRecoilState } from "recoil";
import styles from "./WorkExperienceForm.module.css";
import { CERTIFICATIONS } from "../../data.js";
import { caregiverSignUpState } from "../../state/atoms";
import { caregiverSignUpAPI } from "../../util/api.js";
import { useNavigate } from "react-router-dom";

export default function WorkExperienceForm({ setStep }) {
  const [caregiverSignUp, setCaregiverSignUp] = useRecoilState(caregiverSignUpState);
  const [currentWorkHistory, setCurrentWorkHistory] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const nav = useNavigate()

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCaregiverSignUp({
      ...caregiverSignUp,
      [name]: value,
    });
  };

  const handleWorkHistoryChange = (event) => {
    setCurrentWorkHistory(event.target.value);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const addWorkHistory = () => {
    if (currentWorkHistory && startDate && endDate) {
      const formattedPeriod = `${formatDate(startDate)} ~ ${formatDate(endDate)}`;
      const newWorkHistory = {
        workHistory: currentWorkHistory,
        workHistoryPeriod: formattedPeriod
      };
      
      setCaregiverSignUp(prevState => {
        const updatedWorkHistory = Array.isArray(prevState.workHistory)
          ? [...prevState.workHistory, newWorkHistory]
          : [newWorkHistory];
  
        return {
          ...prevState,
          workHistory: updatedWorkHistory
        };
      });
  
      setCurrentWorkHistory("");
      setStartDate("");
      setEndDate("");
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        const response = await caregiverSignUpAPI(caregiverSignUp)
        console.log(response);
        nav("/userLogin")
    } catch (error) {
        console.error('Signup failed:', error);
    }
  };

  return (
    <div className={styles.formSection}>
      <div className={styles.headerContainer}>
        <h2 className={styles.headerTitle}>어떤 일을 했었는지 알려주세요.</h2>
        <div className={styles.steps}>
          <span className={styles.step}>1</span>
          <span className={styles.step}>2</span>
          <span className={styles.onStep}>3</span>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>면허/자격증 종류 선택 및 인증</label>
          <div className={styles.flexRow}>
            <select
              name="certification"
              value={caregiverSignUp.certification}
              onChange={handleChange}
              className={styles.selectInput}
            >
              {CERTIFICATIONS.map((CERTIFICATION, index) => (
                <option key={index} value={CERTIFICATION}>
                  {CERTIFICATION}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label>근무 경력 기재 및 인증</label>
          <div className={styles.flexRow}>
            <input
              type="text"
              value={currentWorkHistory}
              onChange={handleWorkHistoryChange}
              placeholder="00병원 00동"
              className={styles.textInput}
            />
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className={styles.dateInput}
            />
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              min={startDate}
              className={styles.dateInput}
            />
            <button type="button" onClick={addWorkHistory} className={styles.addButton}>
              추가
            </button>
          </div>
        </div>
        {caregiverSignUp.workHistory && caregiverSignUp.workHistory.map((history, index) => (
        <div key={index} className={styles.workHistoryItem}>
          {history.workHistory} - {history.workHistoryPeriod}
        </div>
        ))}
        <div className={styles.formGroup}>
          <label>환자나 보호자에게 설명할 수 있는 나의 소개글을 써주세요</label>
          <textarea
            name="careerDescription"
            value={caregiverSignUp.careerDescription}
            onChange={handleChange}
            placeholder="근무 경력과 관련지어 소개글을 작성하면, 더 많은 도움을 줄 수 있는 환자와 매칭이 가능해집니다."
            className={styles.textArea}
          />
        </div>
        <div className={styles.formNavigation}>
          <TabButton onSelect={() => setStep(false)}>이전</TabButton>
          <TabButton>가입</TabButton>
        </div>
      </form>
    </div>
  );
}