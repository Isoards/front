import React, { useState } from "react";
import styles from "./MypageForm.module.css";

export default function MypageForm() {
  const [formData, setFormData] = useState({
    name: "김하나",
    phone: "010-1234-5678",
    address: "서울특별시 송파구 올림픽로 300, 가상아파트 101동 202호",
    paymentInfo: "국민카드 1234",
    caregiver: {
      name: "김정희",
      experience: "1년",
      location: "서울특별시",
      schedule: {
        date: "2024.07.01 ~ 2024.08.15",
        time: "09:00 ~ 18:00",
        place: "서울 영등포구 63로 10 여의도병원 본관 2층 입원실",
      },
    },
    patient: {
      name: "박순희",
      hospital: "파킨슨병",
      birthDate: "1958.02.03",
      gender: "여성",
    },
    requestDate: "2024.06.29",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className={styles.container}>
      <form className={styles.mypage}>
        <div className={styles.profileHeader}>
          <h2>안녕하세요, {formData.name}님 :)</h2>
          <button>회원탈퇴</button>
        </div>
        <div className={styles.section}>
          <div className={styles.profileSection}>
            <div className={styles.profileInfo}>
              <h2>
                {formData.name}{" "}
                <button className={styles.editButton}>✏️</button>
              </h2>
              <button className={styles.logoutButton}>로그아웃</button>
              <p>전화번호: {formData.phone}</p>
              <p>주소: {formData.address}</p>
            </div>
          </div>
          <div className={styles.paymentSection}>
            <div className={styles.sectionTitle}>결제 정보</div>
            <div className={styles.paymentInfo}>
              <p>{formData.paymentInfo}</p>
              <p>0000 0000 0000 1234</p>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.matchSection}>
            <div className={styles.sectionTitle}>간병 매칭 정보</div>
            <div className={styles.matchInfo}>
              <div className={styles.patientInfo}>
                <div>
                  환자
                  <p>
                    {formData.patient.name} / {formData.patient.hospital}
                  </p>
                </div>
                <p>생년월일: {formData.patient.birthDate}</p>
                <p>성별: {formData.patient.gender}</p>
              </div>
              <div className={styles.caregiverInfo}>
                <div>
                  간병인
                  <p>{formData.caregiver.name}</p>
                </div>
                <p>경력: {formData.caregiver.experience}</p>
                <p>활동 지역: {formData.caregiver.location}</p>
                <p>간병 기간: {formData.caregiver.schedule.date}</p>
                <p>간병 시간: {formData.caregiver.schedule.time}</p>
                <p>장소: {formData.caregiver.schedule.place}</p>
              </div>
            </div>
          </div>
          <div className={styles.historySection}>
            <div className={styles.sectionTitle}>간병 신청 이력</div>
            <div className={styles.historyInfo}>
              <p>
                파킨슨병 환자 {formData.patient.name} → 간병인{" "}
                {formData.caregiver.name}
              </p>
              <p>신청 날짜: {formData.requestDate}</p>
            </div>

            <div className={styles.sectionTitle}>내가 작성한 후기</div>
            <div className={styles.reviewInfo}>
              <p>아직 작성한 후기가 없습니다.</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
