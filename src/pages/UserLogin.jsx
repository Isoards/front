import React, { useEffect, useState } from "react";
import CaregiverLoginForm from "../components/form/CaregiverLoginForm";
import UserLoginForm from "../components/form/UserLoginForm";
import styles from "./UserLogin.module.css";

export default function UserLogin() {
  const [flag, setFlag] = useState("유저");

  useEffect(() => {
    console.log("현재 선택된 사용자:", flag);
    console.log(flag === "유저");
  }, [flag]);

  return (
    <div className={styles.container}>
      <p>Login</p>
      <div className={styles.selectionContainer}>
        <button
          type="button"
          className={`${styles.selectionButton} ${
            flag === "유저" ? styles.selected : ""
          }`}
          onClick={() => setFlag("유저")}
        >
          환자/보호자
        </button>
        <button
          type="button"
          className={`${styles.selectionButton} ${
            flag === "간병인" ? styles.selected : ""
          }`}
          onClick={() => setFlag("간병인")}
        >
          간병인
        </button>
      </div>
      {flag === "유저" ? <UserLoginForm /> : <CaregiverLoginForm />}
      <div className={styles.signupLink}>
        아직 계정이 없으신가요? <a href="/userSignUp">회원가입 하기</a>
      </div>
    </div>
  );
}