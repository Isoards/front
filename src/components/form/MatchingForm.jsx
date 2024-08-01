import React from "react";
import styles from "./MatchingForm.module.css";

export default function MatchingForm() {
  const formData = {
    period: "2024.07.01 ~ 2024.08.15",
    time: "09:00 ~ 18:00",
    location: "서울 영등포구 63로 10 여의도성모병원 본관 2층 입원실",
    patient: {
      name: "박순희",
      disease: "파킨슨병",
      birthDate: "1958.02.03",
      gender: "여성",
    },
    caregiver: {
      name: "김정희",
      license: "간호사 면허",
      experience: "8개월",
      location: "서울특별시",
    },
    contract: "2000.00.00_홍길동,김정희_간병계약서.pdf",
    payment: "500,000원 결제 완료 카드결제(신한) / 무이자 할부 2개월",
  };

  return (
    <div className={styles.formSection}>
      <h2 className={styles.title}>간병 매칭 정보</h2>
      <div className={styles.formGroup}>
        <div>
          <label className={styles.label}>간병 기간</label>
          <span className={styles.value}>{formData.period}</span>
        </div>
        <div>
          <label className={styles.label}>간병 시간</label>
          <span className={styles.value}>{formData.time}</span>
        </div>
      </div>
      <div className={styles.infoSection}>
        <label className={styles.label}>간병 장소</label>
        <span className={styles.value}>{formData.location}</span>
      </div>
      <div className={styles.infoSection}>
        <div className={styles.patientCaregiver}>
          <div className={styles.infoBox}>
            <label className={styles.label}>환자</label>
            <div className={styles.box}>
              <h3>
                {formData.patient.name} / {formData.patient.disease}
              </h3>
              <p>
                {formData.patient.birthDate} / {formData.patient.gender}
              </p>
            </div>
          </div>
          <div className={styles.infoBox}>
            <label className={styles.label}>간병인</label>
            <div className={styles.box}>
              <h3>{formData.caregiver.name}</h3>
              <p>
                {formData.caregiver.license} / {formData.caregiver.experience} /{" "}
                {formData.caregiver.location}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.infoSection}>
        <label className={styles.label}>간병인 계약서</label>
        <div className={styles.section}>
          <span className={styles.value}>{formData.contract}</span>
          <button className={styles.button}>계약서 확인</button>
        </div>
      </div>
      <div className={styles.infoSection}>
        <label className={styles.label}>결제 정보</label>
        <div className={styles.section}>
          <span className={styles.value}>{formData.payment}</span>
          <button className={styles.button}>결제 내역 확인</button>
        </div>
      </div>
    </div>
  );
}
