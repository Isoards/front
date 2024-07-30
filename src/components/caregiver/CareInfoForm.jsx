import React, { useState } from "react";
import DaumPost from "../DaumPost";
import TabButton from "../TabButton";
import styles from "./CareInfoForm.module.css";
import Modal from "../Modal";
import DiseaseName from "../DiseaseName";
import { useRecoilState } from "recoil";
import { careReservationRequest } from "../../state/atoms";


export default function CareInfoForm({ setStep }) {
  const [careReservationRequestState, setCareReservationRequestState] = useRecoilState(careReservationRequest)

  const [showModal, setShowModal] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCareReservationRequestState({
      ...careReservationRequestState,
      [name]: value,
    });
  };

  const handleSelectDisease = (diagnosis) => {
    setCareReservationRequestState({
      ...careReservationRequestState,
      diseaseName: diagnosis,
    });
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(true);
  };

  return (
    <div className={styles.formSection}>
      <div className={styles.headerContainer}>
        <h2 className={styles.headerTitle}>간병 정보 입력</h2>
        <div className={styles.steps}>
          <span className={styles.step}>1</span>
          <span className={styles.onStep}>2</span>
          <span className={styles.step}>3</span>
          <span className={styles.step}>4</span>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.reason}>
          <label>
            진단명<span>*</span>
          </label>
          <input
            type="text"
            name="diseaseName"
            placeholder="진단명을 입력해주세요."
            value={careReservationRequestState.diseaseName}
            onChange={handleChange}
            onClick={() => setShowModal(true)}
          />
          <h5>
            <input
              type="checkbox"
              name="noCondition"
              onChange={() =>
                setCareReservationRequestState({ ...careReservationRequestState, reservationReason: "" })
              }
            />
            현재 진단명이 없습니다.
          </h5>
        </div>
        <div className={styles.location}>
          <label>
            간병 장소<span>*</span>
          </label>
          <DaumPost />
          <input
            type="text"
            name="reservationLocation"
            placeholder="주소를 입력해주세요."
            value={careReservationRequestState.reservationLocation}
            onChange={handleChange}
          />
          <input
            type="text"
            name="locationDetail"
            placeholder="상세주소를 입력해주세요."
            onChange={handleChange}
          />
        </div>
        <div className={styles.date}>
          <label>
            간병 기간<span>*</span>
          </label>
          <input
            type="date"
            name="startDate"
            value={careReservationRequestState.startDate}
            onChange={handleChange}
          />
          <span> ~ </span>
          <input
            type="date"
            name="endDate"
            value={careReservationRequestState.endDate}
            onChange={handleChange}
          />
        </div>
        <div className={styles.time}>
          <label>
            간병 시간<span>*</span>
          </label>
          <input
            type="time"
            name="dailyStartTime"
            value={careReservationRequestState.dailyStartTime}
            onChange={handleChange}
          />
          <span> ~ </span>
          <input
            type="time"
            name="dailyEndTime"
            value={careReservationRequestState.dailyEndTime}
            onChange={handleChange}
          />
        </div>
        <h5>
          <input type="checkbox" name="includeWeekends" />
          주말 포함
        </h5>
        <div className={styles.formNavigation}>
          <TabButton onSelect={() => setStep(false)}>이전</TabButton>
          <TabButton>다음</TabButton>
        </div>
      </form>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <DiseaseName onSelect={handleSelectDisease} />
      </Modal>
    </div>
  );
}
