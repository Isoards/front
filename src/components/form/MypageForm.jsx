import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "./MypageForm.module.css";
import {
  getUserById,
  getCaregiverById,
  reservationToAll,
  createReview,
  getReviewsByCaregiverId,
} from "../../util/api";
import Loading from "../../pages/Loading";
import editIcon from "../../img/mode_edit_outline.png";

export default function MypageForm() {
  const [userData, setUserData] = useState(null);
  const [reservations, setReservations] = useState([]);
  const [caregiverDetails, setCaregiverDetails] = useState({});
  const [reviewData, setReviewData] = useState({ rating: 0, comment: "" });
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const userId = parseInt(localStorage.getItem("userId"));

    const fetchUserData = async () => {
      try {
        const response = await getUserById(userId);
        if (
          response.data.status === "SUCCESS" &&
          response.data.data.content.length > 0
        ) {
          const content = response.data.data.content[0];
          setUserData(content.userResponse);
          setReservations([content]);

          if (content.caregiverResponse && content.caregiverResponse.id) {
            fetchCaregiverDetails(content.caregiverResponse.id);
            fetchReviews(content.caregiverResponse.id);
          }
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const fetchCaregiverDetails = async (caregiverId) => {
    try {
      const response = await getCaregiverById(caregiverId);
      if (response.data.status === "SUCCESS") {
        setCaregiverDetails((prevDetails) => ({
          ...prevDetails,
          [caregiverId]: response.data.data,
        }));
      }
    } catch (error) {
      console.error("Failed to fetch caregiver details:", error);
    }
  };

  const fetchReviews = async (caregiverId) => {
    try {
      const response = await getReviewsByCaregiverId(caregiverId);
      if (response.data.status === "SUCCESS") {
        setReviews(response.data.data.content);
      }
    } catch (error) {
      console.error("Failed to fetch reviews:", error);
    }
  };

  const handleReservationToAll = async (reservationId) => {
    const caregiverId = reservations[0].caregiverResponse?.id;
    const requestPayload = {
      caregiverId,
      reservationId,
    };
    try {
      await reservationToAll(requestPayload);
      console.log("success");
      // Refresh reservations after request
      // You might want to implement a function to refresh reservations here
    } catch (error) {
      console.error("Failed to request all caregivers:", error);
    }
  };

  const handleReviewSubmit = async (caregiverId) => {
    try {
      await createReview({
        userId: userData.id,
        caregiverId,
        rating: reviewData.rating,
        comment: reviewData.comment,
      });
      setReviewData({ rating: 0, comment: "" });
      fetchReviews(caregiverId); // Refresh reviews after submission
    } catch (error) {
      console.error("Failed to submit review:", error);
    }
  };

  const getReservationStatus = (state) => {
    switch (state) {
      case 1:
        return "수락 대기 중";
      case 2:
        return "예약 완료";
      case 3:
        return "예약 거절";
      case 4:
        return "전체 간병인 요청 중";
      default:
        return "상태 미정";
    }
  };

  if (!userData || reservations.length === 0) {
    return <Loading />;
  }

  return (
    <div className={styles.container}>
      <form className={styles.mypage}>
        <div className={styles.profileHeader}>
          <h2>안녕하세요, {userData.name}님 :)</h2>
          <button>회원탈퇴</button>
        </div>
        <div className={styles.section}>
          <div className={styles.profileSection}>
            <div className={styles.profileInfo}>
              <div className={styles.section}>
                <div className={styles.section}>
                  <h2>
                    {userData.name}{" "}
                    <button className={styles.editButton}>
                      <img src={editIcon} alt="Edit" />
                    </button>
                  </h2>
                </div>
                <button className={styles.logoutButton}>로그아웃</button>
              </div>{" "}
              <div className={styles.infoSection}>
                <p>
                  <span>전화번호</span> {userData.phone || "정보 없음"}
                </p>
                <p>
                  <span>주소</span> {userData.address || "정보 없음"}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.paymentSection}>
            <div className={styles.sectionTitle}>결제 정보</div>
            <div className={styles.paymentInfo}>
              <p>국민카드</p>
              <p>0000 0000 0000 1234</p>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.matchSection}>
            <NavLink to="/matching" className={styles.sectionTitle}>
              간병 매칭 정보
            </NavLink>
            <div className={styles.patientCaregiver}>
              {reservations.map((reservation, index) => {
                const caregiver =
                  caregiverDetails[reservation.caregiverResponse?.id];
                return (
                  <div key={index} className={styles.reservationCard}>
                    <div className={styles.patientCaregiver}>
                      <div className={styles.infoBox}>
                        <label className={styles.label}>환자</label>
                        <div className={styles.box}>
                          <h3>
                            {reservation.patientName || "정보 없음"} /{" "}
                            {reservation.diseaseName || "정보 없음"}
                          </h3>
                          <p>
                            {reservation.patientBirthDate || "정보 없음"} /{" "}
                            {reservation.patientGender || "정보 없음"}
                          </p>
                        </div>
                      </div>
                      <div className={styles.infoBox}>
                        <label className={styles.label}>간병인</label>
                        <div className={styles.box}>
                          <h3>{caregiver?.name || "정보 없음"}</h3>
                          <p>
                            {caregiver?.careerDescription || "정보 없음"} ・
                            {caregiver?.city || "정보 없음"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className={styles.flexRow}>
                        <p>
                          <span>간병 기간</span>{" "}
                          {reservation.startDate || "정보 없음"} ~{" "}
                          {reservation.endDate || "정보 없음"}
                        </p>
                        <p>
                          <span>간병 시간</span>{" "}
                          {reservation.dailyStartTime || "정보 없음"} ~{" "}
                          {reservation.dailyEndTime || "정보 없음"}
                        </p>
                      </div>
                      <div className={styles.flexRow}>
                        <p>
                          <span>장소</span>{" "}
                          {reservation.reservationLocation || "정보 없음"}
                        </p>
                        <p>
                          <span>상태</span>{" "}
                          {getReservationStatus(reservation.state)}
                        </p>
                      </div>
                      {reservation.state === 1 && (
                        <button
                          onClick={() => handleReservationToAll(reservation.id)}
                        >
                          전체 간병인에게 요청
                        </button>
                      )}
                      {caregiver && caregiver.caregiverWorkHistories && (
                        <div>
                          <h4>경력 사항:</h4>
                          <ul>
                            {caregiver.caregiverWorkHistories.map(
                              (history, idx) => (
                                <li key={idx}>
                                  {history.workHistory} -{" "}
                                  {history.workHistoryPeriod}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.historySection}>
            <div className={styles.sectionTitle}>간병 신청 이력</div>
            <div className={styles.historyInfo}>
              {reservations.map((reservation, index) => (
                <p key={index}>
                  {reservation.diseaseName} 환자{" "}
                  {reservation.patientName || "정보 없음"} → 간병인{" "}
                  {reservation.caregiverResponse?.name || "정보 없음"}
                  {"                                        "}
                  {reservation.startDate || "정보 없음"}
                </p>
              ))}
            </div>

            <div className={styles.sectionTitle}>리뷰 작성</div>
            <div className={styles.reviewForm}>
              <select
                value={reviewData.rating}
                onChange={(e) =>
                  setReviewData({
                    ...reviewData,
                    rating: parseInt(e.target.value),
                  })
                }
              >
                <option value="0">평점 선택</option>
                <option value="1">1점</option>
                <option value="2">2점</option>
                <option value="3">3점</option>
                <option value="4">4점</option>
                <option value="5">5점</option>
              </select>
              <textarea
                value={reviewData.comment}
                onChange={(e) =>
                  setReviewData({ ...reviewData, comment: e.target.value })
                }
                placeholder="리뷰를 작성해주세요"
              />
              <button
                type="button"
                onClick={() =>
                  handleReviewSubmit(reservations[0].caregiverResponse?.id)
                }
              >
                리뷰 제출
              </button>
            </div>

            <div className={styles.sectionTitle}>간병인 리뷰</div>
            <div className={styles.reviews}>
              {reviews.length === 0 ? (
                <p>리뷰가 없습니다.</p>
              ) : (
                reviews.map((review) => (
                  <div key={review.id} className={styles.review}>
                    <p>평점: {review.rating}</p>
                    <p>댓글: {review.comment}</p>
                    <p>
                      작성일: {new Date(review.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
