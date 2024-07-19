import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Content from "../../components/form/ContentForm.jsx";
import CareDateForm from "../../components/work/CareDateForm.jsx";

export default function CareDate() {
  const navigate = useNavigate();
  function goBack() {
    navigate("/experience");
  }
  function goNext() {
    navigate("/mypage");
  }
  return (
    <div className="care-date">
      <div className="container">
        <Content />
        <CareDateForm goBack={goBack} goNext={goNext} />
      </div>
    </div>
  );
}
