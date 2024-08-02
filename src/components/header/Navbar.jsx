import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../../state/atoms";
import styles from "./Navbar.module.css";
import logo from "../../img/Logo violet ver..png";

export default function Navbar() {
  const location = useLocation();
  const user = useRecoilValue(userState); // Recoil을 사용하여 현재 사용자 정보 가져오기

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
        {user
          ? location.pathname !== "/mypage" && (
              <li>
                <NavLink to="/mypage">마이 페이지</NavLink>
              </li>
            )
          : location.pathname !== "/userSignUp" && (
              <li>
                <NavLink to="/userSignUp">회원가입</NavLink>
              </li>
            )}
      </ul>
    </nav>
  );
}
