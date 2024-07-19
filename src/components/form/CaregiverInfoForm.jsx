import React from "react";
import TabButton from "../TabButton";

export default function CaregiverInfoForm({ goNext }) {
  const handleGenderSelect = (gender) => {
    setFormData({
      ...formData,
      gender: gender,
    });
  };
  return (
    <div className="form-section">
      <h2>간병인의 기본정보를 알려주세요!</h2>
      <form>
        <div className="form-group">
          <label>
            이름<span>*</span>
          </label>
          <input type="text" name="name" />
        </div>
        <div className="form-group">
          <label>
            생년월일<span>*</span>
          </label>
          <input type="date" name="date" />
        </div>

        <div className="form-group gender-selection">
          <label>
            성별<span>*</span>
          </label>
          <button type="button" onClick={() => handleGenderSelect("남성")}>
            남성
          </button>
          <button type="button" onClick={() => handleGenderSelect("여성")}>
            여성
          </button>
        </div>
        <div className="form-group foreigner-selection">
          <label>
            내/외국인<span>*</span>
          </label>
          <button type="button" onClick={() => handleGenderSelect("남성")}>
            내국인
          </button>
          <button type="button" onClick={() => handleGenderSelect("여성")}>
            외국인
          </button>
        </div>
        <div>
          <TabButton onSelect={goNext}>다음 </TabButton>
        </div>
      </form>
    </div>
  );
}
