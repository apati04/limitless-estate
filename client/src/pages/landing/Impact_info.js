import React from 'react';
import { Button } from 'mdbreact';
import { NavLink } from 'react-router-dom';
export default () => {
  return (
    <div>
      <section className="p-5 bg-light-blue">
        <div className="row">
          <div className="col">
            <div className="container pt-5">
              <h1 className="display-4 text-center">Impact Investing</h1>
              <h3 className="lead text-center">
                Impact investing enables investors to put their money to good
                use in meaningful, intelligent ventures that provide both a
                financial AND a social return on their investment.
              </h3>
            </div>
            <div className="text-center">
              <NavLink to="/resources/impactinvesting">
                <Button className="unique" size="lg">
                  Learn More
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
