import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>하이닥터</h1>
      <ul>
        <li><NavLink to="/search">간병인 찾기</NavLink></li>
        <li><NavLink to="/patient">간병인 찾기2</NavLink></li>
        <li><NavLink to="/register">일감 찾기</NavLink></li>
        <li><NavLink to="/mypage">마이 페이지</NavLink></li>
        
      </ul>
    </nav>
  );
};

