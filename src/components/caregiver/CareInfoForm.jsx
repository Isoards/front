import React, { useState } from "react";
import DaumPost from "../DaumPost";
import TabButton from "../TabButton";

export default function CareInfoForm() {
  const [formData, setFormData] = useState({
    reservationReason: "",
    reservationLocation: "",
    startDate: "",
    endDate: "",
    dailyStartTime: "",
    dailyEndTime: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="form-section">
      <h2>간병 정보 입력</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            진단명<span>*</span>
          </label>
          <input
            type="text"
            name="reservationReason"
            placeholder="진단명을 입력해주세요."
            value={formData.reservationReason}
            onChange={handleChange}
          />
          <label>
            <input
              type="checkbox"
              name="noCondition"
              onChange={() =>
                setFormData({ ...formData, reservationReason: "" })
              }
            />
            현재 진단명이 없습니다.
          </label>
        </div>
        <div className="form-group">
          <label>
            간병 장소<span>*</span>
          </label>
          <DaumPost />
          <input
            type="text"
            name="reservationLocation"
            placeholder="주소를 입력해주세요."
            value={formData.reservationLocation}
            onChange={handleChange}
          />
          <input
            type="text"
            name="locationDetail"
            placeholder="상세주소를 입력해주세요."
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>
            간병 기간<span>*</span>
          </label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
          <span> ~ </span>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
          />
          <label>
            <input type="checkbox" name="includeWeekends" />
            주말 포함
          </label>
        </div>
        <div className="form-group">
          <label>
            간병 시간<span>*</span>
          </label>
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
        <div className="form-navigation">
          <TabButton>이전</TabButton>
          <TabButton>다음</TabButton>
        </div>
      </form>
    </div>
  );
}
