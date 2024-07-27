import React from "react";
import styles from "./Profile.module.css";

export default function Profile() {
  const caregiverInfo = {
    name: "김정희",
    experience: "1년",
    availableAreas: "서울특별시, 경기도 전지역, 충청도 전지역",
    license: "간호사 면허증",
    hospitals: [
      "OO대학교병원 신경외과",
      "OO대학교병원 신경외과",
      "OO대학교병원 신경외과",
    ],
    introduction:
      "안녕하세요, 저는 김정희입니다. 저는 간호사로서 20여년의 경험을 보유하고 있으며, 그동안 신경과 병원과 응급실에서 근무하며 다양한 경험을 쌓았습니다. 제 경험을 통해 많은 환자분들과 그 가족들에게 조금이라도 더 나은 도움을 드리고자 하는 마음에서 시작되었습니다. 간병을 바탕으로 환자분들의 건강과 안위를 책임질 수 있을 것이라고, 그들의 선택지, 정서적 필요를 세심하게 돌보는 것을 목표로 하고 있습니다.",
    reviews: [
      { text: "최고의 간병인입니다.", rating: 5 },
      { text: "정말 감사드려요 :)", rating: 5 },
      { text: "어머니가 정말 좋아하셨어요", rating: 4 },
    ],
    profileImage: "https://via.placeholder.com/150",
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>간병인 정보</h2>
      <p className={styles.subtitle}>
        환자 정보를 기반으로 맞춤케어가 가능한 추천 간병인 리스트입니다.
      </p>

      <div className={styles.profileSection}>
        <div className={styles.leftSection}>
          <img
            src={caregiverInfo.profileImage}
            alt="간병인 프로필"
            className={styles.profileImage}
          />
          <div className={styles.introductionSection}>
            <h4>김정희 간병인의 소개글</h4>
            <p>{caregiverInfo.introduction}</p>
          </div>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.profileInfo}>
            <div className={styles.basicInfo}>
              <h3>{caregiverInfo.name}</h3>
              <p>경력 | {caregiverInfo.experience}</p>
              <p>가능 지역 | {caregiverInfo.availableAreas}</p>
              <p>보유 면허증 | {caregiverInfo.license}</p>
            </div>
            <h4>간병인 경력 병원</h4>
            <ul>
              {caregiverInfo.hospitals.map((hospital, index) => (
                <li key={index}>{hospital}</li>
              ))}
            </ul>
          </div>

          <div className={styles.reviewsSection}>
            <h4>간병 후기</h4>
            {caregiverInfo.reviews.map((review, index) => (
              <div key={index} className={styles.review}>
                <p>{review.text}</p>
                <p className={styles.rating}>{"⭐".repeat(review.rating)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
