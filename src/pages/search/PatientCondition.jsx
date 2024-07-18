import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PatientCondition.css";
import TabButton from "../../components/TabButton.jsx";
import Content from "../../components/Content.jsx";
import DaumPost from "../../components/DaumPost.jsx";

export default function PatientCondition() {
  const navigate = useNavigate();
  const [careInfo, setCareInfo] = useState({
    name: "",
    place: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCareInfo({
      ...careInfo,
      [name]: value,
    });
  };
  const isVaild = careInfo.name && careInfo.place;

  function goBack() {
    navigate("/search");
  }
  function goNext() {
    navigate("/symptoms");
  }
  return (
    <div className="patient-condition">
      <div className="container">
        <Content />
        <div className="image-section">
          <img />
        </div>
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
              value={careInfo.name}
            />
            <label>
              <input type="checkbox" name="noCondition" />
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
              value={careInfo.place}
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
            <input type="date" name="startDate" value={careInfo.startDate} />
            <span> ~ </span>
            <input type="date" name="endDate" value={careInfo.endDate} />
            <label>
              <input type="checkbox" name="includeWeekends" />
              주말 포함
            </label>
          </div>
          <div className="form-group">
            <label>
              간병 시간<span>*</span>
            </label>
            <input type="time" name="startTime" value={careInfo.startTime} />
            <span> ~ </span>
            <input type="time" name="endTime" value={careInfo.endTime} />
          </div>
          <div className="form-navigation">
            <TabButton onSelect={goBack}>이전</TabButton>
            <TabButton onSelect={goNext}>다음</TabButton>
          </div>
        </div>
      </div>
    </div>
  );
}
