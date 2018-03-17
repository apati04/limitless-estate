// Template for Faq page and others
import React from 'react';

export default ({heading, mainText}) => {
    return (
      <div>
    <div className="jumbotron jumbotron-fluid">
      <div className="container text-center">
        <h1 className="display-4">{heading}</h1>
        <p className="lead mt-1">subtitle</p>
      </div>
    </div>
    <div className="p-2 container mb-5">
      <div className="row">
        <div className="col">
          <div className="mt-4">
          {mainText}
          </div>
        </div>
      </div>
    </div>
      </div>
    );
}
