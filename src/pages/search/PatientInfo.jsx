import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Content from "../../components/Content.jsx";
import PatientForm from "../../components/form/PatientForm.jsx";

export default function Search() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(patientInfo);
  };

  function goNext() {
    navigate("/patient");
  }

  return (
    <div className="caregiver-search">
      <div className="container">
        <Content />
        <PatientForm goNext={goNext} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}
