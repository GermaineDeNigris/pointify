import React from "react";
import "./Navbar.css";
import pointifyLogo from "../assets/images/pointify-logo.jpg"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={pointifyLogo} alt="Pointify Logo" className="logo" />
      </div>
    </nav>
  );
};

export default Navbar;
