import React from 'react';

const SubButton = ({ logo, podcastUrl, alt }) => {
  return (
    <div className="view">
      <div>
        <a href={podcastUrl} target="_blank" rel="nofollow noreferrer">
          <img className="img-fluid mb-3" src={logo} alt={alt} />
          <div className="mask rgba-white-slight" />
        </a>
      </div>
    </div>
  );
};

export default SubButton;
