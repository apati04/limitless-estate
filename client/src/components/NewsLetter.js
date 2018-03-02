import React from 'react';
import { Link } from 'react-router-dom';

const NewsLetter = () => {
  return (
    <section style={{ marginBottom: '-20px' }} id="newsletter" className="text-center p-5 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="display-4">Subcribe to our Newsletter</h1>
            <form className="form-inline justify-content-center">
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" placeholder="Enter Name" />
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input type="email" className="form-control mb-2 mr-sm-2 mb-sm-0" placeholder="Enter Email" />
              <div>
                <Link to="/" className="btn btn-outline-light btn-block">
                  Subscribe
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NewsLetter;
