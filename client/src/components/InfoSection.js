import React from 'react';
import { Link } from 'react-router-dom';

const InfoSection = () => {
  return (
    <section id="info" className="py-3">
      <div className="container">
        <div className="row">
          <div style={{ height: '320px' }} className="col col-md-12 align-self-center text-center mt-5">
            <h3>Your Next Chapter Starts With Us!</h3>
            <p>Check out the opportunities that are waiting for you</p>
            <div>
              <Link to="/markets">
                <button className="btn btn-outline-danger mt-2">Sample Deal Packages</button>
              </Link>
            </div>
          </div>
          <div className="col col-md-6 d-none d-lg-block">
            <img src="/img/chart2.jpg" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
