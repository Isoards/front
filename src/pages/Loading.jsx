import React from "react";
import logo from "../img/Logo loading.png";
import "./Search.css";
export default function Loading() {
  return (
    <div className="loading">
      <img src={logo} alt="logo" />
      <h3>로딩 중입니다.</h3>
      <p> 잠시만 기다려주세요!</p>
    </div>
  );
}
