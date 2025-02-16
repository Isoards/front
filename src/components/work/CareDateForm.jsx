import { useState } from "react";
import TabButton from "../TabButton";
import styles from "./CareDateForm.module.css";
import { useNavigate } from "react-router-dom";

export default function CareDateForm({ setStep }) {
  const navigate = useNavigate();

  function goNext() {
    navigate("/findwork");
  }
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
    setStep(true);
  };

  return (
    <div className={styles.formSection}>
      {" "}
      <div className={styles.headerContainer}>
        <h2 className={styles.headerTitle}>
          간병 가능한 날짜와 시간을 알려주세요!
        </h2>
        <div className={styles.steps}>
          <span className={styles.step}>1</span>
          <span className={styles.step}>2</span>
          <span className={styles.step}>3</span>
          <span className={styles.onStep}>4</span>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
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
        <div className={styles.formGroup}>
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
          <TabButton onSelect={() => setStep(false)}>이전</TabButton>
          <TabButton onSelect={goNext}>다음</TabButton>
        </div>
      </form>
    </div>
  );
}
