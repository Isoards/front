import React, { useState } from "react";
import "./Search.css";
import Content from "../components/form/ContentForm.jsx";
import CaregiverInfoForm from "../components/work/CaregiverInfoForm.jsx";
import WorkExperienceForm from "../components/work/WorkExperienceForm.jsx";
import CareDateForm from "../components/work/CareDateForm.jsx";

export default function Work() {
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

  return (
    <div className="find-work">
      <div className="container">
        <Content />
        {step == 0 && <CaregiverInfoForm setStep={handleStep} />}
        {step == 1 && <WorkExperienceForm setStep={handleStep} />}
        {step == 2 && <CareDateForm setStep={handleStep} />}
      </div>
    </div>
  );
}
