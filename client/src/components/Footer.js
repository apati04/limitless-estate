import React from 'react';
import { NavLink } from 'react-router-dom';
import { Footer, Container } from 'mdbreact';
const style = {
  footerStyle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: '60px'
  }
};
const NavFooter = () => {
  return (
    <footer style={style.footerStyle} className="primary-color w-100">
      {/* <div className="container">
        <div className="row flex-column flex-sm-row flex-sm-nowrap justify-content-sm-around text-align-center">
          <div className="col-auto">
            <h5 className="h5-responsive">Get started</h5>
            <ul>
              <li key="fHome">
                <NavLink to="/">Home</NavLink>
              </li>
              <li key="fDl3">
                <NavLink to="/info/questionnaire">Questionnaire</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-auto">
            <h5 className="h5-responsive">Legal</h5>
            <ul>
              <li key="lTOS">
                <NavLink to="/legal">Disclaimer</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div> */}

      <div className="row flex-center">
        <div className="col-12 d-flex flex-center">
          <p className="white-text">
            © 2018 Limitless Estates, LLC |{' '}
            <NavLink className="white-text" to="/legal">
              Disclaimer
            </NavLink>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default NavFooter;
