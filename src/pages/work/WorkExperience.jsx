import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Content from "../../components/Content.jsx";
import WorkExperienceForm from "../../components/form/WorkExperienceForm.jsx";

export default function WorkExperience() {
  const navigate = useNavigate();
  function goBack() {
    navigate("/test");
  }
  function goNext() {
    navigate("/caredate");
  }
  return (
    <div className="work-experience">
      <div className="container">
        <Content />
        <WorkExperienceForm goBack={goBack} goNext={goNext} />
      </div>
    </div>
  );
}
