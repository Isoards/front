import React, { useState } from "react";
import Content from "../components/form/ContentForm.jsx";
import PatientForm from "../components/caregiver/PatientForm.jsx";
import CareInfoForm from "../components/caregiver/CareInfoForm.jsx";
import PatientSymptomsForm from "../components/caregiver/PatientSymptomsForm.jsx";
import GuardianInfoForm from "../components/caregiver/GuardianInfoForm.jsx";
import { defaultInstance } from "../util/api.js";

export default function Search() {
  const [formData, setFormData] = useState({
    patientName: "",
    patientBirthDate: "",
    patientHeight: "",
    patientWeight: "",
    patientGender: "",
    reservationReason: "",
    reservationLocation: "",
    startDate: "",
    endDate: "",
    dailyStartTime: "",
    dailyEndTime: "",
  });

  const MAXSTEP = 3;
  const [step, setStep] = useState(0);
  let curMaxStep = 0;

  const handleStep = (next) => {
    if (next === true) {
      if (step + 1 <= MAXSTEP) {
        if (step + 1 > curMaxStep) {
          curMaxStep = step + 1;
        }
        setStep(step + 1);
      }
    }
    if (next === false) {
      if (step > 0) {
        setStep(step - 1);
      }
    }
  };

  //const url = "/";

  return (
    <div className="caregiver-search">
      <div className="container">
        <Content />
        {step == 0 && <PatientForm setStep={handleStep} />}
        {step == 1 && <CareInfoForm setStep={handleStep} />}
        {step == 2 && <PatientSymptomsForm setStep={handleStep} />}
        {step == 3 && <GuardianInfoForm setStep={handleStep} />}
      </div>
    </div>
  );
}
