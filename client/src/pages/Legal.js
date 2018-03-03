import React from 'react';

const Legal = () => {
  return (
    <div className="container" style={{ marginTop: "10px" }}>
      <h1 className="display-4" style={{ marginBottom: "20px" }}>Legal</h1>
      <p className="lead text-danger">
        None of the information provided should not be seen as tax or legal advice or services, please consult a licensed professional.
      </p>
      <hr/>
      <small>
        This material does not constitute an offer or a solicitation to purchase securities. An offer can only
        be made by the private placement memorandum. This document is an informational summary and is
        authorized for use only by sophisticated investors with an existing relationship with Limitless
        Estates, LLC and have been accepted as qualified and sophisticated investors by virtue of their
        experience and financial circumstance.
      </small>
      <hr />
      <small className="text-muted">
        This information is authorized for use only by a limited number of persons with an existing
        relationship with Limitless Estates, LLC and who have been qualified and accepted as sophisticated
        investors by Limitless Estates, LLC, by furnishing proof of extensive investment experience. Neither
        the Securities and Exchange Commission nor any state securities commission has approved or disapproved
        of the real estate interests in this property package, or passed upon the adequacy or accuracy of this
        document. Any representation to the contrary is a criminal offense.
      </small>
      <hr />
    </div>
  );
}

export default Legal;
