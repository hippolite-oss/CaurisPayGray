import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "./header.css";
import logo from "../../assets/logo-cauris.svg"; 

const Header: React.FC = () => {
  return (
    <header className="navbar">
      {/* Logo + Nom */}
      <div className="navbar-logo">
        <img src={logo} alt="Logo CaurisPay" />
        <span className="navbar-brand">CaurisPay</span>
      </div>

      {/* Liens */}
      <nav className="navbar-links">
        <a href="#products">Products</a>
        <a href="#custumers">Custumers</a>
        <a href="#spricing">Pricing</a>
        <a href="#learn">Learn</a>
      </nav>

      {/* Boutons Login / Signup avec Link */}
      <div className="navbar-buttons">
        <Link to="/connexion" className="btn login">Login</Link>
        <Link to="/inscription" className="btn signup">Sign Up</Link>
      </div>
    </header>
  );
};

export default Header;
