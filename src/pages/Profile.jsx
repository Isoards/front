import React from "react";
import styles from "./Profile.module.css";

export default function Profile() {
  const caregiver = {
    photo: "https://example.com/photo.jpg",
    name: "김정희",
    experience: 1,
    startDate: "2023.06 시작",
    location: "서울특별시, 경기도 전지역, 충청도 전지역",
    license: "간호사 면허증",
    certifications: [
      "OO대학병원 신경외과",
      "OO대학교병원 신경외과",
      "OO대학교병원 신경외과",
    ],
    description:
      "안녕하세요, 저는 김정희입니다. 저는 간호사로서 20년의 경력을 보유하고 있으며, 다양한 병원에서 근무한 경험을 통해 환자와 그 가족에게 최상의 서비스를 제공하기 위해 노력하고 있습니다.",
    reviews: [
      { text: "최고의 간병인입니다!", rating: 5 },
      { text: "정말 감사드려요 :)", rating: 4 },
      { text: "어머니가 정말 좋아하셨어요", rating: 5 },
    ],
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>간병인 정보</h1>
      <p className={styles.subtitle}>
        환자 정보를 기반으로 맞춤케어가 가능한 추천 간병인 리스트입니다.
      </p>
      <div className={styles.profileSection}>
        <img
          src={caregiver.photo}
          alt={`${caregiver.name} 사진`}
          className={styles.photo}
        />
        <div className={styles.info}>
          <h2>{caregiver.name}</h2>
          <p className={styles.experience}>
            경력 {caregiver.experience}년 ({caregiver.startDate} 시작)
          </p>
          <p className={styles.location}>
            활동 가능 지역: {caregiver.location}
          </p>
          <p className={styles.license}>보유 면허증: {caregiver.license}</p>
          <h3 className={styles.sectionTitle}>간병인 경력 및 자격 사항</h3>
          <ul>
            {caregiver.certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
          <h3 className={styles.sectionTitle}>간병인 소개글</h3>
          <p>{caregiver.description}</p>
        </div>
      </div>
      <div className={styles.reviewsSection}>
        <h3 className={styles.sectionTitle}>간병 후기</h3>
        <div className={styles.reviews}>
          {caregiver.reviews.map((review, index) => (
            <div key={index} className={styles.review}>
              <p className={styles.reviewText}>{review.text}</p>
              <p className={styles.reviewRating}>평점: {review.rating} / 5</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.costSection}>
        <h3 className={styles.sectionTitle}>간병 비용 계산</h3>
        <div className={styles.costDetails}>
          <p>추가 비용: 거동도움 하루 42,000원</p>
          <p>시간: 15,000원 x 6시간</p>
          <p>기간: 46일</p>
          <h2>총 간병 비용: 6,072,000원</h2>
        </div>
        <button className={styles.requestButton}>간병 요청 보내기</button>
      </div>
    </div>
  );
}
