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
      className="rgba-white-slight d-flex container align-items-center"
    >
      <div className="row w-100 justify-content-around">
        <div className="col">
          <img
            src="https://i.imgur.com/vUNgWTJ.jpg"
            className="d-none d-lg-block img-fluid"
            alt=""
          />
        </div>
        <div className="col">
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

          <div className="text-center">
            <Link to="/resources">
              <button
                size="lg"
                className="align-self-bottom btn btn-outline-danger mt-4"
              >
                Learn More >>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
