import { useState } from "react";
import TabButton from "../TabButton";

export default function CaregiverInfoForm({ goNext }) {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    gender: "",
    foreigner: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelect = (name, value) => {
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
      <h2>간병인의 기본정보를 알려주세요!</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            이름<span>*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
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
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div className="form-group selection">
          <label>
            성별<span>*</span>
          </label>
          <button
            type="button"
            className={formData.gender === "남성" ? "selected" : ""}
            onClick={() => handleSelect("gender", "남성")}
          >
            남성
          </button>
          <button
            type="button"
            className={formData.gender === "여성" ? "selected" : ""}
            onClick={() => handleSelect("gender", "여성")}
          >
            여성
          </button>
        </div>
        <div className="form-group selection">
          <label>
            내/외국인<span>*</span>
          </label>
          <button
            type="button"
            className={formData.foreigner === "내국인" ? "selected" : ""}
            onClick={() => handleSelect("foreigner", "내국인")}
          >
            내국인
          </button>
          <button
            type="button"
            className={formData.foreigner === "외국인" ? "selected" : ""}
            onClick={() => handleSelect("foreigner", "외국인")}
          >
            외국인
          </button>
        </div>
        <div className="next-button">
          <TabButton>다음 </TabButton>
        </div>
      </form>
    </div>
  );
}
