import React from 'react';
import { Link } from 'react-router-dom';

const InfoSection = () => {
  return (
    <section id="info" className="py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6 align-self-center">
            <h3>Your Next Chapter Starts With Us!</h3>
            <p>Check out the opportunities that are waiting for you</p>
            <Link to="/markets">
              <button className="btn btn-outline-dark btn-lg mt-5">Sample Deal Packages</button>
            </Link>
          </div>
          <div className="col-md-6">
            <img src="/img/chart2.jpg" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
