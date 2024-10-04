import React from 'react';
import './Navbar.css';
import logo from "../../assets/rere.png";


const Navbar = () => {
  return (
    <div id="navbar">
      <div className="container">
        <nav>
          <img src={logo} alt="Logo" className="logo" />
          <ul id="sidemenu">
            <li><a href="#header">Home</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
