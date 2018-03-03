import React from 'react';
import PageHeader from '../components/PageHeader';
import IconTemplate from "../components/IconTemplate";
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <PageHeader title="Resources" bgRepeat="no-repeat" img=""/>
      <div className="container">
        <div className="row">
          <ul style={{ marginTop: "10px" }}>
            <h4 className="display-4"><i className="fas fa-home mb-2"/> Sample Deal Packages</h4>
            <li><a href="https://www.dropbox.com/s/0ua23v4ny7n0av5/SDP_Columbus.pdf?dl=1">Columbus, OH</a></li>
            <li><a href="https://www.dropbox.com/s/xde07c46jyd07fm/SDP_Detroit.pdf?dl=1">Ecorse, MI</a></li>
          </ul>
        </div>
        <div className="row">
          <ul style={{ marginTop: "10px" }}>
            <h4 className="display-4"><i className="fas fa-link mb-2"/> Additional Information</h4>
            <li><a href="https://udirectira.com/">Learn about how you can invest using your 401k or IRA</a></li>
          </ul>
        </div>
        <div className="text-right">
          <Link to="/" className="btn btn-outline-danger">BACK TO HOME</Link>
        </div>
      </div>
    </div>
  );
};
