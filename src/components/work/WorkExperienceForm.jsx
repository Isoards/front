import React, { useState } from "react";
import { useRecoilState } from "recoil";
import styles from "./WorkExperienceForm.module.css";
import { CERTIFICATIONS } from "../../data.js";
import { caregiverSignUpState } from "../../state/atoms";
import { caregiverSignUpAPI } from "../../util/api.js";
import { useNavigate } from "react-router-dom";
import addIcon from "../../img/add.png";
import Loading from "../../pages/Loading.jsx";

export default function WorkExperienceForm({ setStep }) {
  const [caregiverSignUp, setCaregiverSignUp] =
    useRecoilState(caregiverSignUpState);
  const [workHistories, setWorkHistories] = useState([
    { id: 1, workHistory: "", startDate: "", endDate: "" },
  ]);
  const [loading, setLoading] = useState(false);

  const nav = useNavigate();

  const handleWorkHistoryChange = (id, field, value) => {
    setWorkHistories((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const addWorkHistoryField = () => {
    if (workHistories.length < 3) {
      setWorkHistories((prev) => [
        ...prev,
        { id: prev.length + 1, workHistory: "", startDate: "", endDate: "" },
      ]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    setCaregiverSignUp((prev) => ({
      ...prev,
      workHistory: workHistories.map((history) => ({
        workHistory: history.workHistory,
        workHistoryPeriod: `${history.startDate} ~ ${history.endDate}`,
      })),
    }));

    try {
      await caregiverSignUpAPI(caregiverSignUp);
      setTimeout(() => {
        setLoading(false);
        nav("/userLogin");
      }, 2000); // 2초 동안 Loading 컴포넌트 표시
    } catch (error) {
      console.error("Signup failed:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />; // 로딩 상태일 때 로딩 컴포넌트를 렌더링
  }

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
              onChange={(e) =>
                setCaregiverSignUp({
                  ...caregiverSignUp,
                  certification: e.target.value,
                })
              }
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
          <div className={styles.flexRow}>
            <label>근무 경력 기재 및 인증</label>
            {workHistories.length < 3 && (
              <button
                type="button"
                onClick={addWorkHistoryField}
                className={styles.addButton}
              >
                <img
                  src={addIcon}
                  alt="Add Work History"
                  className={styles.addIcon}
                />
              </button>
            )}
          </div>
          {workHistories.map((history, index) => (
            <div key={history.id} className={styles.workHistoryBlock}>
              <div className={styles.box}>
                <input
                  type="text"
                  value={history.workHistory}
                  onChange={(e) =>
                    handleWorkHistoryChange(
                      history.id,
                      "workHistory",
                      e.target.value
                    )
                  }
                  placeholder="00병원 00동 2년 근무"
                  className={styles.textInput}
                />
              </div>
              <div className={styles.flexRow}>
                <input
                  type="date"
                  value={history.startDate}
                  onChange={(e) =>
                    handleWorkHistoryChange(
                      history.id,
                      "startDate",
                      e.target.value
                    )
                  }
                  className={styles.dateInput}
                />
                ~
                <input
                  type="date"
                  value={history.endDate}
                  onChange={(e) =>
                    handleWorkHistoryChange(
                      history.id,
                      "endDate",
                      e.target.value
                    )
                  }
                  min={history.startDate}
                  className={styles.dateInput}
                />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.formGroup}>
          <label>환자나 보호자에게 설명할 수 있는 나의 소개글을 써주세요</label>
          <textarea
            name="careerDescription"
            value={caregiverSignUp.careerDescription}
            onChange={(e) =>
              setCaregiverSignUp({
                ...caregiverSignUp,
                careerDescription: e.target.value,
              })
            }
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
          <button className={styles.nextButton} type="submit">
            가입
          </button>
        </div>
      </form>
    </div>
  );
}
