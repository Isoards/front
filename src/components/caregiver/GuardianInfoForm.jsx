import React, { useEffect } from "react";
import TabButton from "../TabButton";
import { useNavigate } from "react-router-dom";
import styles from "./GuardianInfoForm.module.css";
import { careReservationInputAPI, embeddingResponse, esResponse } from "../../util/api";
import { useRecoilState } from "recoil";
import { careReservationRequest } from "../../state/atoms";

export default function GuardianInfoForm({ setStep }) {
  const nav = useNavigate();
  const [careReservationRequestState, setCareReservationRequestState] = useRecoilState(careReservationRequest)
 

  useEffect(() => {
    setCareReservationRequestState({
      ...careReservationRequestState,
      ["userId"]:parseInt(localStorage.getItem("userId"))
    })
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await careReservationInputAPI(careReservationRequestState);
      const { diseaseName, reservationReason } = response.data;
      const embeddedVector = await embeddingResponse(diseaseName, reservationReason);
      const esResult = await esResponse(embeddedVector);
      console.log(esResult);
      nav("/list")
    } catch (error) {
      console.error('Submission failed:', error);
    }
  };

  

  function goNext() {
    navigate("/loading");
  }
  return (
    <div className={styles.formSection}>
      <div className={styles.headerContainer}>
        <h2 className={styles.headerTitle}>보호자 정보 입력</h2>
        <div className={styles.steps}>
          <span className={styles.step}>1</span>
          <span className={styles.step}>2</span>
          <span className={styles.step}>3</span>
          <span className={styles.onStep}>4</span>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>
            보호자 이름<span>*</span>
          </label>
          <input type="text" name="guardianName" placeholder="홍길동" />
        </div>
        <div className={styles.formGroup}>
          <label>환자와의 관계</label>
          <select name="relationship">
            <option value="">관계를 선택해주세요</option>
            <option value="child">자녀</option>
            <option value="parents">부모</option>
            <option value="grandparents">조부모</option>
            <option value="sibling">형제 * 자매</option>
            <option value="grandchild">손자</option>
            <option value="other">기타</option>
          </select>
        </div>
        <p>
          <input type="checkbox" name="useMemberInfo" />
          회원정보 불러오기
        </p>
        <div className={styles.formGroup}>
          <label>보호자 연락처</label>
          <input
            type="number"
            name="guardianPhone"
            placeholder="010 - 1234 - 5678"
          />
          <button type="button" className="add-contact-btn">
            + 연락처 추가하기
          </button>
        </div>
        
        <div className={styles.formNavigation}>
          <TabButton onSelect={() => setStep(false)}>이전</TabButton>
          <TabButton onSelect={handleSubmit}>찾기</TabButton>
        </div>
      </form>
    </div>
  );
}
