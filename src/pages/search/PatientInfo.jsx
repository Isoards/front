import React, { useState } from "react";
import TabButton from "../../components/TabButton.jsx";
import { useNavigate } from "react-router-dom";
import Content from "../../components/Content.jsx";

export default function Search() {
  const navigate = useNavigate();
  const [patientInfo, setPatientInfo] = useState({
    name: "",
    date: "",
    height: "",
    weight: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientInfo({
      ...patientInfo,
      [name]: value,
    });
  };

  const handleGenderSelect = (gender) => {
    setPatientInfo({
      ...patientInfo,
      gender: gender,
    });
  };
  const isVaild =
    patientInfo.name &&
    patientInfo.date &&
    patientInfo.height &&
    patientInfo.weight &&
    patientInfo.gender;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(patientInfo);
  };

  function goNext() {
    navigate("/patient");
  }

  return (
    <div className="caregiver-search">
      <div className="container">
        <Content />
        <div className="form-section">
          <h2>환자 정보 입력</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>
                이름<span>*</span>
              </label>
              <input
                type="text"
                name="name"
                value={patientInfo.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>
                생년월일<span>*</span>
              </label>
              <input
                type="date"
                name="date"
                value={patientInfo.date}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>
                키<span>*</span>
              </label>
              <input
                type="number"
                name="height"
                value={patientInfo.height}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>
                몸무게<span>*</span>
              </label>
              <input
                type="number"
                name="weight"
                value={patientInfo.weight}
                onChange={handleChange}
              />
            </div>
            <div className="form-group gender-selection">
              <label>
                성별<span>*</span>
              </label>
              <button
                type="button"
                className={patientInfo.gender === "남성" ? "selected" : ""}
                onClick={() => handleGenderSelect("남성")}
              >
                남성
              </button>
              <button
                type="button"
                className={patientInfo.gender === "여성" ? "selected" : ""}
                onClick={() => handleGenderSelect("여성")}
              >
                여성
              </button>
            </div>
            <TabButton onSelect={goNext} checked={!isVaild}>
              다음
            </TabButton>
          </form>
        </div>
      </div>
    </div>
  );
}
