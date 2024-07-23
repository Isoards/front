import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../img/Logo violet ver..png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <img src={logo} />
        <h1>하이케어</h1>
      </div>
      <ul>
        <li>
          <NavLink to="/search">간병인 찾기</NavLink>
        </li>
        <li>
          <NavLink to="/work">일감 찾기</NavLink>
        </li>
        <li>
          <NavLink to="/register">마이 페이지</NavLink>
        </li>
      </ul>
    </nav>
  );
}
