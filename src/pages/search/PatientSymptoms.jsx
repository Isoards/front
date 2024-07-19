import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Content from "../../components/form/ContentForm.jsx";
import PatientSymptomsForm from "../../components/caregiver/PatientSymptomsForm.jsx";

export default function PatientSymptoms() {
  const navigate = useNavigate();

  function goBack() {
    navigate("/patient");
  }
  function goNext() {
    navigate("/info");
  }

  return (
    <div className="patient-symptoms">
      <div className="container">
        <Content />
        <PatientSymptomsForm goBack={goBack} goNext={goNext} />
      </div>
    </div>
  );
}
