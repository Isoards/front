import React from "react";
import styles from "./PatientForm.module.css";

export default function PatientForm() {
  const patientInfo = {
    name: "박순희",
    disease: "파킨슨 병",
    location: "자택 (서울특별시 강남구 대치동 789-01)",
    carePeriod: "24.07.01 ~ 24.08.15",
    careTime: "09:00 ~ 18:00",
    request:
      "일상 생활 활동을 지원하며, 특히 아침과 저녁에 약물 복용을 철저히 관리해 주세요. 식사 준비 시에는 씹기 쉽고 소화가 잘 되는 음식을 준비해 주시고, 식사 후에는 설거지와 주방 정리를 맡아주세요. 하루에 1시간 정도 대화를 나누며 정서적 지지를 제공하고, 필요 시 마사지나 스트레칭을 도와주세요.",
  };

  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <h2>환자 정보</h2>
        <p>나의 도움이 필요한 환자분에 대해 자세히 알려드려요</p>
      </div>
      <div className={styles.profileSection}>
        <div className={styles.infoSection}>
          <div className={styles.box}>
            <div className={styles.basicInfo}>
              <p>
                <span className={styles.label}>이름</span> {patientInfo.name}
              </p>
              <p>
                <span className={styles.label}>병명</span> {patientInfo.disease}
              </p>
              <p>
                <span className={styles.label}>간병 요청 지역</span>
                {patientInfo.location}
              </p>
            </div>
            <div className={styles.requestSection}>
              <span>{patientInfo.name} 환자님 요청사항</span>
              <p>{patientInfo.request}</p>
            </div>
          </div>
          <div className={styles.careInfo}>
            <p>
              <span className={styles.label}>요청 간병 기간</span>{" "}
              {patientInfo.carePeriod}
            </p>
            <p>
              <span className={styles.label}>요청 간병 시간</span>{" "}
              {patientInfo.careTime}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.requestButton}>
        <button>간병 요청하기</button>
      </div>
    </div>
  );
}
