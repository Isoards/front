import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import CareInfoForm from "../../components/form/CareInfoForm.jsx";
import Content from "../../components/Content.jsx";

export default function PatientCondition() {
  const navigate = useNavigate();

  function goBack() {
    navigate("/search");
  }
  function goNext() {
    navigate("/symptoms");
  }
  return (
    <div className="patient-condition">
      <div className="container">
        <Content />
        <CareInfoForm goBack={goBack} goNext={goNext} />
      </div>
    </div>
  );
}
