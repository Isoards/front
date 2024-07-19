import { React, useState } from "react";
// import { useNavigate } from "react-router-dom";
import CareInfoForm from "../../components/caregiver/CareInfoForm.jsx";
import Content from "../../components/form/ContentForm.jsx";

export default function PatientCondition() {
  const [careInfo, setCareInfo] = useState({
    reservationReason: "",
    reservationLocation: "",
    startDate: "",
    endDate: "",
    dailyStartTime: "",
    dailyEndTime: "",
  });

  const handleChange = (name, value) => {
    setCareInfo({
      ...careInfo,
      [name]: value,
    });
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
    <div className="patient-condition">
      <div className="container">
        <Content />
        <CareInfoForm data={careInfo} />
      </div>
    </div>
  );
}
