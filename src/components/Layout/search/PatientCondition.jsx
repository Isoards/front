import React from 'react';
import './PatientCondition.css';

const PatientCondition = ({ formData, handleChange, handleNext, handleBack }) => {
  return (
    <div className="patient-condition-location">
      <div className="header">
        <h1>Name</h1>
        <nav>
          <ul>
            <li><a href="/caregiver-search">간병인 찾기</a></li>
            <li><a href="/my-page">마이페이지</a></li>
          </ul>
        </nav>
      </div>
      <div className="container">
        <div className="image-section">
          <img src="path_to_image.png" alt="Medical team illustration" />
        </div>
        <div className="form-section">
          <h2>간병 정보 입력</h2>
          <div className="form-group">
            <label>진단명</label>
            <input
              type="text"
              name="condition"
              value={formData.condition}
              onChange={handleChange}
              placeholder="진단명을 입력해주세요."
            />
            <label>
              <input
                type="checkbox"
                name="noCondition"
                onChange={handleChange}
                checked={formData.noCondition}
              />
              현재 진단명이 없습니다.
            </label>
          </div>
          <div className="form-group">
            <label>간병 장소</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="주소를 입력해주세요."
            />
            <input
              type="text"
              name="locationDetail"
              value={formData.locationDetail}
              onChange={handleChange}
              placeholder="상세주소를 입력해주세요."
            />
          </div>
          <div className="form-group">
            <label>간병 기간</label>
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
              <input
                type="checkbox"
                name="includeWeekends"
                onChange={handleChange}
                checked={formData.includeWeekends}
              />
              주말 포함
            </label>
          </div>
          <div className="form-group">
            <label>간병 시간</label>
            <input
              type="time"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
            />
            <span> ~ </span>
            <input
              type="time"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
            />
          </div>
          <div className="form-navigation">
            <button type="button" onClick={handleBack}>이전</button>
            <button type="button" onClick={handleNext}>다음</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientCondition;
