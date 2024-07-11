import React from 'react';
import './PatientCondition.css';
import TabButton from '../TabButton.jsx';

export default function PatientCondition () {
  return (
    <div className="patient-condition-location">
      <div className="container">
        <div className="image-section">
          <img />
        </div>
        <div className="form-section">
          <h2>간병 정보 입력</h2>
          <div className="form-group">
            <label>진단명</label>
            <input
              type="text"
              name="condition"
              placeholder="진단명을 입력해주세요."
            />
            <label>
              <input
                type="checkbox"
                name="noCondition"
              />
              현재 진단명이 없습니다.
            </label>
          </div>
          <div className="form-group">
            <label>간병 장소</label>
            <input
              type="text"
              name="location"
              placeholder="주소를 입력해주세요."
            />
            <input
              type="text"
              name="locationDetail"
              placeholder="상세주소를 입력해주세요."
            />
          </div>
          <div className="form-group">
            <label>간병 기간</label>
            <input
              type="date"
              name="startDate"
            />
            <span> ~ </span>
            <input
              type="date"
              name="endDate"
            />
            <label>
              <input
                type="checkbox"
                name="includeWeekends"
              />
              주말 포함
            </label>
          </div>
          <div className="form-group">
            <label>간병 시간</label>
            <input
              type="time"
              name="startTime"
            />
            <span> ~ </span>
            <input
              type="time"
              name="endTime"
            />
          </div>
          <div className="form-navigation">
            <TabButton>이전</TabButton>
            <TabButton>다음</TabButton>
          </div>
        </div>
      </div>
    </div>
  );
};
