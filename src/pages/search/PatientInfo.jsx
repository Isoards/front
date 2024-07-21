import React, { useState } from "react";
import Content from "../../components/form/ContentForm.jsx";
import PatientForm from "../../components/caregiver/PatientForm.jsx";
import { defaultInstance } from "../../util/api.js";

export default function Search() {
  // const MAXSTEP = 4;
  // const [step, setStep] = useState(0);
  // let curMaxStep = 0;

  // const handleStep = (next) => {
  //   if (next === true) {
  //     if (prevStep + 1 <= MAXSTEP) {
  //       if (prevStep + 1 > curMaxStep) {
  //         curMaxStep = prevStep + 1;
  //       }
  //       setStep((prevStep) => prevStep + 1);
  //     }
  //   }
  //   if (next === false) {
  //     if (step > 0) {
  //       setStep((prevStep) => setStep(prevStep - 1));
  //     }
  //   }
  // };

  // const url = "/patientinfo";

  const handleSubmit = (e) => {
    //   // defaultInstace.post(url, { ...formData }).then(function (res) {
    //   //     if (res.status === 200) {
    //   //         console.log("인증성공");
    //   //     }
    //   // });
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="caregiver-search">
      <div className="container">
        <Content />

        <PatientForm />
      </div>
    </div>
  );
}
