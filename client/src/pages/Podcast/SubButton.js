import React from 'react';
import { MDBListGroupItem } from 'mdbreact';
const SubButton = ({ appLogo, podcastUrl, alt }) => {
  return (
    <MDBListGroupItem
      style={{ border: 0 }}
      className="d-flex justify-content-start align-items-center mb-1"
    >
      <a
        id="podcastlink-id"
        href={podcastUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="img-fluid"
          style={{ maxHeight: '40px', width: '40px' }}
          src={appLogo}
          alt={alt}
        />
        <p
          style={{
            color: 'rgb(33, 35, 37)',
            fontWeight: '500',
            display: 'inline',
            letterSpacing: '0.6px'
          }}
          className="ml-3"
        >
          {alt}
        </p>
      </a>
    </MDBListGroupItem>
  );
};
// ;

export default SubButton;
