import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Navbar.css";

const NavPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo */}
        <div className="logo-text-wrapper">
          <Link to="/" className="logo-link">
          <h1>SYNTIARO</h1>
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/Aboutus" onClick={toggleMenu}>About Us</Link></li>
          <li className="dropdown">
            <Link to="#" className="no-click">Product</Link>
            <ul className="dropdown-menu">
              <li><Link to="/pos" onClick={toggleMenu}>POS</Link></li>
              <li><Link to="/lms" onClick={toggleMenu}>LMS</Link></li>
            </ul>
          </li>
          <li><Link to="/innovation" onClick={toggleMenu}>Innovation</Link></li>
          <li><Link to="/servicepage" onClick={toggleMenu}>Services</Link></li>
          <li><Link to="/career" onClick={toggleMenu}>Career</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavPage;
