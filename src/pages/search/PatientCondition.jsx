import { React, useState } from "react";
// import { useNavigate } from "react-router-dom";
import CareInfoForm from "../../components/caregiver/CareInfoForm.jsx";
import Content from "../../components/form/ContentForm.jsx";

export default function PatientCondition() {
  return (
    <div className="patient-condition">
      <div className="container">
        <Content />
        <CareInfoForm />
      </div>
    </div>
  );
}
