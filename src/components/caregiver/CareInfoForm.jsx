import React, { useState } from "react";
import DaumPost from "../DaumPost";
import TabButton from "../TabButton";

export default function CareInfoForm({ data }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCareInfo({
      ...data,
      [name]: value,
    });
  };

  const isVaild = data.reservationReason && data.reservationLocation;

  return (
    <div className="form-section">
      <h2>간병 정보 입력</h2>
      <div className="form-group">
        <label>
          진단명<span>*</span>
        </label>
        <input
          type="text"
          name="condition"
          placeholder="진단명을 입력해주세요."
          value={data.reservationReason}
          onChange={handleChange}
        />
        <label>
          <input
            type="checkbox"
            name="noCondition"
            value={(data.reservationReason = 0)}
            onChange={handleChange}
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
          name="location"
          placeholder="주소를 입력해주세요."
          value={data.reservationLocation}
          onChange={handleChange}
        />
        <input
          type="text"
          name="locationDetail"
          placeholder="상세주소를 입력해주세요."
        />
      </div>
      <div className="form-group">
        <label>
          간병 기간<span>*</span>
        </label>
        <input
          type="date"
          name="startDate"
          value={data.startDate}
          onChange={handleChange}
        />
        <span> ~ </span>
        <input
          type="date"
          name="endDate"
          value={data.endDate}
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
        <input type="time" name="startTime" value={data.dailyStartTime} />
        <span> ~ </span>
        <input type="time" name="endTime" value={data.dailyEndTime} />
      </div>
      <div className="form-navigation">
        <TabButton>이전</TabButton>
        <TabButton>다음</TabButton>
      </div>
    </div>
  );
}
