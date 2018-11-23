import React from "react";
import { Link } from "react-router-dom";
/*
-More Control over Returns
-Cash Flow
Accelerated Depreciation &amp; Cost Segregation
Tax Benefits
Leveraging Debt

*/
const InfoSection = () => {
  return (
    <section id="info" className="rgba-white-slight">
      <div
        className="container"
        style={{ paddingTop: "30px", paddingBottom: "60px" }}
      >
        <div className="row align-items-center justify-content-center text-left">
          <div className="col-12 col-md-6">
            <ul className="p-0 list-group-flush" style={{ fontSize: "18px" }}>
              <li className="list-group-item">Appreciation</li>
              <li className="list-group-item">Cash Flow</li>
              <li className="list-group-item">Tax Benefits</li>
              <li className="list-group-item">Leveraging Debt</li>
              <li className="list-group-item">Business Backed by Hard Asset</li>
              <li className="list-group-item">Tenants Pay Down the Debt</li>
              <li className="list-group-item">Housing is a necessity</li>
              <li className="list-group-item">
                National Housing Shortage of 3.9 million units
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6">
            <img
              src="https://i.imgur.com/vUNgWTJ.jpg"
              className="img-fluid d-none d-md-block w-100"
              alt=""
            />
            <div className="px-2">
              <Link to="/resources">
                <button
                  size="lg"
                  style={{ borderRadius: "99px" }}
                  className="h5-responsive btn btn-block btn-outline-danger p-2 mt-4"
                >
                  Learn More on Why to invest in multifamily
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
