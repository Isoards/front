import React, { useState } from "react";
import Content from "../components/form/ContentForm.jsx";
import MatchingForm from "../components/form/MatchingForm.jsx";
import "./Search.css";

export default function Matching() {
  return (
    <div className="matching">
      <div className="container">
        <Content />
        <MatchingForm />
      </div>
    </div>
  );
}
