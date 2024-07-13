import React, { useState } from "react";
import TabButton from "../../components/TabButton.jsx";
import { useNavigate } from "react-router-dom";
import Content from "../../components/Content.jsx";
export default function Search() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    date: "",
    height: "",
    weight: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleGenderSelect = (gender) => {
    setFormData({
      ...formData,
      gender: gender,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
              <label>이름</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>생년월일</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>키</label>
              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>몸무게</label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
              />
            </div>
            <div className="form-group gender-selection">
              <label>성별</label>
              <button
                type="button"
                className={formData.gender === "남성" ? "selected" : ""}
                onClick={() => handleGenderSelect("남성")}
              >
                남성
              </button>
              <button
                type="button"
                className={formData.gender === "여성" ? "selected" : ""}
                onClick={() => handleGenderSelect("여성")}
              >
                여성
              </button>
            </div>
            <TabButton onSelect={goNext}>다음 </TabButton>
          </form>
        </div>
      </div>
    </div>
  );
}
