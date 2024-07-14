import React, { useState } from "react";
import TabButton from "../../components/TabButton.jsx";
import { useNavigate } from "react-router-dom";
import Content from "../../components/Content.jsx";

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
        <div className="form-section">
          <h2>어떤 일을 했었는지 알려주세요!</h2>
          <form>
            <div className="form-group">
              <label>면허/자격증 종류 선택 및 인증</label>
              <select name="licenseType">
                <option value="간호사 면허증">간호사 면허증</option>
                <option value="간호조무사 자격증">간호조무사 자격증</option>
                <option value="사회복지사 자격증">사회복지사 자격증</option>
              </select>
              <label className="file-upload">
                <input
                  type="file"
                  name="licenseFile"
                  style={{ display: "none" }}
                />
                <button type="button" className="upload-button">
                  사진 업로드 하기
                </button>
              </label>
              <span>d</span>
            </div>
            <div className="form-group">
              <label>근무 경력 기재 및 인증</label>
              <input
                type="text"
                name="workExperience"
                placeholder="00병원 00동 2년 근무"
              />
              <label className="file-upload">
                <input
                  type="file"
                  name="workFile"
                  style={{ display: "none" }}
                />
                <button type="button" className="upload-button">
                  사진 업로드 하기
                </button>
              </label>
              <span>d</span>
            </div>
            <div className="form-group">
              <label>날짜</label>
              <input type="date" name="workDate" />
            </div>
            <div className="form-group">
              <label>
                환자나 보호자에게 설명할 수 있는 나의 소개글을 써주세요.
              </label>
              <textarea
                name="introduction"
                placeholder="근무 경력과 관련지어 소개글을 작성하면, 더 많은 도움을 줄 수 있는 환자와 매칭이 가능해집니다."
              />
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
