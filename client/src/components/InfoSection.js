import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'mdbreact';
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
              <li className="list-group-item">More Control Over Returns</li>
              <li className="list-group-item">Cash Flow</li>
              <li className="list-group-item">
                Accelerated Depreciation &amp; Cost Segregation
              </li>
              <li className="list-group-item">Tax Benefits</li>
              <li className="list-group-item">Leveraging Debt</li>
              <li className="list-group-item">
                Inflation Induced Debt Destruction
              </li>
              <li className="list-group-item">
                Less Volatile than the Stock Market
              </li>
              <li className="list-group-item">Tenants Pay Down the Debt</li>
              <li className="list-group-item">Everyone Needs Housing</li>
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
            <Link to="/resources">
              <button
                size="lg"
                className="btn btn-block btn-outline-danger p-2 mt-4">
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
