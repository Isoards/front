import React from "react";
import TabButton from "../TabButton";
import styles from "./PatientSymptomsForm.module.css";
import { useRecoilState } from "recoil";
import { careReservationRequest } from "../../state/atoms";

export default function PatientSymptomsForm({ setStep }) {
  const [careReservationRequestState, setCareReservationRequestState] = useRecoilState(careReservationRequest)

  const handleSubmit = (e) => {
    setStep(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCareReservationRequestState({
      ...careReservationRequestState,
      [name]: value,
    });
  };

  return (
    <div className={styles.formSection}>
      <div className={styles.headerContainer}>
        <h2 className={styles.headerTitle}>환자 증상 입력</h2>
        <div className={styles.steps}>
          <span className={styles.step}>1</span>
          <span className={styles.step}>2</span>
          <span className={styles.onStep}>3</span>
          <span className={styles.step}>4</span>
        </div>
      </div>
      <p>
        최대한 자세하고 구체적으로 작성할수록 맞춤케어가 가능한 간병인을 더 잘
        찾아드릴 수 있어요!
      </p>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>
            어디가 어떻게 불편하신가요?<span>*</span>
          </label>
          <input
            type="text"
            name="reservationReason"
            placeholder="예시) 최근 혈당 수치가 잘 조절되지 않아 피로감이 심하고, 잦은 갈증과 배뇨를 경험하고 있습니다.
          &#10;발이나 다리에 감각 저하와 통증이 있으며, 상처가 쉽게 낫지 않습니다."
          value={careReservationRequestState.reservationReason}
          onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label>안되는 행위나 동작이 있으신가요?</label>
          <input
            type="text"
            name="UnAcceptedBehavior"
            placeholder="예시) 장시간 서 있거나 걷기가 힘들고, 손끝이나 발끝의 감각이 둔해져 정밀한 동작을 수행하기 어렵습니다.
또한, 식사 관리와 약물 복용을 일정하게 유지하는 데 어려움을 겪고 있습니다."
          value={careReservationRequestState.UnAcceptedBehavior}
          onChange={handleChange}
          
          />
        </div>
        <div className={styles.formGroup}>
          <label>최근 병원에 방문하셨다면 진료내용을 작성해주세요.</label>
          <input
            type="text"
            name="RecentDiseaseData"
            placeholder="예시) 최근 내분비내과를 방문하여 HbA1c 수치를 확인했고, 혈당 조절이 잘 되지 않아 인슐린 용량을 조정했습니다.
또한, 당뇨발 예방을 위해 정기적인 발 관리 지침을 받았고, 식단 조절 방법에 대한 조언을 받았습니다."
            value={careReservationRequestState.RecentDiseaseData}
            onChange={handleChange}

          />
        </div>
        <div className={styles.formNavigation}>
          <TabButton onSelect={() => setStep(false)}>이전</TabButton>
          <TabButton>다음</TabButton>
        </div>
      </form>
    </div>
  );
}
