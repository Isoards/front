import React, { useEffect, useState } from "react";
import styles from "./MatchingForm.module.css";
import { useRecoilState } from "recoil";
import { reservationId } from "../../state/atoms";
import { getReservationById } from "../../util/api"; // API 요청 함수 임포트

export default function MatchingForm() {
  const [reservationIdState] = useRecoilState(reservationId);
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReservationData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getReservationById(reservationIdState);
        console.log("API Response: ", response); // 응답 데이터 콘솔에 출력

        if (response.status === "SUCCESS") {
          const data = response.data;
          const formattedData = {
            period: `${data.startDate || "N/A"} ~ ${data.endDate || "N/A"}`,
            time: `${data.dailyStartTime || "N/A"} ~ ${data.dailyEndTime || "N/A"}`,
            location: data.reservationLocation || "N/A",
            patient: {
              name: data.patientName || "N/A",
              disease: data.diseaseName || "N/A",
              birthDate: data.patientBirthDate || "N/A",
              gender: data.patientGender || "N/A",
            },
            caregiver: {
              name: data.caregiverResponse?.name || "N/A",
              license: "간호사 면허", // 예시 라이선스
              experience: "8개월", // 예시 경력
              location: data.caregiverResponse?.city || "N/A",
            },
            contract: "2000.00.00_홍길동,김정희_간병계약서.pdf", // 예시 계약서
            payment: "500,000원 결제 완료 카드결제(신한) / 무이자 할부 2개월", // 예시 결제 정보
          };
          setFormData(formattedData);
        } else {
          setError("데이터를 불러오는 데 실패했습니다.");
        }
      } catch (error) {
        setError("네트워크 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchReservationData();
  }, [reservationIdState]);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!formData) {
    return <div>데이터가 없습니다.</div>;
  }

  return (
    <div className={styles.formSection}>
      <h2 className={styles.title}>간병 매칭 정보</h2>
      <div className={styles.formGroup}>
        <div>
          <label className={styles.label}>간병 기간</label>
          <span className={styles.value}>{formData.period}</span>
        </div>
        <div>
          <label className={styles.label}>간병 시간</label>
          <span className={styles.value}>{formData.time}</span>
        </div>
      </div>
      <div className={styles.infoSection}>
        <label className={styles.label}>간병 장소</label>
        <span className={styles.value}>{formData.location}</span>
      </div>
      <div className={styles.infoSection}>
        <div className={styles.patientCaregiver}>
          <div className={styles.infoBox}>
            <label className={styles.label}>환자</label>
            <div className={styles.box}>
              <h3>
                {formData.patient.name} / {formData.patient.disease}
              </h3>
              <p>
                {formData.patient.birthDate} / {formData.patient.gender}
              </p>
            </div>
          </div>
          <div className={styles.infoBox}>
            <label className={styles.label}>간병인</label>
            <div className={styles.box}>
              <h3>{formData.caregiver.name}</h3>
              <p>
                {formData.caregiver.license} / {formData.caregiver.experience} /{" "}
                {formData.caregiver.location}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.infoSection}>
        <label className={styles.label}>간병인 계약서</label>
        <div className={styles.section}>
          <span className={styles.value}>{formData.contract}</span>
          <button className={styles.button}>계약서 확인</button>
        </div>
      </div>
      <div className={styles.infoSection}>
        <label className={styles.label}>결제 정보</label>
        <div className={styles.section}>
          <span className={styles.value}>{formData.payment}</span>
          <button className={styles.button}>결제 내역 확인</button>
        </div>
      </div>
    </div>
  );
}
