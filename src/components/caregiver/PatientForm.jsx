import React, { useState } from "react";
import TabButton from "../TabButton";

export default function PatientForm({ data, reflectChange, setStep }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    reflectChange(name, value);
  };

  const handleGenderSelect = (gender) => {
    reflectChange("patientGender", gender);
  };

  const isVaild =
    data.patientName &&
    data.patientBirthDate &&
    data.PatientHeight &&
    data.PatientWeight &&
    data.PatientGender;

  return (
    <div className="form-section">
      <h2>환자 정보 입력</h2>
      <form>
        <div className="form-group">
          <label>
            이름<span>*</span>
          </label>
          <input
            type="text"
            name="name"
            value={data.patientName}
            placeholder="홍길동"
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
            value={data.patientBirthDate}
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
            value={data.PatientHeight}
            placeholder="160"
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
            value={data.PatientWeight}
            placeholder="50"
            onChange={handleChange}
          />
        </div>
        <div className="form-group gender-selection">
          <label>
            성별<span>*</span>
          </label>
          <button
            type="button"
            className={data.PatientGender === "남성" ? "selected" : ""}
            onClick={() => handleGenderSelect("남성")}
          >
            남성
          </button>
          <button
            type="button"
            className={data.PatientGender === "여성" ? "selected" : ""}
            onClick={() => handleGenderSelect("여성")}
          >
            여성
          </button>
        </div>
        <div className="next-button">
          <TabButton onClick={() => setStep()} checked={!isVaild}>
            다음
          </TabButton>
        </div>
      </form>
    </div>
  );
}
