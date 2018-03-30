import React from 'react';
import PageHeader from '../components/PageHeader';
import IconTemplate from '../components/IconTemplate';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div data-wow-delay="1s" className="animated fadeIn">
      <PageHeader title="Resources" bgRepeat="no-repeat" img="" />
      <div
        style={{ minHeight: '500px', marginTop: '30px' }}
        className="container p-4 mt-4"
      >
        <div className="row">
          <div className="col-12">
            <div className="d-flex border-bottom">
              <h2>Downloads</h2>
              <i
                style={{ fontSize: '36px' }}
                className="ml-3 fas fa-download mb-2"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-2">
            <p className="lead">Sample Deal Packages</p>
            <ul style={{ marginTop: '10px' }}>
              <li className="mt-2">
                <span>
                  <i style={{ fontSize: '24px' }} className="far fa-file-pdf" />
                </span>
                <a
                  className="ml-2"
                  href="https://www.dropbox.com/s/0ua23v4ny7n0av5/SDP_Columbus.pdf?dl=1"
                >
                  Columbus, OH
                </a>
              </li>
              <li className="mt-2">
                <span>
                  <i style={{ fontSize: '24px' }} className="far fa-file-pdf" />
                </span>
                <a
                  className="ml-2"
                  href="https://www.dropbox.com/s/xde07c46jyd07fm/SDP_Detroit.pdf?dl=1"
                >
                  Ecorse, MI
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <div className="d-flex border-bottom">
              <h2>Helpful Links</h2>
              <i
                style={{ fontSize: '36px' }}
                className="ml-3 fas fa-external-link-alt mb-2"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ul style={{ marginTop: '10px' }}>
              <li>
                <a href="https://udirectira.com/">
                  Learn about how you can invest using your 401k or IRA
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-5 text-left">
            <Link to="/" className="btn btn-outline-danger">
              &laquo; Back To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
