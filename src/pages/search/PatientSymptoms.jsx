import React from "react";
import { useNavigate } from "react-router-dom";
import Content from "../../components/Content.jsx";
import PatientSymptomsForm from "../../components/form/PatientSymptomsForm.jsx";
export default function PatientSymptoms() {
  const navigate = useNavigate();
  const [symptomsInfo, setSymptomsInfo] = useState({
    reservationReason: "",
    reservationLocation: "",
    startDate: "",
    endDate: "",
    dailyStartTime: "",
    dailyEndTime: "",
  });
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
