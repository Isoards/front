import React, { useState } from "react";
import Content from "../components/form/ContentForm.jsx";
import PatientForm from "../components/caregiver/PatientForm.jsx";
import CareInfoForm from "../components/caregiver/CareInfoForm.jsx";
import PatientSymptomsForm from "../components/caregiver/PatientSymptomsForm.jsx";
import GuardianInfoForm from "../components/caregiver/GuardianInfoForm.jsx";
import { defaultInstance } from "../util/api.js";
import { useRecoilState } from "recoil";
import { careReservationRequest } from "../state/atoms.jsx";

export default function Search() {
  const [careReservationRequestState, setCareReservationRequestState] =
    useRecoilState(careReservationRequest);

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
        <Content
          title={"간병인 찾기"}
          description={
            "환자의 정보를 입력하고 맞춤 케어가 가능한 이력의 간병인을 찾아보세요!"
          }
        />
        {step == 0 && <PatientForm setStep={handleStep} />}
        {step == 1 && <CareInfoForm setStep={handleStep} />}
        {step == 2 && <PatientSymptomsForm setStep={handleStep} />}
        {step == 3 && <GuardianInfoForm setStep={handleStep} />}
      </div>
    </div>
  );
}
