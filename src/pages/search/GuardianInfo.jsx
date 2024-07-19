import React from "react";
import "./GuardianInfo.css";
import Content from "../../components/Content";
import { useNavigate } from "react-router-dom";
import GuardianInfoForm from "../../components/form/GuardianInfoForm";

export default function GuardianInfo() {
  const navigate = useNavigate();
  function goBack() {
    navigate("/symptoms");
  }
  function goNext() {
    navigate("/mypage");
  }
  return (
    <div className="guardian-info">
      <div className="container">
        <Content />
        <GuardianInfoForm goBack={goBack} goNext={goNext} />
      </div>
    </div>
  );
}
