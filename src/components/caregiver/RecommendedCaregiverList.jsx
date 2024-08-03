import React, { useEffect, useState } from "react";
import styles from "./RecommendedCaregiverList.module.css";
import star from "../../img/Star 4.png"; // 별 이미지 import
import { useRecoilState } from "recoil";
import { patientEmbedingRequestData } from "../../state/atoms";
import {
  embeddingResponse,
  esResponse,
  getCaregiversByIds,
  careReservationRequestAPI,
} from "../../util/api";
import { useNavigate } from "react-router-dom";
import Loading from "../../pages/Loading";

export default function RecommendedCaregiverList() {
  const [patientEmbedingRequestDataState, setPatientEmbedingRequestDataState] =
    useRecoilState(patientEmbedingRequestData);
  const [caregivers, setCaregivers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const nav = useNavigate();

  const renderStars = (num) =>{
    return star*num
  }

  useEffect(() => {
    const fetchCaregivers = async () => {
      try {
        const embeddedVector = await embeddingResponse(
          patientEmbedingRequestDataState.diseaseName,
          patientEmbedingRequestDataState.reservationReason
        );
        const caregiverIds = await esResponse(embeddedVector);
        console.log("caregiverIds:", caregiverIds);

        if (!Array.isArray(caregiverIds)) {
          throw new Error("Invalid response structure from esResponse");
        }

        const caregiversData = await getCaregiversByIds(caregiverIds);
        setCaregivers(caregiversData);
      } catch (error) {
        setError("Failed to fetch caregivers");
        console.error("Error fetching caregivers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCaregivers();
  }, [patientEmbedingRequestDataState]);

  const handleRequestClick = async (caregiverId) => {
    setPatientEmbedingRequestDataState({
      ...patientEmbedingRequestDataState,
      caregiverId: caregiverId,
    });
    
    nav("/profile"); // 성공 페이지로 이동하는 예시
  };

  const getRepresentativeWorkHistory = (workHistories) => {
    if (!workHistories || workHistories.length === 0) return "정보 없음";

    // 최신 경력 가져오기
    const latestWorkHistory = workHistories.reduce((latest, current) => {
      const latestDate = new Date(latest.workHistoryPeriod.split(" ~ ")[1]);
      const currentDate = new Date(current.workHistoryPeriod.split(" ~ ")[1]);
      return latestDate > currentDate ? latest : current;
    });

    return `${latestWorkHistory.workHistory} (${latestWorkHistory.workHistoryPeriod})`;
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error}</div>;
  }

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
          <h4 className={styles.experience}>대표 이력</h4>
          <h4 className={styles.careRating}>간병 평점</h4>
        </div>
        <div className={styles.caregiverList}>
          {caregivers.map((caregiver, index) => (
            <div key={index} className={styles.caregiverCard}>
              <img
                src="data:image/jpeg;base64,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"
                alt={caregiver.name}
                className={styles.profilePhoto}
              />
              <div className={styles.caregiverInfo}>
                <div className={styles.caregiverDetails}>
                  <h3>{caregiver.name}</h3>
                  <p>
                    {" "}
                    {caregiver.birthDate
                      ? new Date().getFullYear() -
                        new Date(caregiver.birthDate).getFullYear()
                      : "정보 없음"}
                    년 ・{caregiver.city || "정보 없음"}
                  </p>
                </div>
                <div className={styles.introduction}>
                  <p>
                    ・{" "}
                    {getRepresentativeWorkHistory(
                      caregiver.caregiverWorkHistories
                    )}
                  </p>
                </div>
                <p className={styles.starContainer}>
                  {caregiver.averageRating
                    ? renderStars(caregiver.averageRating)
                    : "정보 없음"}
                </p>
              </div>
              <button
                className={styles.requestButton}
                onClick={() => handleRequestClick(caregiver.id)}
              >
                간병 요청하기
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
