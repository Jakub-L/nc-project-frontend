import React from 'react';
import logo from '../assets/logo-white.png';
import '../styles/NavBar.css';

const NavBar = () => (
  <div className="NavBar">
    <img id="nav-logo" src={logo} alt="Arup logo" />
    <div id="app-name">SiteSeeing</div>
  </div>
);

export default NavBar;
