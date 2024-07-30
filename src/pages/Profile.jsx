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
    rating: 4,
    profileImage: "https://via.placeholder.com/150",
  };

  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <h2>간병인 정보</h2>
        <p>환자 정보를 기반으로 맞춤케어가 가능한 추천 간병인 리스트입니다.</p>
      </div>
      <div className={styles.profileSection}>
        <div className={styles.introSection}>
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
              <p>
                <span className={styles.label}>이름</span> {caregiverInfo.name}
              </p>
              <p>
                <span className={styles.label}>간병 경력</span>{" "}
                {caregiverInfo.experience}
              </p>
              <p>
                <span className={styles.label}>간병 가능 지역</span>
                {caregiverInfo.availableAreas}
              </p>
            </div>
            <p class={styles.line}></p>
            <div className={styles.box}>
              <p>
                <span className={styles.label}>보유 면허증</span>{" "}
                {caregiverInfo.license}
              </p>
              <p>
                <span className={styles.label}>간병 후기</span>{" "}
                <p className={styles.rating}>
                  {"⭐".repeat(caregiverInfo.rating)}
                </p>
              </p>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.hospitals}>
              <span>간병인을 대표하는 3가지 이력</span>
              <ul>
                {caregiverInfo.hospitals.map((hospital, index) => (
                  <li key={index}>{hospital}</li>
                ))}
              </ul>
            </div>
            <div className={styles.reviewsSection}>
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
      <div className={styles.costSection}>
        <form className={styles.estimatedCost}>
          <h3>간병 비용 계산</h3>
          <div className={styles.costDetails}>
            <p>15,000원 x 6시간</p>
            <p> x 46일</p>
            <p>x 거동도움 하루 42,000원</p>
          </div>
          <p class={styles.line}></p>
          <div className={styles.costRange}>
            <p>6,072,000원</p>
          </div>
        </form>
      </div>
      <div className={styles.request}>
        <button className={styles.requestButton}>간병 요청하기</button>
      </div>
    </div>
  );
}
