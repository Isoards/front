import React from "react";
import styles from "./RecommendedCaregiverList.module.css";
import photo from "../../img/photo1.png";

const caregivers = [
  {
    name: "김정희",
    experience: "8개월",
    location: "서울특별시",
    profilePhoto: photo,
    introduction: [
      "서울대학교병원 신경외과 간호사",
      "한강대학교병원 신경외과 간호사",
      "해성실버병원 간호사",
    ],
    rating: 5,
    reviews: 16,
  },
  {
    name: "김정희",
    experience: "8개월",
    location: "서울특별시",
    profilePhoto: photo,
    introduction: [
      "서울대학교병원 신경외과 간호사",
      "한강대학교병원 신경외과 간호사",
      "해성실버병원 간호사",
    ],
    rating: 5,
    reviews: 16,
  },
];

export default function RecommendedCaregiverList() {
  return (
    <div className={styles.recommendedCaregiverList}>
      <div className={styles.textSection}>
        <h2>추천 간병인 리스트</h2>
        <p>환자 정보를 기반으로 맞춤케어가 가능한 추천 간병인 리스트입니다.</p>
      </div>
      <div className={styles.costSection}>
        <form className={styles.estimatedCost}>
          <h3>예상 간병 비용</h3>
          <div className={styles.costDetails}>
            <p>15,000원 x 6시간</p>
            <p> x 46일</p>
            <p>x 거동도움 추가비</p>
          </div>
          <div className={styles.costRange}>
            <p>5,700,000 ~ 6,500,000원</p>
          </div>
        </form>
      </div>
      <div className={styles.listSection}>
        <div className={styles.listTable}>
          <h4>프로필사진</h4>
          <h4>간병 경력 및 지역</h4>
          <h4>대표 이력</h4>
          <h4>간병 평점</h4>
        </div>
        <div className={styles.caregiverList}>
          {caregivers.map((caregiver) => (
            <div key={caregiver.id} className={styles.caregiverCard}>
              <img
                src={caregiver.profilePhoto}
                alt={caregiver.name}
                className={styles.profilePhoto}
              />
              <div className={styles.caregiverInfo}>
                <div className={styles.caregiverDetails}>
                  <h3>{caregiver.name}</h3>
                  <p>
                    {caregiver.experience} ・{caregiver.location}
                  </p>
                </div>{" "}
                <div className={styles.introduction}>
                  {caregiver.introduction.map((intro, index) => (
                    <p key={index}>・{intro}</p>
                  ))}
                </div>
                <p>평점: {caregiver.rating}</p>
              </div>
              <button className={styles.requestButton}>간병 요청하기</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
