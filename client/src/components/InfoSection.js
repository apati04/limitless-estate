import React from 'react';
import { Link } from 'react-router-dom';
/*
-More Control over Returns
-Cash Flow
Accelerated Depreciation &amp; Cost Segregation
Tax Benefits
Leveraging Debt

*/
const InfoSection = () => {
  return (
    <section id="info" className="p-5 rgba-white-slight">
      <div className="container">
        <div className="row align-items-center justify-content-center text-left">
          <div className="col-12 col-md-6">
            <ul className="p-0 list-group-flush">
              <li className="list-group-item">
                <div className="h5-responsive">Appreciation</div>
              </li>
              <li className="list-group-item">
                <div className="h5-responsive">More Control Over Returns</div>
              </li>
              <li className="list-group-item">
                <div className="h5-responsive"> Cash Flow</div>
              </li>
              <li className="list-group-item">
                <div className="h5-responsive">
                  Accelerated Depreciation &amp; Cost Segregation
                </div>
              </li>
              <li className="list-group-item">
                <div className="h5-responsive">Tax Benefits</div>
              </li>
              <li className="list-group-item h5-responsive">Leveraging Debt</li>
              <li className="list-group-item">
                <div className="h5-responsive">
                  Inflation Induced Debt Destruction
                </div>
              </li>
              <li className="list-group-item">
                <div className="h5-responsive">
                  Less Volatile than the Stock Market
                </div>
              </li>
              <li className="list-group-item">
                <div className="h5-responsive">Tenants Pay Down the Debt </div>
              </li>
              <li className="list-group-item">
                <div className="h5-responsive">Everyone Needs Housing </div>
              </li>
              <li className="list-group-item">
                <div className="h5-responsive">
                  National Housing Shortage of 3.9 million units
                </div>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6">
            <img
              src="https://i.imgur.com/vUNgWTJ.jpg"
              className="img-fluid d-none d-md-block w-100"
              alt=""
            />
            <Link to="/resources">
              <button
                size="lg"
                className="h5-responsive btn btn-block btn-outline-danger p-2 mt-4"
              >
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
