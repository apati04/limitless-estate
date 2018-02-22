import React from 'react';
import { Link } from 'react-router-dom'
import PageHeader from '../PageHeader';
import RegisterModal from '../RegisterModal';

const property_img = "/img/ecorse/image1.png";
const map_img = "/img/ecorse/image2.png";
const acquisition_img = "/img/ecorse/image3.png";
const rent_roll_img = "/img/ecorse/image4.png";
const income_expenses_img = "/img/ecorse/image5.png";
const financial_projection_img = "/img/ecorse/image6.png";
const equity_return_img = "/img/ecorse/image7.png";
const projected_cash_flow_img = "/img/ecorse/image8.png";

const Ecorse = () => {

  const imgURL = '/img/ecorse/ec2.jpg';
  const description = "Ecorse, MI"
  const title = "4471 & 4581 High Street"
  return (
    <div>
      <PageHeader title={title} bgPos='800px -430px' description={description} img={imgURL} />
      <section className="py-3">
        <div className="container">
          <div className="row justify-content-between">
            {/* main body section */}
            <div className="col-12 col-md-8 col-lg-7">
              <article>
                {/* section one */}
                <h5>The Opportunity and Business Plan</h5>
                {/* section two */}
                <h5>About this Propery</h5>
                {/* section three */}
                <h5>The Neighboorhood</h5>
              </article>
              <hr />
              <small>
                This material does not constitute an offer or a solicitation to purchase securities. An offer can only be made by the private placement memorandum. This document is an informational summary and is authorized for use only by sophisticated investors with an existing relationship with Limitless Estates, LLC and have been accepted as qualified and sophisticated investors by virtue of their experience and financial circumstance.
              </small>
              <hr />
              <small className="text-muted">
                This information is authorized for use only by a limited number of persons with an existing relationship with Limitless Estates, LLC and who have been qualified and accepted as sophisticated investors by Limitless Estates, LLC, by furnishing proof of extensive investment experience. Neither the Securities and Exchange Commission nor any state securities commission has approved or disapproved of the real estate interests in this property package, or passed upon the adequacy or accuracy of this document. Any representation to the contrary is a criminal offense.
              </small>
              <hr />
              <h5 className="mb-4">Sound like the right investment for you?</h5>
              <form className="d-flex justify-content-between align-items-center">
                <div>
                  <Link to="/applyNow"><button className="btn btn-success">Contact Us</button></Link>
                </div>
                <div>
                  <Link to="/markets">Back To Markets</Link>
                </div>
              </form>
            </div>
            {/* SideBar */}
            <div className="col-12 col-md-4">
            
            </div>
            {/* Modal Registration Below */}

          </div>
        </div>
      </section>
    </div>
  )

}

export default Ecorse;