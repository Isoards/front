
import React, { useState } from "react";
import styles from "./CareInfoForm.module.css";
import Modal from "../Modal";
import DiseaseName from "../DiseaseName";
import DaumPost from "../DaumPost";
export default function CareInfoForm({ setStep }) {
  const [formData, setFormData] = useState({
    reservationReason: "",
    reservationLocation: "",
    startDate: "",
    endDate: "",
    dailyStartTime: "",
    dailyEndTime: "",
    address: "",
  });

  const [address, setAddress] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectDisease = (diagnosis) => {
    setFormData({
      ...formData,
      reservationReason: diagnosis,
    });
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
            name="reservationReason"
            placeholder="진단명을 입력해주세요."
            value={formData.reservationReason}
            onChange={handleChange}
            onClick={() => setShowModal(true)}
          />
          <h5>
            <input
              type="checkbox"
              name="noCondition"
              onChange={() =>
                setFormData({ ...formData, reservationReason: "" })
              }
            />
            현재 진단명이 없습니다.
          </h5>
        </div>
        <div className={styles.location}>
          <label>
            간병 장소<span>*</span>
          </label>
          <div className={styles.box}>
            <input
              type="text"
              className={styles.address}
              value={address}
              placeholder="주소를 입력해주세요."
              readOnly
            />
            <DaumPost setAddress={setAddress} />
          </div>
          {/* <input
            type="text"
            name="reservationLocation"
            placeholder="주소를 입력해주세요."
            value={formData.reservationLocation}
            onChange={handleChange}
          /> */}
          <input
            type="text"
            name="locationDetail"
            placeholder="상세주소를 입력해주세요."
            onChange={handleChange}
          />
        </div>
        <div className={styles.box}>
          <div className={styles.date}>
            <label>
              간병 기간<span>*</span>
            </label>
            <div className={styles.dateSection}>
              <input
                type="date"
                name="startDate"
                required
                aria-required="true"
                value={formData.startDate}
                onChange={handleChange}
              />
              <span> ~ </span>
              <input
                type="date"
                name="endDate"
                required
                aria-required="true"
                value={formData.endDate}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.time}>
            <label>
              간병 시간<span>*</span>
            </label>
            <div className={styles.timeSection}>
              <input
                type="time"
                name="dailyStartTime"
                value={formData.dailyStartTime}
                onChange={handleChange}
              />
              <span> ~ </span>
              <input
                type="time"
                name="dailyEndTime"
                value={formData.dailyEndTime}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <h5>
          <input type="checkbox" name="includeWeekends" />
          주말 포함
        </h5>
        <div className={styles.formNavigation}>
          <button
            className={styles.previousButton}
            onClick={() => setStep(false)}
          >
            이전
          </button>
          <button className={styles.nextButton}>다음</button>
        </div>
      </form>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <DiseaseName onSelect={handleSelectDisease} />
      </Modal>
    </div>
  );
}
