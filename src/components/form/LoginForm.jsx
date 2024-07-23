import React from "react";
import TabButton from "../TabButton.jsx";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  function goPatient() {
    navigate("/search");
  }
  function goCaregiver() {
    navigate("/work");
  }

  return (
    <div className="register">
      <div className="register-content">
        <h2>회원 등록</h2>
        <h3>
          환자의 정보를 입력하고 맞춤 케어가 가능한 이력의 간병인을 찾아보세요!
        </h3>
      </div>
      <div className="register-options">
        <section>
          <h2>환자 정보를 등록하고 나에게 꼭 맞는 간병인을 만나보세요!</h2>
          <TabButton onSelect={goPatient}>환자/보호자 가입하기</TabButton>
        </section>
        <section>
          <h2>내 경력을 바탕으로 ...의 간병인이 되어보세요!</h2>
          <TabButton onSelect={goCaregiver}>간병인 가입하기</TabButton>
        </section>
      </div>
    </div>
  );
}
