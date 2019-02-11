import React from 'react';

const Legal = () => {
  return (
    <div data-wow-delay="1s" className="animated fadeIn">
      <div className="container" style={{ marginTop: '10px' }}>
        <div className="mb-5 p-5 row">
          <div className="col-12">
            <h2
              className="display-4"
              style={{ marginBottom: '20px', borderBottom: '1px solid black' }}
            >
              Terms and Disclaimers
            </h2>
            <div>
              <h4>
                None of the information provided should not be seen as tax or
                legal advice or services, please consult a licensed
                professional.
              </h4>
              <h2>No Offer of Securities—Disclosure of Interests</h2>

              <div>
                Under no circumstances should any material at this site be used
                or considered as an offer to sell or a solicitation of any offer
                to buy an interest in any investment. Any such offer or
                solicitation will be made only by means of the Confidential
                Private Offering Memorandum relating to the particular
                investment. Access to information about the investments are
                limited to investors who either qualify as accredited investors
                within the meaning of the Securities Act of 1933, as amended, or
                those investors who generally are sophisticated in financial
                matters, such that they are capable of evaluating the merits and
                risks of prospective investments.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
