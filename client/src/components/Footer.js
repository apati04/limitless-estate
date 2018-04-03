import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from 'mdbreact';
const style = {
  footerStyle: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '258px',
    borderBottom: '2px solid black'
  }
};
const NavFooter = () => {
  return (
    <Footer style={style.footerStyle} className="footer" id="myFooter">
      <div className="container">
        <div className="row flex-column flex-sm-row flex-sm-nowrap justify-content-sm-around text-align-center">
          <div className="col-auto">
            <h5 className="h5-responsive">Get started</h5>
            <ul>
              <li key="fHome">
                <Link to="/">Home</Link>
              </li>
              <li key="fDl3">
                <Link to="/info/questionnaire">Questionnaire</Link>
              </li>
            </ul>
          </div>
          <div className="col-auto">
            <h5 className="h5-responsive">Legal</h5>
            <ul>
              <li key="lTOS">
                <Link to="/legal">Disclaimer</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center">
            <small className="text-center">
              *None of the information provided should not be seen as tax or
              legal advice or services, please consult a licensed professional.
            </small>
          </div>
        </div>
      </div>
      <div className="mt-2 d-flex flex-column footer-copyright">
        <p>© 2018 Limitless Estates, LLC</p>
      </div>
    </Footer>
  );
};
export default NavFooter;
