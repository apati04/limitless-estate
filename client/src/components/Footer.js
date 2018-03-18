import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      style={{ borderBottom: '2px solid black' }}
      className="footer"
      id="myFooter"
    >
      <div className="container">
        <div className="row">
          <div className="col col-sm-3 myCols">
            <h5>Get started</h5>
            <ul>
              <li key="fHome">
                <Link to="/">Home</Link>
              </li>
              <li key="fDl">
                <Link to="/resources">Downloads</Link>
              </li>
              <li key="fDl">
                <Link to="/info/questionnaire">Questionnaire</Link>
              </li>
            </ul>
          </div>
          <div className="col col-sm-3 myCols">
            <h5>About us</h5>
            <ul>
              <li key="fCi">
                <Link to="/about">Company Information</Link>
              </li>
              <li key="fcon">
                <Link to="/info/contact">Contact us</Link>
              </li>
            </ul>
          </div>
          <div className="col col-sm-3 myCols">
            <h5>Support</h5>
            <ul>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li key="nuvu">
                <Link to="/info">NuView</Link>
              </li>
            </ul>
          </div>
          <div className="col col-sm-3 myCols">
            <h5>Legal</h5>
            <ul>
              <li key="lTOS">
                <Link to="/legal">Terms of Service</Link>
              </li>
              <li key="ltou">
                <Link to="/legal">Terms of Use</Link>
              </li>
              <li key="lpp">
                <Link to="/legal">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="social-networks">
        <a className="twitter">
          <i className="fab fa-twitter" />
        </a>
        <a className="facebook">
          <i className="fab fa-facebook" />
        </a>
        <a className="google">
          <i className="fab fa-google-plus-g" />
        </a>
      </div>
      <div className="footer-copyright">
        <p>© 2018 Limitless Estates, LLC</p>
      </div>
    </footer>
  );
};
export default Footer;
