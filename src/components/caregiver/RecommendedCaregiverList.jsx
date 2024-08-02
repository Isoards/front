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
  const [patientEmbedingRequestDataState] = useRecoilState(
    patientEmbedingRequestData
  );
  const [caregivers, setCaregivers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const nav = useNavigate();
  useEffect(() => {
    const fetchCaregivers = async () => {
      try {
        // const embeddedVector = await embeddingResponse(
        //   patientEmbedingRequestDataState.diseaseName,
        //   patientEmbedingRequestDataState.reservationReason
        // );
        // const caregiverIds = await esResponse(embeddedVector);
        // console.log('caregiverIds:', caregiverIds);

        // if (!Array.isArray(caregiverIds)) {
        //   throw new Error('Invalid response structure from esResponse');
        // }

        const caregiversData = [
          {
            id: 50,
            email: null,
            password: null,
            name: "야나두",
            phone: "010213123",
            gender: "남성",
            birthDate: "2024-07-18",
            address: null,
            city: null,
            careerDescription: "루게릭병 전문 케어 환자",
            certifications: [],
            careReservations: [
              {
                id: 28,
                startDate: null,
                endDate: null,
                dailyStartTime: null,
                dailyEndTime: null,
                reservationReason: "치매",
                reservationLocation: null,
                diseaseName: "알츠하이머",
                caregiverResponse: {
                  id: 50,
                  email: null,
                  password: null,
                  name: "야나두",
                  phone: null,
                  gender: null,
                  birthDate: null,
                  address: null,
                  city: null,
                  careerDescription: null,
                  certifications: null,
                  careReservations: null,
                  caregiverWorkHistories: null,
                  averageRating: null,
                },
                userResponse: {
                  id: 6,
                  email: null,
                  password: null,
                  name: "adsf@asdf.com",
                  phone: "adsf@asdf.com",
                  gender: null,
                  birthDate: null,
                  address: null,
                  city: null,
                  careReservations: null,
                },
                patientName: null,
                patientGender: null,
                patientBirthDate: null,
                patientHeight: null,
                patientWeight: null,
                state: 2,
                recentDiseaseData: null,
                unAcceptedBehavior: "",
              },
              {
                id: 29,
                startDate: "2024-08-17",
                endDate: "2024-09-07",
                dailyStartTime: "13:38:00",
                dailyEndTime: "13:37:00",
                reservationReason: "치매",
                reservationLocation: "asef@asdf.com",
                diseaseName: "알츠하이머",
                caregiverResponse: {
                  id: 50,
                  email: null,
                  password: null,
                  name: "야나두",
                  phone: null,
                  gender: null,
                  birthDate: null,
                  address: null,
                  city: null,
                  careerDescription: null,
                  certifications: null,
                  careReservations: null,
                  caregiverWorkHistories: null,
                  averageRating: null,
                },
                userResponse: {
                  id: 10,
                  email: null,
                  password: null,
                  name: "이수근",
                  phone: "12321321",
                  gender: null,
                  birthDate: null,
                  address: null,
                  city: null,
                  careReservations: null,
                },
                patientName: "asef@asdf.com",
                patientGender: "남성",
                patientBirthDate: "2024-08-21",
                patientHeight: "123",
                patientWeight: "123",
                state: 4,
                recentDiseaseData: null,
                unAcceptedBehavior: "",
              },
              {
                id: 32,
                startDate: null,
                endDate: null,
                dailyStartTime: null,
                dailyEndTime: null,
                reservationReason: "",
                reservationLocation: "",
                diseaseName: "",
                caregiverResponse: {
                  id: 50,
                  email: null,
                  password: null,
                  name: "야나두",
                  phone: null,
                  gender: null,
                  birthDate: null,
                  address: null,
                  city: null,
                  careerDescription: null,
                  certifications: null,
                  careReservations: null,
                  caregiverWorkHistories: null,
                  averageRating: null,
                },
                userResponse: {
                  id: 12,
                  email: null,
                  password: null,
                  name: "이도경",
                  phone: "21323234",
                  gender: null,
                  birthDate: null,
                  address: null,
                  city: null,
                  careReservations: null,
                },
                patientName: "이상혁",
                patientGender: "남성",
                patientBirthDate: "2024-08-22",
                patientHeight: "21",
                patientWeight: "12",
                state: 4,
                recentDiseaseData: null,
                unAcceptedBehavior: "",
              },
            ],
            caregiverWorkHistories: [
              {
                id: 6,
                caregiver: null,
                workHistory: "서울병원 정신병동",
                workHistoryPeriod: "2024년 7월 20일 ~ 2024년 7월 26일",
              },
              {
                id: 7,
                caregiver: null,
                workHistory: "마산병원 기합병동",
                workHistoryPeriod: "2024년 7월 9일 ~ 2024년 8월 3일",
              },
            ],
            averageRating: 0.6923076923076923,
          },
          {
            id: 51,
            email: null,
            password: null,
            name: "박명수",
            phone: "01052528448",
            gender: "남성",
            birthDate: "2024-07-26",
            address: null,
            city: null,
            careerDescription: "정신신경계 질환 전문 커리어를 보유 중입니다",
            certifications: [],
            careReservations: [
              {
                id: 30,
                startDate: "2024-08-14",
                endDate: "2024-08-31",
                dailyStartTime: "18:23:00",
                dailyEndTime: "18:24:00",
                reservationReason: "이 새키는 정신이 왔다갔다 하는 개쉑히야",
                reservationLocation: "인천 청라신도시",
                diseaseName: "조현병",
                caregiverResponse: {
                  id: 51,
                  email: null,
                  password: null,
                  name: "박명수",
                  phone: null,
                  gender: null,
                  birthDate: null,
                  address: null,
                  city: null,
                  careerDescription: null,
                  certifications: null,
                  careReservations: null,
                  caregiverWorkHistories: null,
                  averageRating: null,
                },
                userResponse: {
                  id: 10,
                  email: null,
                  password: null,
                  name: "이수근",
                  phone: "12321321",
                  gender: null,
                  birthDate: null,
                  address: null,
                  city: null,
                  careReservations: null,
                },
                patientName: "민정연",
                patientGender: "여성",
                patientBirthDate: "1998-02-18",
                patientHeight: "158",
                patientWeight: "48",
                state: 2,
                recentDiseaseData: null,
                unAcceptedBehavior: "",
              },
              {
                id: 31,
                startDate: "2024-08-11",
                endDate: "2024-08-30",
                dailyStartTime: "19:10:00",
                dailyEndTime: "19:11:00",
                reservationReason: "이 새키 정신 오락가락함",
                reservationLocation: "인천 청라국제도시",
                diseaseName: "조현병",
                caregiverResponse: {
                  id: 51,
                  email: null,
                  password: null,
                  name: "박명수",
                  phone: null,
                  gender: null,
                  birthDate: null,
                  address: null,
                  city: null,
                  careerDescription: null,
                  certifications: null,
                  careReservations: null,
                  caregiverWorkHistories: null,
                  averageRating: null,
                },
                userResponse: {
                  id: 11,
                  email: null,
                  password: null,
                  name: "강한남자 박강식",
                  phone: "0101234568",
                  gender: null,
                  birthDate: null,
                  address: null,
                  city: null,
                  careReservations: null,
                },
                patientName: "민정연",
                patientGender: "여성",
                patientBirthDate: "1998-02-17",
                patientHeight: "158",
                patientWeight: "48",
                state: 1,
                recentDiseaseData: null,
                unAcceptedBehavior: "",
              },
              {
                id: 33,
                startDate: "2024-08-03",
                endDate: "2024-08-24",
                dailyStartTime: "20:10:00",
                dailyEndTime: "20:11:00",
                reservationReason: "sad",
                reservationLocation: "sad",
                diseaseName: "알츠하이머",
                caregiverResponse: {
                  id: 51,
                  email: null,
                  password: null,
                  name: "박명수",
                  phone: null,
                  gender: null,
                  birthDate: null,
                  address: null,
                  city: null,
                  careerDescription: null,
                  certifications: null,
                  careReservations: null,
                  caregiverWorkHistories: null,
                  averageRating: null,
                },
                userResponse: {
                  id: 12,
                  email: null,
                  password: null,
                  name: "이도경",
                  phone: "21323234",
                  gender: null,
                  birthDate: null,
                  address: null,
                  city: null,
                  careReservations: null,
                },
                patientName: "sdfa",
                patientGender: "남성",
                patientBirthDate: "2024-08-16",
                patientHeight: "21",
                patientWeight: "12",
                state: 1,
                recentDiseaseData: null,
                unAcceptedBehavior: "",
              },
            ],
            caregiverWorkHistories: [
              {
                id: 8,
                caregiver: null,
                workHistory: "서울병원정신병동",
                workHistoryPeriod: "2024년 7월 10일 ~ 2024년 8월 9일",
              },
            ],
            averageRating: 0.0,
          },
          {
            id: 52,
            email: null,
            password: null,
            name: "오태식",
            phone: "2323r23432",
            gender: "남성",
            birthDate: "2024-08-24",
            address: null,
            city: null,
            careerDescription: "사지마비환자 전문 케어",
            certifications: [],
            careReservations: [],
            caregiverWorkHistories: [
              {
                id: 9,
                caregiver: null,
                workHistory: "오송병원기합동",
                workHistoryPeriod: "2024년 8월 11일 ~ 2024년 9월 7일",
              },
              {
                id: 10,
                caregiver: null,
                workHistory: "남송병원짜세동",
                workHistoryPeriod: "2024년 8월 13일 ~ 2024년 9월 7일",
              },
            ],
            averageRating: 4,
          },
          {
            id: 53,
            email: null,
            password: null,
            name: "asdfsdf@asfd.com",
            phone: "123132",
            gender: "남성",
            birthDate: "2024-07-29",
            address: null,
            city: null,
            careerDescription: "ads",
            certifications: [],
            careReservations: [],
            caregiverWorkHistories: [
              {
                id: 11,
                caregiver: null,
                workHistory: "dsaf",
                workHistoryPeriod: "2024년 8월 14일 ~ 2024년 8월 17일",
              },
            ],
            averageRating: 0.0,
          },
        ];
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
      nav("/mypage"); // 성공 페이지로 이동하는 예시
    } catch (error) {
      console.error("Failed to request caregiver reservation:", error);
      // 오류 처리 로직을 여기에 작성합니다.
    }
  };

  const getRepresentativeWorkHistory = (workHistories) => {
    if (!workHistories || workHistories.length === 0) return "정보 없음";

    // 최신 경력 가져오기
    const latestWorkHistory = workHistories.reduce((latest, current) => {
      const latestDate = new Date(latest.workHistoryPeriod.split(" ~ ")[1]);
      const currentDate = new Date(current.workHistoryPeriod.split(" ~ ")[1]);
      return latestDate > currentDate ? latest : current;
    });

    return `${latestWorkHistory.workHistory}\n
    (${latestWorkHistory.workHistoryPeriod})`;
  };

  const renderStars = (rating) => {
    const roundedRating = Math.round(rating);
    return Array(roundedRating)
      .fill()
      .map((_, index) => <img key={index} src={star} alt="star" />);
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
                src="placeholder.jpg"
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
