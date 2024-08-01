import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../img/Logo violet ver..png";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className={styles.navbar}>
      <NavLink to="/">
        <img className="logo" src={logo} alt="logo" />
        <h1>하이케어</h1>
      </NavLink>
      <ul>
        {location.pathname !== "/search" && (
          <li>
            <NavLink to="/search">간병인 찾기</NavLink>
          </li>
        )}
        {location.pathname !== "/work" && (
          <li>
            <NavLink to="/work">일감 찾기</NavLink>
          </li>
        )}
        {location.pathname !== "/mypage" && (
          <li>
            <NavLink to="/mypage">마이 페이지</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
