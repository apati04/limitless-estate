import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src="https://via.placeholder.com/50x50" className="image-fluid" alt="logo" /> LIMITLESS ESTATES
      </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="mobile-navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">HOME</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">ABOUT</Link>
            </li>
            <li className="nav-item">
              <Link to="/markets" className="nav-link">MARKETS</Link>
            </li>
            <li className="nav-item">
              <Link to="/resources" className="nav-link">RESOURCES</Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link">SERVICES</Link>
            </li>
            <li className="nav-item">
              <Link to="/faq" className="nav-link">FAQ</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
