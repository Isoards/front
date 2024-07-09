import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>Test</h1>
      <ul>
        <li><NavLink to="/register">회원가입</NavLink></li>
      </ul>
    </nav>
  );
};

