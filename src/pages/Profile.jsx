import React, { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import star from "../img/Star 4.png"; // 별 이미지 import
import { useRecoilState } from "recoil";
import { patientEmbedingRequestData } from "../state/atoms";
import { careReservationRequestAPI, getCaregiverById } from "../util/api";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [patientEmbedingRequestDataState] = useRecoilState(
    patientEmbedingRequestData
  );
  const [caregiver, setCaregiver] = useState(null);
  const [error, setError] = useState(null);
  const caregiverId = patientEmbedingRequestDataState.caregiverId;
  const nav = useNavigate();

  useEffect(() => {
    const fetchCaregiverInfo = async () => {
      try {
        const response = await getCaregiverById(caregiverId);
        if (response.data.status === "SUCCESS") {
          setCaregiver(response.data.data);
        } else {
          setError("Failed to fetch caregiver info");
        }
      } catch (error) {
        setError("Failed to fetch caregiver info");
      }
    };

    fetchCaregiverInfo();
  }, [caregiverId]);

  const handleRequestClick = async (caregiverId) => {
    const userId = parseInt(localStorage.getItem("userId"));
    const reservationId = patientEmbedingRequestDataState.reservationId;

    const requestPayload = {
      caregiverId,
      reservationId,
    };

    try {
      const response = await careReservationRequestAPI(requestPayload);
      console.log("Reservation request successful:", response.data);
      // 필요한 추가 로직을 여기에 작성합니다.
      // 예시로 성공 페이지로 이동
      nav("/mypage");
    } catch (error) {
      console.error("Failed to request caregiver reservation:", error);
      // 오류 처리 로직을 여기에 작성합니다.
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<img key={i} src={star} alt="star" className={styles.star} />);
    }
    return stars;
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!caregiver) {
    return <div>로딩 중...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <h2>간병인 정보</h2>
        <p>환자 정보를 기반으로 맞춤케어가 가능한 추천 간병인 리스트입니다.</p>
      </div>
      <div className={styles.profileSection}>
        <div className={styles.introSection}>
          <img
            src="https://example.com/photo.jpg" // Placeholder image URL
            alt={`${caregiver.name} 사진`}
            className={styles.profileImage}
          />
          <div className={styles.introductionSection}>
            <h4>{caregiver.name} 간병인의 소개글</h4>
            <p>{caregiver.careerDescription}</p>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.profileInfo}>
            <div className={styles.basicInfo}>
              <p>
                <span className={styles.label}>이름</span> {caregiver.name}
              </p>
              <p>
                <span className={styles.label}>간병 경력</span> 2
              </p>
              <p>
                <span className={styles.label}>간병 가능 지역</span>
                서울특별시, 경기도 전지역, 충청도 전지역
              </p>
            </div>
            <p className={styles.line}></p>
            <div className={styles.box}>
              <p>
                <span className={styles.label}>보유 면허증</span>간호사자격증
                {caregiver.certifications.join(", ")}
              </p>
              <p className={styles.flexRow}>
                <span className={styles.label}>간병 후기</span>{" "}
                <div className={styles.rating}>
                  {renderStars(caregiver.averageRating)}
                </div>
              </p>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.hospitals}>
              <p>
                <span>간병인을 대표하는 3가지 이력</span>
                <ul>
                  {caregiver.caregiverWorkHistories.map((history, index) => (
                    <li key={index}>{history.workHistory}</li>
                  ))}
                </ul>
              </p>
            </div>
            <div className={styles.reviewsSection}>
              {caregiver.reviews &&
                caregiver.reviews.map((review, index) => (
                  <div key={index} className={styles.review}>
                    <p>{review.text}</p>
                    <div className={styles.rating}>
                      {renderStars(review.rating)}
                    </div>
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
          <p className={styles.line}></p>
          <div className={styles.costRange}>
            <p>6,072,000원</p>
          </div>
        </form>
      </div>
      <div className={styles.request}>
        <button
          className={styles.requestButton}
          onClick={() => handleRequestClick(caregiver.id)}
        >
          간병 요청하기
        </button>
      </div>
    </div>
  );
}
