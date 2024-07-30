import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./GuardianInfoForm.module.css";

export default function GuardianInfoForm({ setStep }) {
  const [contactFields, setContactFields] = useState([{ id: 1, value: "" }]);
  const navigate = useNavigate();

  const handleAddContactField = () => {
    setContactFields([
      ...contactFields,
      { id: contactFields.length + 1, value: "" },
    ]);
  };

  const handleInputChange = (id, newValue) => {
    setContactFields(
      contactFields.map((field) =>
        field.id === id ? { ...field, value: newValue } : field
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(true);
    // Add your form submission logic here
  };

  return (
    <div className={styles.formSection}>
      <div className={styles.headerContainer}>
        <h2 className={styles.headerTitle}>보호자 정보 입력</h2>
        <div className={styles.steps}>
          <span className={styles.step}>1</span>
          <span className={styles.step}>2</span>
          <span className={styles.step}>3</span>
          <span className={styles.onStep}>4</span>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>
            보호자 이름<span>*</span>
          </label>
          <input type="text" name="guardianName" placeholder="홍길동" />
        </div>
        <div className={styles.formGroup}>
          <label>환자와의 관계</label>
          <select name="relationship">
            <option value="">관계를 선택해주세요</option>
            <option value="child">자녀</option>
            <option value="parents">부모</option>
            <option value="grandparents">조부모</option>
            <option value="sibling">형제 * 자매</option>
            <option value="grandchild">손자</option>
            <option value="other">기타</option>
          </select>
        </div>
        <p>
          <input type="checkbox" name="useMemberInfo" />
          회원정보 불러오기
        </p>
        {contactFields.map((field, index) => (
          <div className={styles.formGroup} key={field.id}>
            <label>보호자 연락처 {index + 1}</label>
            <input
              type="text"
              name={`guardianPhone${field.id}`}
              placeholder="010 - 1234 - 5678"
              value={field.value}
              onChange={(e) => handleInputChange(field.id, e.target.value)}
            />
          </div>
        ))}
        <button
          type="button"
          className="addContactButton"
          onClick={handleAddContactField}
        >
          + 연락처 추가하기
        </button>
        <div className={styles.formGroup}>
          <label>보호자 주소</label>
          <textarea
            type="text"
            name="guardianAddress"
            placeholder="주소를 입력해주세요."
          />
          <textarea
            type="text"
            name="guardianAddressDetail"
            placeholder="상세주소를 입력해주세요."
          />
        </div>
        <div className={styles.formNavigation}>
          <button
            type="button"
            className={styles.previousButton}
            onClick={() => setStep(false)}
          >
            이전
          </button>
          <button className={styles.nextButton} type="submit">
            찾기
          </button>
        </div>
      </form>
    </div>
  );
}
