import './CardStyle.css';
import React from 'react';

export default ({ headlineText, titleText, bodyText, photo, supportText }) => (
  <div className="row mb-2">
    <div className="col mb-6">
      <div className="card flex-md-row mb-4 box-shadow h-md-250">
        <div className="card-body d-flex flex-column align-items-start">
          <strong className="d-inline-block mb-2 text-primary">{titleText}</strong>
          <h3 className="mb-0">
            <a href="/f" className="text-dark">
              {headlineText}
            </a>
          </h3>
          <div className="mb-1 text-muted">{bodyText}</div>
          <div className="card-text mb-auto">{supportText}</div>
          <a href="/asdf">Continue Reading</a>
        </div>
        <img src={photo} width="250px" height="200px" alt="building" className="card-img-right flex-auto d-none d-lg-block" />
      </div>
    </div>
  </div>
);
