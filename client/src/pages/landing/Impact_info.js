import React from 'react';
import { Button } from 'mdbreact';
import { NavLink } from 'react-router-dom';
export default () => {
  return (
    <section style={{ padding: '50px' }} className="color-block mdb-color">
      <div className="h-100 container-fluid ">
        <div className="row no-gutters text-center justify-content-around align-items-stretch">
          <div className="col-12">
            <h1 className="h1-responsive font-weight-bold cyan-text mb-3 text-center">
              Impact Investing
            </h1>
          </div>
          <div className="col-12">
            <h3 className="h3-responsive white-text">
              Impact investing enables investors to put their money to good use
              in meaningful, intelligent ventures that provide both a financial
              AND a social return on their investment.
            </h3>
          </div>
          <div className="col-12 text-center">
            <NavLink to="/resources/impactinvesting">
              <Button outline color="cyan" size="lg">
                Learn More
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};
