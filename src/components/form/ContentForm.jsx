import React from "react";
import logo from "../../img/Logo white ver..png";

export default function Content({ title, description }) {
  return (
    <div className="content">
      <img src={logo} alt="logo" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
