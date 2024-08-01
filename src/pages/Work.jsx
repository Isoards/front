import React, { useState } from "react";
import "./Search.css";
import Content from "../components/form/ContentForm.jsx";
import CaregiverInfoForm from "../components/work/CaregiverInfoForm.jsx";
import WorkExperienceForm from "../components/work/WorkExperienceForm.jsx";
import CareDateForm from "../components/work/CareDateForm.jsx";
import CaregiverSignUpForm from "../components/work/CaregiverSignUpForm.jsx";

export default function Work() {
  const MAXSTEP = 2;
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
      <Content
          title={"일감 찾기"}
          description={
            "내 경력을 바탕으로 하이케어의 전문 간병인이 되어보세요!"
          }
        />
        {step == 0 && <CaregiverSignUpForm setStep={handleStep} />}
        {step == 1 && <CaregiverInfoForm setStep={handleStep} />}
        {step == 2 && <WorkExperienceForm setStep={handleStep} />}
      </div>
    </div>
  );
}
