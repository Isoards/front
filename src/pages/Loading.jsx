import React from "react";
import logo from "../img/Logo loading.png";
import "./Search.css";
export default function Loading() {
  return (
    <div className="loading">
      <img src={logo} alt="logo" />
      <p>로딩 중입니다. 잠시만 기다려주세요!</p>
    </div>
  );
}
