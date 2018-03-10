import React from 'react';

const PageBox = ({ title, description, bgColor, icon }) => {
  return (
    <div className="card mb-4 box-shadow">
      <img src="http://lorempixel.com/400/200/" alt="pix" className="card-img-top" />
      <div className=" card-body">
        <p className="card-text">224141</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button className="btn btn-sm btn-outline-secondary">download</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBox;
