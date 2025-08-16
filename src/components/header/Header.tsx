import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../assets/logo-cauris.svg";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      {/* Logo + Nom */}
      <div className="navbar-logo">
        <img src={logo} alt="Logo CaurisPay" />
        <span className="navbar-brand">CaurisPay</span>
      </div>

      {/* Menu Hamburger pour mobile */}
      <button 
        className={`hamburger ${isMenuOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Liens et boutons dans un conteneur pour le menu mobile */}
      <div className={`navbar-content ${isMenuOpen ? 'open' : ''}`}>
        {/* Liens */}
        <nav className="navbar-links">
          <a href="#products" onClick={() => setIsMenuOpen(false)}>Products</a>
          <a href="#custumers" onClick={() => setIsMenuOpen(false)}>Customers</a>
          <a href="#pricing" onClick={() => setIsMenuOpen(false)}>Pricing</a>
          <a href="#learn" onClick={() => setIsMenuOpen(false)}>Learn</a>
        </nav>

        {/* Boutons Login / Signup */}
        <div className="navbar-buttons">
          <Link to="/connexion" className="btn login" onClick={() => setIsMenuOpen(false)}>Login</Link>
          <Link to="/inscription" className="btn signup" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;