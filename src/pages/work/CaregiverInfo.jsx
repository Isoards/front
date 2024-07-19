import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Content from "../../components/Content.jsx";
import CaregiverInfoForm from "../../components/form/CaregiverInfoForm.jsx";

export default function CaregiverInfo() {
  const navigate = useNavigate();
  function goNext() {
    navigate("/experience");
  }
  return (
    <div className="caregiver-info">
      <div className="container">
        <Content />
        <CaregiverInfoForm goNext={goNext} />
      </div>
    </div>
  );
}
