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
          <ul className="list-group" style={{ marginTop: "10px" }}>
            <h4 className="display-4"><i className="fas fa-home mb-2"/> PACKAGES</h4>
            <a href="#" className="list-group-item list-group-item-action">Columbus, OH</a>
            <a href="#" className="list-group-item list-group-item-action">Ecorse, MI</a>
          </ul>
        </div>
        <div className="text-right">
          <Link to="/" className="btn btn-outline-danger">BACK TO HOME</Link> 
        </div>
      </div>
    </div>
  );
};
