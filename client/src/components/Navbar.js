import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
      <Link to="/" className="navbar-brand">
        <img src="https://via.placeholder.com/50x50" className="image-fluid" alt="logo"/> LIMITLESS ESTATES
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="mobile-navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbar">
        <ul className="navbar-nav mr-auto">
          <Link to="/" className="nav-item nav-link">HOME</Link>
          <Link to="/about" className="nav-item nav-link">ABOUT</Link>
          <Link to="/resources" className="nav-item nav-link">RESOURCES</Link>
          <Link to="/services" className="nav-item nav-link">SERVICES</Link>
          <Link to="/faq" className="nav-item nav-link">FAQ</Link>
          <Link to="/contact" className="nav-item nav-link">CONTACT</Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
