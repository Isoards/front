import React, { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import star from "../img/Star 4.png"; // 별 이미지 import
import { useRecoilState } from "recoil";
import { patientEmbedingRequestData } from "../state/atoms";
import { careReservationRequestAPI, getCaregiverById } from "../util/api";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

export default function Profile() {
  const [patientEmbedingRequestDataState] = useRecoilState(
    patientEmbedingRequestData
  );
  const [caregiver, setCaregiver] = useState(null);
  const [error, setError] = useState(null);
  const caregiverId = patientEmbedingRequestDataState.caregiverId;
  const nav = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  

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
    setIsLoading(true); // 로딩 상태 시작

    const userId = parseInt(localStorage.getItem("userId"));
    const reservationId = patientEmbedingRequestDataState.reservationId;

    const requestPayload = {
      caregiverId,
      reservationId,
    };

    try {
      await new Promise(resolve => setTimeout(resolve, 3000));
      const response = await careReservationRequestAPI(requestPayload);
      setIsLoading(false);
      console.log("Reservation request successful:", response.data);
      nav("/mypage");
    } catch (error) {
      console.error("Failed to request caregiver reservation:", error);
      // 오류 처리 로직을 여기에 작성합니다.
    }
  };
  if (isLoading) {
    return <Loading/>;
  }

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
    return <Loading />;
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
            src="data:image/png;base64,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" // Placeholder image URL
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
