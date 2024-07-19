import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Content from "../../components/Content.jsx";
import CareDateForm from "../../components/form/CareDateForm.jsx";

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
