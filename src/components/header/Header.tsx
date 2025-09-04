import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./header.css";
import logo from "../../assets/logo-cauris.svg";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            <img src={logo} alt="Logo CaurisPay" />
            <span className="navbar-brand">CaurisPay</span>
          </div>

          {/* Menu */}
          <div className={`navbar-content ${isMenuOpen ? "open" : ""}`}>
            <nav className="navbar-links">
              <ScrollLink
                to="products"
                smooth={true}
                duration={600}
                offset={-70}
                onClick={closeMenu}
              >
                Products
              </ScrollLink>
              <ScrollLink
                to="customers"
                smooth={true}
                duration={600}
                offset={-70}
                onClick={closeMenu}
              >
                Customers
              </ScrollLink>
              <ScrollLink
                to="pricing"
                smooth={true}
                duration={600}
                offset={-70}
                onClick={closeMenu}
              >
                Pricing
              </ScrollLink>
              <ScrollLink
                to="learn"
                smooth={true}
                duration={600}
                offset={-70}
                onClick={closeMenu}
              >
                Learn
              </ScrollLink>
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

          {/* Hamburger */}
          <button
            className={`hamburger ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            <span></span><span></span><span></span>
          </button>
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