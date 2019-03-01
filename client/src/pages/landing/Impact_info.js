import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mask } from 'mdbreact';
export default () => {
  let impactImg = 'https://i.imgur.com/kC8zbBM.jpg';
  return (
    <div
      style={{
        backgroundImage: `url(${impactImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100%',
        minHeight: '20em'
      }}
      className="view hm-black-light"
    >
      <div className="dark-overlay">
        <Mask className="flex-column d-flex justify-content-center align-items-center flex-1">
          <div
            style={{ color: 'white' }}
            className="w-75 text-center text-justify-center text-md-center"
          >
            <h1 className="font-weight-bold text-white mb-3">
              Impact Investing
            </h1>
            <h4 className="h4-responsive mb-3 white-text">
              Impact investing enables investors to put their money to good use
              in meaningful, intelligent ventures that provide both a financial
              AND a social return on their investment.
            </h4>
            <NavLink
              style={{ borderRadius: '99px' }}
              className="btn btn-primary"
              to="/resources/impactinvesting"
            >
              Impact Investing
            </NavLink>
          </div>
        </Mask>
      </div>
    </div>
  );
};
