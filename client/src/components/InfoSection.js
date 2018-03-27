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
    <section
      style={{ height: 50 + 'em' }}
      id="info"
      className="rgba-white-slight container d-flex justify-content-between align-items-center"
    >
      <div className="row d-flex justify-content-end align-items-end">
        <div className="col-lg-4">
          <img
            src="https://i.imgur.com/vUNgWTJ.jpg"
            className="d-none d-lg-block img-fluid w-100"
            alt=""
          />
          <div style={{ visibility: 'hidden' }} className="d-none d-lg-block">
            <button
              size="lg"
              className="d-none d-lg-block btn btn-block btn-outline-danger mt-4"
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 align-bottom w-100 h-100">
          <ListGroup>
            <ListGroupItem className="lead">
              More Control Over Returns
            </ListGroupItem>
            <ListGroupItem className="lead">Cash Flow</ListGroupItem>
            <ListGroupItem className="lead">
              Accelerated Depreciation &amp; Cost Segregation
            </ListGroupItem>
            <ListGroupItem className="lead">Tax Benefits</ListGroupItem>
            <ListGroupItem className="lead">Leveraging Debt</ListGroupItem>
          </ListGroup>
          <div style={{ visibility: 'hidden' }}>
            <button size="lg" className="btn btn-block btn-outline-danger mt-4">
              Learn More
            </button>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 align-bottom w-100 h-100">
          <ListGroup>
            <ListGroupItem className="lead">
              Inflation Induced Debt Destruction
            </ListGroupItem>
            <ListGroupItem className="lead">
              Less Volatile than the Stock Market
            </ListGroupItem>
            <ListGroupItem className="lead">
              Tenants Pay Down the Debt
            </ListGroupItem>
            <ListGroupItem className="lead">
              Everyone Needs Housing
            </ListGroupItem>
            <ListGroupItem className="lead">
              National Housing Shortage of 3.9 million units
            </ListGroupItem>
          </ListGroup>
          <div>
            <Link to="/resources">
              <button
                size="lg"
                className="btn btn-block btn-outline-danger mt-4"
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
