import React from "react";
import logo from "../img/Logo loading.png";
import "./Search.css";
export default function Loading() {
  return (
    <div className="loading">
      <img src={logo} alt="logo" />
      <h3>간병인을 찾고 있습니다</h3>
      <p>작성해주신 내용을 바탕으로 적합한 간병인을 찾아서 보여드립니다.</p>
    </div>
  );
}
