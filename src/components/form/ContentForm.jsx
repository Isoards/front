import React from "react";
import logo from "../../img/Logo white ver..png";

export default function Content() {
  return (
    <div className="content">
      <img src={logo} alt="logo" />
      <h2>간병인 찾기</h2>
      <p>
        환자의 정보를 입력하고 맞춤 케어가 가능한 이력의 간병인을 찾아보세요!
      </p>
    </div>
  );
}
