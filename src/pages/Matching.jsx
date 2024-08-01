import React, { useState } from "react";
import Content from "../components/form/ContentForm.jsx";
import MatchingForm from "../components/form/MatchingForm.jsx";
import "./Search.css";

export default function Matching() {
  return (
    <div className="matching">
      <div className="container">
        <Content
          title={"간병인 찾기"}
          description={
            "환자의 정보를 입력하고 맞춤 케어가 가능한 이력의 간병인을 찾아보세요!"
          }
        />
        <MatchingForm />
      </div>
    </div>
  );
}
