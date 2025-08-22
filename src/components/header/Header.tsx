import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../assets/logo-cauris.svg";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="navbar">
        {/* Logo */}
        <div className="navbar-logo">
          <img src={logo} alt="Logo CaurisPay" />
          <span className="navbar-brand">CaurisPay</span>
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menu Desktop/Mobile */}
        <div className={`navbar-content ${isMenuOpen ? "open" : ""}`}>
          <nav className="navbar-links">
            <a href="#products" onClick={closeMenu}>Products</a>
            <a href="#customers" onClick={closeMenu}>Customers</a>
            <a href="#pricing" onClick={closeMenu}>Pricing</a>
            <a href="#learn" onClick={closeMenu}>Learn</a>
          </nav>
          <div className="navbar-buttons">
            <Link to="/connexion" className="btn login" onClick={closeMenu}>Login</Link>
            <Link to="/inscription" className="btn signup" onClick={closeMenu}>Sign Up</Link>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`navbar-overlay ${isMenuOpen ? "open" : ""}`}
        onClick={closeMenu}
      ></div>
    </>
  );
};

export default Header;
