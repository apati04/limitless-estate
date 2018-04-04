import React from 'react';

const Legal = () => {
  return (
    <div data-wow-delay="1s" className="animated fadeIn">
      <div className="container" style={{ marginTop: '10px' }}>
        <div className="mt-5 mb-5 p-5 row">
          <div className="col-12">
            <h1 className="display-4" style={{ marginBottom: '20px' }}>
              Legal
            </h1>
            <p className="lead text-danger">
              None of the information provided should not be seen as tax or
              legal advice or services, please consult a licensed professional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
