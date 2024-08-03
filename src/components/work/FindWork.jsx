import React, { useEffect, useState } from "react";
import styles from "./FindWork.module.css";
import Loading from "../../pages/Loading";

import {
  getRequestedReservations,
  acceptReservation,
  denyReservation,
  getAllRequestedReservations,
} from "../../util/api";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { reservationId } from "../../state/atoms";

export default function FindWork() {
  const [reservations, setReservations] = useState([]);
  const [allReservations, setAllReservations] = useState([]);
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const caregiverId = parseInt(localStorage.getItem("caregiverId"), 10);
  const setReservationIdState = useSetRecoilState(reservationId);

  const nav = useNavigate();

  useEffect(() => {
    const fetchReservations = async () => {
      setLoading(true);
      try {
        const [specificResponse, allResponse] = await Promise.all([
          getRequestedReservations(caregiverId),
          getAllRequestedReservations(caregiverId),
        ]);

        if (specificResponse.data.status === "SUCCESS") {
          setReservations(specificResponse.data.data.content);
        } else {
          setError("개인 예약을 불러오는 데 실패했습니다.");
        }

        if (allResponse.data.status === "SUCCESS") {
          setAllReservations(allResponse.data.data.content);
        } else {
          setError("전체 예약을 불러오는 데 실패했습니다.");
        }
      } catch (error) {
        setError("네트워크 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, [caregiverId]);

  const handleAccept = async () => {
    nav(`/patient/${selectedReservation}`);
  };

  const handleDeny = async () => {
    try {
      await denyReservation({ caregiverId, reservationId });
      setReservations((prevReservations) =>
        prevReservations.map((reservation) =>
          reservation.id === reservationId
            ? { ...reservation, state: 3 }
            : reservation
        )
      );
    } catch (error) {
      setError("예약 거절에 실패했습니다.");
    }
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
        <h2>일감 찾기</h2>
        <p>
          나의 경력을 살려, 최상의 간병 서비스를 제공할 수 있는 환자들의
          리스트에요.
        </p>
      </div>

      <div className={styles.section}>
        <h3  className={styles.sectionTitle}>개인 요청된 예약</h3>
        {reservations.length === 0 ? (
          <div className={styles.noReservations}>
            <h2>예약이 없습니다</h2>
            <p>현재 간병인에게 요청된 예약이 없습니다.</p>
          </div>
        ) : (
          reservations.map((reservation) => (
            <button
              key={reservation.id}
              className={styles.card}
              onClick={(e) => {
                e.stopPropagation();
                console.log('Button clicked');
                console.log('Reservation:', reservation);
                setSelectedReservation(reservation.id);
              }}
            >
              <div className={styles.info}>
                <h3>
                  {reservation.patientName} ({reservation.patientGender}/
                  {reservation.patientBirthDate})
                </h3>
                <p>병명 | {reservation.diseaseName}</p>
                <p>
                  기간 | {reservation.startDate} ~ {reservation.endDate}
                </p>
                <p>장소 | {reservation.reservationLocation}</p>
              </div>
              <div className={styles.request}>
                <h4>환자 요청사항</h4>
                <p>{reservation.reservationReason}</p>
              </div>
            </button>
          ))
        )}
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>전체 요청된 예약</h3>
        {allReservations.length === 0 ? (
          <div className={styles.noReservations}>
            <h2>예약이 없습니다</h2>
            <p>모든 간병인에게 요청된 예약이 없습니다.</p>
          </div>
        ) : (
          allReservations.map((reservation) => (
            <button
              key={reservation.id}
              className={styles.card}
              onClick={(e) => {
                e.stopPropagation();
                console.log('Button clicked');
                console.log('Reservation:', reservation);
                setSelectedReservation(reservation.id);
                console.log(selectedReservation)
              }}
            >
              <div className={styles.info}>
                <h3>
                  {reservation.patientName} ({reservation.patientGender}/
                  {reservation.patientBirthDate})
                </h3>
                <p>병명 | {reservation.diseaseName}</p>
                <p>
                  기간 | {reservation.startDate} ~ {reservation.endDate}
                </p>
                <p>장소 | {reservation.reservationLocation}</p>
              </div>
              <div className={styles.request}>
                <h4>환자 요청사항</h4>
                <p>{reservation.reservationReason}</p>
              </div>
            </button>
          ))
        )}
      </div>

      <div className={styles.confirmButton}>
        {selectedReservation && (
          <>
            <button onClick={handleAccept}>허가</button>
            <button onClick={handleDeny}>거절</button>
          </>
        )}
      </div>
    </div>
  );
}
