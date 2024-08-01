import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FindWork.module.css";
import photo from "../../img/photo1.png";

const patients = [
  {
    id: 1,
    name: "김철수",
    gender: "남성",
    age: "78",
    disease: "알츠하이머",
    period: "24.01.01 ~ 24.07.01",
    location: "자택 (서울시 강남구 대치동)",
    request:
      "매일 오전 10시에 30분 동안 산책을 도와주시고, 산책 후에는 간단한 스트레칭 부탁드려요. 점심과 저녁 식사 준비 및 보조를 부탁드리며, 식사 후에는 설거지와 주방 정리를 맡아주세요. 매일 저녁 8시에 약물 복용을 확인하고, 취침 전에 간단한 대화를 통해 하루 일과를 정리할 수 있도록 도와주세요.",
  },
  {
    id: 2,
    name: "김철수",
    gender: "남성",
    age: "78",
    disease: "알츠하이머",
    period: "24.01.01 ~ 24.07.01",
    location: "자택 (서울시 강남구 대치동)",
    request:
      "매일 오전 10시에 30분 동안 산책을 도와주시고, 산책 후에는 간단한 스트레칭 부탁드려요. 점심과 저녁 식사 준비 및 보조를 부탁드리며, 식사 후에는 설거지와 주방 정리를 맡아주세요. 매일 저녁 8시에 약물 복용을 확인하고, 취침 전에 간단한 대화를 통해 하루 일과를 정리할 수 있도록 도와주세요.",
  },
  // 추가 환자 정보...
];

export default function FindWork() {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (patient) => {
    setSelectedPatient(patient);
  };

  const handleConfirm = () => {
    if (selectedPatient) {
      navigate(`/profile/${selectedPatient.id}`);
    }
  };

  return (
    <div className={styles.recommendedCaregiverList}>
      <div className={styles.textSection}>
        <h2>일감 찾기</h2>
        <p>
          나의 경력을 살려, 최상의 간병 서비스를 제공할 수 있는 환자들의
          리스트에요.
        </p>
      </div>
      {patients.map((patient) => (
        <button
          key={patient.id}
          className={`${styles.card} ${
            selectedPatient?.id === patient.id ? styles.selected : ""
          }`}
          onClick={() => handleSelect(patient)}
        >
          <div className={styles.info}>
            <h3>
              {patient.name} ({patient.gender}/{patient.age}세)
            </h3>
            <p>병명 | {patient.disease}</p>
            <p>기간 | {patient.period}</p>
            <p>장소 | {patient.location}</p>
          </div>
          <div className={styles.request}>
            <h4>환자 요청사항</h4>
            <p>{patient.request}</p>
          </div>
        </button>
      ))}
      <div className={styles.confirmButton}>
        {selectedPatient && <button onClick={handleConfirm}>선택 완료</button>}
      </div>
    </div>
  );
}
