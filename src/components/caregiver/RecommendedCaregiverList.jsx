import React, { useEffect, useState } from "react";
import styles from "./RecommendedCaregiverList.module.css";
import { useRecoilState } from "recoil";
import { patientEmbedingRequestData } from "../../state/atoms";
import { embeddingResponse, esResponse, getCaregiversByIds, careReservationRequestAPI } from "../../util/api";
import { useNavigate } from "react-router-dom";

export default function RecommendedCaregiverList() {
  const [patientEmbedingRequestDataState, setPatientEmbedingRequestDataState] = useRecoilState(patientEmbedingRequestData);
  const [caregivers, setCaregivers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const nav = useNavigate();

  useEffect(() => {
    const fetchCaregivers = async () => {
      try {
        const embeddedVector = await embeddingResponse(
          patientEmbedingRequestDataState.diseaseName,
          patientEmbedingRequestDataState.reservationReason
        );
        const caregiverIds = await esResponse(embeddedVector);
        console.log('caregiverIds:', caregiverIds);

        if (!Array.isArray(caregiverIds)) {
          throw new Error('Invalid response structure from esResponse');
        }

        const caregiversData = await getCaregiversByIds(caregiverIds);
        setCaregivers(caregiversData);
      } catch (error) {
        setError('Failed to fetch caregivers');
        console.error('Error fetching caregivers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCaregivers();
  }, [patientEmbedingRequestDataState]);

  const handleRequestClick = async (caregiverId) => {
    setPatientEmbedingRequestDataState({...patientEmbedingRequestDataState,"caregiverId":caregiverId})
    nav("/profile"); // 성공 페이지로 이동하는 예시
  };

  const getRepresentativeWorkHistory = (workHistories) => {
    if (!workHistories || workHistories.length === 0) return '정보 없음';

    // 최신 경력 가져오기
    const latestWorkHistory = workHistories.reduce((latest, current) => {
      const latestDate = new Date(latest.workHistoryPeriod.split(' ~ ')[1]);
      const currentDate = new Date(current.workHistoryPeriod.split(' ~ ')[1]);
      return latestDate > currentDate ? latest : current;
    });

    return `${latestWorkHistory.workHistory} (${latestWorkHistory.workHistoryPeriod})`;
  };

  if (loading) {
    return <div>Loading...</div>;
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
          <h4>대표 이력</h4>
          <h4>간병 평점</h4>
        </div>
        <div className={styles.caregiverList}>
          {caregivers.map((caregiver, index) => (
            <div key={index} className={styles.caregiverCard}>
              <img
                src="placeholder.jpg"
                alt={caregiver.name}
                className={styles.profilePhoto}
              />
              <div className={styles.caregiverInfo}>
                <div className={styles.caregiverDetails}>
                  <h3>{caregiver.name}</h3>
                  <p>경력: {caregiver.birthDate ? new Date().getFullYear() - new Date(caregiver.birthDate).getFullYear() : '정보 없음'}년</p>
                  <p>지역: {caregiver.city || '정보 없음'}</p>
                </div>
                <p>대표이력 : {getRepresentativeWorkHistory(caregiver.caregiverWorkHistories)}</p>
                <p>평점: {caregiver.averageRating ? caregiver.averageRating.toFixed(1) : '정보 없음'}</p>
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
