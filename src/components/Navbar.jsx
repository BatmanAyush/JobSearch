// src/Navbar.js

import React from 'react';
import './Navbar.css'; // Import the CSS file for styling
import logo from './images/logo.png'
import { useNavigate } from 'react-router-dom';
function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="" className='logo' />
      </div>
      <ul className="navbar-menu">
        <li>
          <button className="login-button" onClick={()=>{
            navigate('/login');
          }}>Login</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
