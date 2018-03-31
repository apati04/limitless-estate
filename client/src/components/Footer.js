import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      style={{ borderBottom: '2px solid black' }}
      className="footer p-2"
      id="myFooter"
    >
      <div className="container">
        <div className="row flex-column flex-sm-row flex-sm-nowrap justify-content-sm-around text-align-center">
          <div className="col-auto">
            <h5 className="h5-responsive">Get started</h5>
            <ul>
              <li key="fHome">
                <Link to="/">Home</Link>
              </li>
              <li key="fDl">
                <Link to="/resources">Downloads</Link>
              </li>
              <li key="fDl3">
                <Link to="/info/questionnaire">Questionnaire</Link>
              </li>
            </ul>
          </div>
          <div className="col-auto">
            <h5 className="h5-responsive">About us</h5>
            <ul>
              <li key="fCi">
                <Link to="/about">Company Information</Link>
              </li>
              <li key="fcon">
                <Link to="/info/contact">Contact us</Link>
              </li>
            </ul>
          </div>
          <div className="col-auto">
            <h5 className="h5-responsive">Support</h5>
            <ul>
              <li>
                <Link to="/resources/faq">FAQ</Link>
              </li>
              <li key="nuvu">
                <Link to="/info/investing/ira401k">NuView</Link>
              </li>
            </ul>
          </div>
          <div className="col-auto">
            <h5 className="h5-responsive">Legal</h5>
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

      <div className="mt-5 footer-copyright">
        <p>© 2018 Limitless Estates, LLC</p>
      </div>
    </footer>
  );
};
export default Footer;
