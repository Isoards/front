import { useEffect, useState } from "react";
import CaregiverLoginForm from "../components/form/CaregiverLoginForm";
import UserLoginForm from "../components/form/UserLoginForm";
import styles from "../components/caregiver/CareInfoForm.module.css";

const UserLogin = () => {
  const [flag, setFlag] = useState("유저");
  
  useEffect(() => {
    console.log("현재 선택된 사용자:", flag);
    console.log(flag === "유저")
  }, [flag]);

  return (
    <>
      <label>
        유저, 간병인<span>*</span>
      </label>
      <div className={styles.selectionContainer}>
        <button
          type="button"
          className={`${styles.selectionButton} ${flag === "유저" ? styles.selected : ""}`}
          onClick={() => setFlag("유저")}
        >
          유저
        </button>
        <button
          type="button"
          value="간병인"
          className={`${styles.selectionButton} ${flag === "간병인" ? styles.selected : ""}`}
          onClick={(e) => setFlag("간병인")}
        >
          간병인
        </button>
      </div>
      {flag === "유저" ? <UserLoginForm /> : <CaregiverLoginForm />}
    </>
  );
};

export default UserLogin;
