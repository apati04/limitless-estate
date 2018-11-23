import React from "react";
import { NavLink } from "react-router-dom";
import { View, Mask, Button } from "mdbreact";
export default () => {
  let impactImg = "https://i.imgur.com/kC8zbBM.jpg";
  return (
    <div
      style={{
        backgroundImage: `url(${impactImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100%",
        minHeight: "20" + "em"
      }}
      className="view hm-black-light"
    >
      <div className="dark-overlay">
        <Mask className="flex-column d-flex justify-content-center align-items-center">
          <div
            style={{ color: "white" }}
            className="w-75 text-center text-justify-center text-md-center"
          >
            <h1 className="h1-responsive font-weight-bold text-white mb-3">
              Impact Investing
            </h1>
            <p className="mb-3 h3-responsive white-text">
              Impact investing enables investors to put their money to good use
              in meaningful, intelligent ventures that provide both a financial
              AND a social return on their investment.
            </p>
            <NavLink
              style={{ borderRadius: "99px" }}
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
