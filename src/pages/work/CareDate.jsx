import React, { useState } from "react";
import TabButton from "../../components/TabButton.jsx";
import { useNavigate } from "react-router-dom";
import Content from "../../components/Content.jsx";

export default function CareDate() {
  const navigate = useNavigate();
  function goBack() {
    navigate("/experience");
  }
  function goNext() {
    navigate("/mypage");
  }
  return (
    <div className="care-date">
      <div className="container">
        <Content />
        <div className="form-section">
          <h2>간병 가능한 날짜와 시간을 알려주세요!</h2>
          <form>
            <div className="form-group">
              <label>간병 가능 기간</label>
              <input type="date" name="careDate" />
            </div>
            <div className="form-group">
              <label>간병 가능 시간</label>
              <input type="date" name="careTime" />
            </div>
            <div className="form-navigation">
              <TabButton onSelect={goBack}>이전</TabButton>
              <TabButton onSelect={goNext}>다음</TabButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
