import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import styles from "../../pages/UserLogin.module.css";
import { caregiverLogInAPI, userLogin } from "../../util/api";
import { useNavigate } from "react-router-dom";
import { caregiverState } from "../../state/atoms";

const CaregiverLoginForm = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setCaregiverState = useSetRecoilState(caregiverState);
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await caregiverLogInAPI(email, password);
      setCaregiverState(response.data);
      localStorage.setItem("caregiverId", response.data.data);
      nav("/findwork");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className={styles.formSection}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>이메일</label>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="이메일/아이디를 입력해주세요"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label>패스워드</label>
          <input
            type="text"
            name="password"
            value={password}
            placeholder="비밀번호를 입력해주세요"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.box}>
          <button type="submit" className={styles.loginButton}>
            로그인하기
          </button>
        </div>
      </form>
    </div>
  );
};

export default CaregiverLoginForm;