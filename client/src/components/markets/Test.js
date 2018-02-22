import React from 'react';
import { Link } from 'react-router-dom'
import PageHeader from '../PageHeader';
import RegisterModal from '../RegisterModal';
const property_img ="/img/columbus/image1.png";
const map_img ="/img/columbus/image2.png";
const acquisition_img = "/img/columbus/image3.png";
const rent_roll_img_1 = "/img/columbus/image4.png";
const rent_roll_img_2 = "/img/columbus/image5.png";
const income_expenses_img = "/img/columbus/image6.png";
const financial_projection_img = "/img/columbus/image7.png";
const equity_return_img = "/img/columbus/image8.png";
const projected_cash_flow_img = "/img/columbus/image10.png";
const acq_sum = "/img/columbus/acq_sum.png";
const Test = () => {
  const imgURL = '/img/pageheader.jpg';
  const description = "optional info"
  const title = "Columbus, OH"
  return (
    <div>
      <PageHeader title={title} bgPos='800px -430px' description={description} img={imgURL} />
    <section className="py-3">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-md-8 col-lg-7">
            <article>
            
              <h5>The Opportunity and Business Plan</h5>
              <p>
                 This property is a true value add with current average rents more than 30% below directly competitive comparable properties. A more aggressive approach to leasing will translate into rents at the higher end of Arlington Heights’ one bedroom in-place rent range. Sub-market vacancy of one-bedroom units is less than 5%. 
              </p>
              <p>   
                 There is constant renter demand from OSU students and medical center staff as well as millennials seeking moderately priced housing in the red-hot Grandview/Upper Arlington rental market. The building will thrive under the expertise of our property management company (Rickert Property Management).
              </p>
              <h5>About This Property</h5>
              <p>
                The subject property is a 58-unit multifamily walk-up apartment building located at 2201 Riverside Drive. 
                The Lot and building sit on 2.16 acres, 45,430 rentable square feet and 104 parking spaces. At three stories tall, the building itself totals 37,958 gross square feet. 2201 Riverside Drive was built in 1970 with an effervescent red brick exterior that adds vibrancy to the plush green way via Riverside Drive.
              </p>
              <p>The 58-unit multifamily walk-up apartment building breakdown:
                  
              </p>
              <ul>
                    <li>54 One Bedroom/One Bath</li>
                    <li>3 Two Bedroom/One Bath</li>
                    <li>1 Office</li>
              </ul>
              <h5>The Neighborhood</h5>
              <p>The subject property is located in The City of Upper Arlington an affluent first-ring suburb of Central Ohio. 
              </p>
              <p>Upper Arlington has a population of 34,465 people with a median household income of $102,094 almost twice the national average. 
              </p>
              <p>
                The property is directly across the street from the prestigious Scioto Country Club designed by acclaimed architect Donald Ross. The City enjoys a convenient location, with easy access to downtown Columbus, the Columbus airport and major highways. 
                </p>
                <p>
                  Value levels of development in Upper Arlington are above the median for Central Ohio, with numerous dwellings in excess of $1,000,000. The higher value dwellings are in close proximity to Scioto Country Club.
                  </p>
                  <p>
                    Along with having a low crime rate and strong sense of community, Upper Arlington also offers highly ranked services and institutions, such as its renowned schools and library system. 
                    </p>
                    <p>Its school district is one of the best in the region, with the high school receiving a gold medal designation from U.S. News and World Report’s 2017 “Best High Schools” report where it was also ranked the #12 high school in Ohio. The library system is consistently recognized as one of the best in the country among communities of a similar size.
                    </p>
              <h5>Acquisition Summary</h5>
              <p>
                Closing costs includes origination fees, appraisal, property inspection, legal fees, recording fees, and transfer taxes. The acquisition fee is payable to Limitless Estates, LLC at closing. Repair escrows are kept in the operating account until needed.
              </p>
              <h5>
                Equity Return At Resale
              </h5>
              <p>
                 We assume we will be able to sell the building at 50 basis points less than the going cap rate of 8% for a well-performing asset in this area of Columbus, OH. All investor capital is returned first before the remaining proceeds are split according to the investors’ equity share.
              </p>
            </article>
            <hr/>
              <small>
                  This material does not constitute an offer or a solicitation to purchase securities. An offer can only be made by the private placement memorandum. This document is an informational summary and is authorized for use only by sophisticated investors with an existing relationship with Limitless Estates, LLC and have been accepted as qualified and sophisticated investors by virtue of their experience and financial circumstance.
              </small>
            <hr/>
            <small className="text-muted">
                This information is authorized for use only by a limited number of persons with an existing relationship with Limitless Estates, LLC and who have been qualified and accepted as sophisticated investors by Limitless Estates, LLC, by furnishing proof of extensive investment experience. Neither the Securities and Exchange Commission nor any state securities commission has approved or disapproved of the real estate interests in this property package, or passed upon the adequacy or accuracy of this document. Any representation to the contrary is a criminal offense.
            </small>
            <hr/>
            <h5 className="mb-4">Sound like the property for you?</h5>
            <form className="d-flex justify-content-between align-items-center">
              <div>
                <Link to="/applyNow"><button className="btn btn-success">Apply now</button></Link>
              </div>
              <div>
                <Link to="/markets">Back to Markets</Link>
              </div>
            </form>
                    </div>
          <div className="col-12 col-md-4">
            <div className="card">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <div className="d-flex justify-content-between">
                    <div><i className="icon-tools mr-1"></i> Department</div>
                    <span>Engineering</span>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="d-flex justify-content-between">
                    <div><i className="icon-home mr-1"></i> Location</div>
                    <span>Melbourne, AU</span>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="d-flex justify-content-between">
                    <div><i className="icon-stopwatch mr-1"></i> Basis</div>
                    <span>Full time</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="card-header d-flex justify-content-between">
                <div>
                  <span className="h6">Development</span>
                  <span className="badge badge-secondary">6</span>
                </div>
             
              </div>
              <div className="card-body">
                <ul className="list-unstyled list-spacing-sm">
                  <li>
                    <i className="icon-text-document text-muted mr-1"></i>
                    <a href="#">Setting up API end-points</a>
                  </li>
                  <li>
                    <i className="icon-text-document text-muted mr-1"></i>
                    <a href="#">Importing contacts via CSV</a>
                  </li>
                  <li>
                    <i className="icon-text-document text-muted mr-1"></i>
                    <a href="#">Integrating your Gulp workflow</a>
                  </li>
                  <li>
                    <i className="icon-text-document text-muted mr-1"></i>
                    <a href="#">Forking a repo</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <span className="h6">Categories</span>
              </div>

              <div className="list-group list-group-flush">

                <a className="list-group-item d-flex justify-content-between" data-toggle="modal" href="#acuqisition">
                  <div>
                    <i className="far fa-list-alt"></i>
                    <span style={{marginLeft: '10px'}}>Aquisition Summary</span>
                  </div>
                </a>
                 <a className="list-group-item d-flex justify-content-between" data-toggle="modal" href="#incomeSummary">
                  <div>
                    <i className="far fa-list-alt"></i>
                    <span style={{marginLeft: '10px'}}>Income Expenses</span>
                  </div>
                </a>
               
              </div>
            <RegisterModal
              id="acuqisition"
              title="Acquisition Summary"
              body={
                <img src={acq_sum} className="img-fluid" />
              }
            />
            <RegisterModal
              id="incomeSummary"
              title="Income Expenses"
              body={
                <img src={income_expenses_img} />
              }
            />
            </div>
          </div>

        </div>
      </div>
    </section>
    

               





    </div>
  )
}
export default Test;