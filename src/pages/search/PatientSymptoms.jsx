import React from "react";
import { useNavigate } from "react-router-dom";
import TabButton from "../../components/TabButton.jsx";

export default function PatientSymptoms() {
  const navigate = useNavigate();
  function goBack() {
    navigate("/patient");
  }
  function goNext() {
    navigate("/mypage");
  }

  return (
    <div className="symptoms">
      <div className="container">
        <div className="content">
          <h2>간병인 찾기</h2>
          <p>
            환자의 정보를 입력하고 맞춤 케어가 가능한 이력의 간병인을
            찾아보세요!
          </p>
        </div>
        <div className="form-section">
          <h2>환자 증상 입력</h2>
          <div className="form-group">
            <label>어디가 어떻게 불편하신가요?</label>
            <input type="text" name="symptoms" />
          </div>
          <div className="form-group">
            <label>안되는 행위나 동작이 있으신가요?</label>
            <input type="text" name="date" />
          </div>
          <div className="form-group">
            <label>최근 병원에 방문하셨다면 진료내용을 작성해주세요.</label>
            <input type="text" name="height" />
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
