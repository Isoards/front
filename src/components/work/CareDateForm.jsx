import { useState } from "react";
import TabButton from "../TabButton";

export default function CareDateForm({ goBack, goNext }) {
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
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
      <h2>간병 가능한 날짜와 시간을 알려주세요!</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>간병 가능 기간</label>
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
        </div>
        <div className="form-group">
          <label>간병 가능 시간</label>
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
          <TabButton onSelect={goBack}>이전</TabButton>
          <TabButton>다음</TabButton>
        </div>
      </form>
    </div>
  );
}
