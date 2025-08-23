import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../assets/logo-cauris.svg";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Détecter le défilement pour ajouter un effet de fond au header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        {/* Logo */}
        <div className="navbar-logo">
          <img src={logo} alt="Logo CaurisPay" />
          <span className="navbar-brand">CaurisPay</span>
        </div>

        {/* Hamburger avec animation améliorée */}
        <button
          className={`hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menu Desktop/Mobile */}
        <div className={`navbar-content ${isMenuOpen ? "open" : ""}`}>
          <nav className="navbar-links">
            <a href="#products" onClick={closeMenu}>
              <i className="icon-products"></i>Products
            </a>
            <a href="#customers" onClick={closeMenu}>
              <i className="icon-customers"></i>Customers
            </a>
            <a href="#pricing" onClick={closeMenu}>
              <i className="icon-pricing"></i>Pricing
            </a>
            <a href="#learn" onClick={closeMenu}>
              <i className="icon-learn"></i>Learn
            </a>
          </nav>
          <div className="navbar-buttons">
            <Link to="/connexion" className="btn login" onClick={closeMenu}>
              Login
            </Link>
            <Link to="/inscription" className="btn signup" onClick={closeMenu}>
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      {/* Overlay avec animation */}
      <div
        className={`navbar-overlay ${isMenuOpen ? "open" : ""}`}
        onClick={closeMenu}
      ></div>
    </>
  );
};

export default Header;