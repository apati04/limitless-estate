import React from 'react';

const bgimage = 'https://i.imgur.com/YwyAr44.jpg';
const Podcast = () => {
  const content = 'podcast featuring Kyle and Lalita';
  return (
    <div className="container-fluid p-3 no-gutters">
      <div className="row no-gutters d-flex justify-content-between align-items-center">
        <div className="col-md-7">
          <img src={bgimage} className="d-block img-fluid" />
        </div>
        <div className="col-md-5 text-center">
          <p className="lead">{content.toUpperCase()}</p>
          <p className="lead">COMING SOON</p>
        </div>
      </div>
    </div>
  );
};

export default Podcast;
