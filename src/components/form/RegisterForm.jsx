import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RegisterForm.module.css";

export default function RegisterForm() {
  const navigate = useNavigate();
  function goPatient() {
    navigate("/search");
  }
  function goCaregiver() {
    navigate("/work");
  }

  return (
    <div className={styles.register}>
      <div className={styles.content}>
        <h2>회원 등록</h2>
        <h3>
          환자의 정보를 입력하고 맞춤 케어가 가능한 이력의 간병인을 찾아보세요!
        </h3>
      </div>
      <div className={styles.options}>
        <section>
          <h2>
            환자 정보를 등록하고
            <br /> 나에게 꼭 맞는 간병인을 만나보세요!
          </h2>
          <button onClick={goPatient}>환자/보호자 가입하기</button>
        </section>
        <section>
          <h2>
            내 경력을 바탕으로 하이케어의
            <br />
            전문 간병인이 되어보세요!
          </h2>
          <button onClick={goCaregiver}>간병인 가입하기</button>
        </section>
      </div>
    </div>
  );
}
