import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { reservationId } from "../../state/atoms";
import styles from "./PatientInfoForm.module.css";
import { acceptReservation, getReservationById } from "../../util/api";
import Loading from "../../pages/Loading";

export default function PatientInfoForm() {
  const { id } = useParams();
  const reservationState = useRecoilValue(reservationId);
  const [patientInfo, setPatientInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [requestWording, setRequestWording] = useState("간병 수락하기");

  useEffect(() => {
    const fetchPatientInfo = async () => {
      try {
        const reservationIdToUse = id || reservationState.reservationId;
        const response = await getReservationById(reservationIdToUse);

        console.log("Response:", response);

        if (response && response.status === "SUCCESS") {
          setPatientInfo(response.data);
        } else {
          setError("환자 정보를 가져오는데 실패했습니다.");
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setError("환자 정보를 가져오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchPatientInfo();
  }, [id, reservationState.reservationId]);

  const handleAccept = async (reservationId) => {
    const caregiverId = localStorage.getItem("caregiverId");
    try {
      await acceptReservation({ caregiverId, reservationId });
      setRequestWording("간병 수락 완료");
    } catch (error) {
      setError("예약 수락에 실패했습니다.");
    }
  };

  if (loading) return <Loading />;
  if (error) return <div className={styles.container}>{error}</div>;
  if (!patientInfo)
    return <div className={styles.container}>환자 정보가 없습니다.</div>;

  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <h2>환자 정보</h2>
        <p>나의 도움이 필요한 환자분에 대해 자세히 알려드려요</p>
      </div>
      <div className={styles.profileSection}>
        <div className={styles.infoSection}>
          <div className={styles.box}>
            <div className={styles.basicInfo}>
              <p>
                <span className={styles.label}>이름</span>{" "}
                {patientInfo.patientName}
              </p>
              <p>
                <span className={styles.label}>성별</span>{" "}
                {patientInfo.patientGender}
              </p>
              <p>
                <span className={styles.label}>생년월일</span>{" "}
                {patientInfo.patientBirthDate}
              </p>
              <p>
                <span className={styles.label}>병명</span>{" "}
                {patientInfo.diseaseName}
              </p>
              <p>
                <span className={styles.label}>간병 요청 지역</span>{" "}
                {patientInfo.reservationLocation}
              </p>
              <p className={styles.line}></p>
            </div>
            <div className={styles.requestSection}>
              <span>{patientInfo.patientName} 환자님 요청사항</span>
              <p>{patientInfo.reservationReason || "요청사항이 없습니다."}</p>
            </div>
          </div>
          <div className={styles.careInfo}>
            <p>
              <span className={styles.label}>요청 간병 기간</span>{" "}
              {patientInfo.startDate && patientInfo.endDate
                ? `${patientInfo.startDate} ~ ${patientInfo.endDate}`
                : "정보 없음"}
            </p>
            <p>
              <span className={styles.label}>요청 간병 시간</span>{" "}
              {patientInfo.dailyStartTime && patientInfo.dailyEndTime
                ? `${patientInfo.dailyStartTime} ~ ${patientInfo.dailyEndTime}`
                : "정보 없음"}
            </p>
          </div>
          <p className={styles.line}></p>
        </div>
      </div>
      <div className={styles.requestButton}>
        <button onClick={() => handleAccept(id)}>{requestWording}</button>
      </div>
    </div>
  );
}
