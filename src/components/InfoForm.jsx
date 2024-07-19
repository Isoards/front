import React, { useState } from "react";
import TabButton from "../../components/TabButton.jsx";
import { useNavigate } from "react-router-dom";
import Content from "../../components/Content.jsx";
import PatientInfoForm from "../../components/search/PatientInfoForm.jsx";

export default function Search() {
  const navigate = useNavigate();

  const [patientInfo, setPatientInfo] = useState({
    name: "",
    date: "",
    height: "",
    weight: "",
    gender: "",
  });

  const MAXSTEP = 2;

  const [step, setStep] = useState(0);
  let curMaxStep = 0;

  const handleChange = (name, value) => {
    setPatientInfo({
      ...patientInfo,
      [name]: value,
    });
  };

  const handleStep = (next) => {
    if (next === true) {
      if (prevStep + 1 <= MAXSTEP) {
        if (prevStep + 1 > curMaxStep) {
          curMaxStep = prevStep + 1;
        }
        setStep((prevStep) => prevStep + 1);
      }
    }
    if (next === false) {
      if (step > 0) {
        setStep((prevStep) => setStep(prevStep - 1));
      }
    }
  };

  // const url = "tempUrl";

  const handleSubmit = (e) => {
    // defaultInstace.post(url, { ...patientInfo }).then(function (res) {
    //     if (res.status === 200) {
    //         console.log("인증성공");
    //     }
    // });
    e.preventDefault();
    console.log(patientInfo);
  };

  return (
    <div className="caregiver-search">
      <div className="container">
        <Content />
        {step == 0 && (
          <PatientInfoForm
            data={patientInfo}
            reflectChange={handleChange}
            setStep={handleStep}
          />
        )}
        {step == 1 && <PatientInfoForm />}
      </div>
    </div>
  );
}
