import React from "react";
import logo from "../img/Logo loading.png";
import "../pages/Search.css";
export default function Searching() {
  return (
    <div className="loading">
      <img src={logo} alt="logo" />
      <h2>간병인을 찾고 있습니다</h2>
      <p>작성해주신 내용을 바탕으로 적합한 간병인을 찾아서 보여드립니다.</p>
    </div>
  );
}
