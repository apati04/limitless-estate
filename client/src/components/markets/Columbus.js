import React from 'react';
import { Link } from 'react-router-dom'
import PageHeader from '../PageHeader'

const property_img = "/img/columbus/image1.png";
const map_img = "/img/columbus/image2.png";
const acquisition_img = "/img/columbus/image3.png";
const rent_roll_img_1 = "/img/columbus/image4.png";
const rent_roll_img_2 = "/img/columbus/image5.png";
const income_expenses_img = "/img/columbus/image6.png";
const financial_projection_img = "/img/columbus/image7.png";
const equity_return_img = "/img/columbus/image8.png";
const projected_cash_flow_img = "/img/columbus/image10.png";

const Columbus = () => {
  
    const imgURL = '/img/pageheader.jpg';
    const description = "optional info"
    const title = "Columbus, OH"
    return (
      <div>
        <PageHeader title={title} bgPos='800px -430px' description={description} img={imgURL} />
        <section className="py-3">
          <div style={{padding: '2%'}}>
            <div className="row">
              <div  className="col-md-2">
                <div className="card p-3">
                  <div className="card-body">
                    <h4>Building Type</h4>
                    <p>Walk-up Apartment Building</p>
                    <h4>Address</h4>
                    <p>2201 Riverside Drive</p>
                    <h4>City, State</h4>
                    <p>Columbus, Ohio</p>
                    <h4>Units: 58</h4>
                    <ul style={{ padding: 0, margin: 0, listStylePosition: 'inside' }}>
                      <li>54 One Bedroom/One Bath</li>
                      <li>3 Two Bedroom/One Bath</li>
                      <li>1 Office</li>
                    </ul>
                 
                    <h4>Parking Spaces</h4>
                    <p>104</p>
                    <h4>Stats:</h4>
                    <p>45,430 Rentable sq.ft.</p>
                    <p>104 parking spaces</p>
                    <p>Building is 3 stories stall, 37,958 sq.ft.</p>
                    <p>45,430 Rentable Sq. Ft.</p>
                    <p>Built in 1970</p>
                  </div>
                </div>
              </div>
              <div className="col-md-10">
                <div className="card p-3">
                  
                  <div className="card-body">
                    <div>
                      <div style={{ backgroundColor: 'black' }}>
                        <h4 style={{ padding: '10px' }} className="text-white text-left">THE OPPORTUNITY AND BUSINESS PLAN</h4>
                      </div>
                      <p className="lead">
                        This property is a true value add with current average rents more than 30% below directly competitive comparable properties. A more aggressive approach to leasing will translate into rents at the higher end of Arlington Heights’ one bedroom in-place rent range. Sub-market vacancy of one-bedroom units is less than 5%. There is constant renter demand from OSU students and medical center staff as well as millennials seeking moderately priced housing in the red-hot Grandview/Upper Arlington rental market. The building will thrive under the expertise of our property management company (Rickert Property Management).
                     </p>
                    </div>
                    <div>
                      <div style={{ backgroundColor: 'black' }}>
                        <h4 style={{ padding: '10px' }} className="text-white text-left">THE NEIGHBORHOOD</h4>
                      </div>
                      <p className="lead">
                        The subject property is located in The City of Upper Arlington an affluent first-ring suburb of Central Ohio. Upper Arlington has a population of 34,465 people with a median household income of $102,094 almost twice the national average. The property is directly across the street from the prestigious Scioto Country Club designed by acclaimed architect Donald Ross. The City enjoys a convenient location, with easy access to downtown Columbus, the Columbus airport and major highways. Value levels of development in Upper Arlington are above the median for Central Ohio, with numerous dwellings in excess of $1,000,000. The higher value dwellings are in close proximity to Scioto Country Club.  Along with having a low crime rate and strong sense of community, Upper Arlington also offers highly ranked services and institutions, such as its renowned schools and library system. Its school district is one of the best in the region, with the high school receiving a gold medal designation from U.S. News and World Report’s 2017 “Best High Schools” report where it was also ranked the #12 high school in Ohio. The library system is consistently recognized as one of the best in the country among communities of a similar size.
                      </p>
                    </div>
                    <div>
                        <div style={{ backgroundColor: 'black' }}>
                          <h4 style={{ padding: '10px' }} className="text-white text-left">ACQUISITION SUMMARY</h4>
                        </div>

                        <p className="lead">
                          Closing costs includes origination fees, appraisal, property inspection, legal fees, recording fees, and transfer taxes. The acquisition fee is payable to Limitless Estates, LLC at closing. Repair escrows are kept in the operating account until needed.
                      </p>
                        <img src="/img/columbus/image3.png" className="img-fluid" alt="property" style={{ marginTop: "20px" }} />
                    </div>
                    <div>
                      <div style={{ backgroundColor: 'black' }}>
                        <h4 style={{ padding: '10px' }} className="text-white text-left">SELLER-DISCLOSED FINANCIALS</h4>
                      </div>
                      <p>Rent Roll</p>
                      <img src={rent_roll_img_1} className="img-fluid" alt="property" style={{ marginLeft: "18px" }} />
                      <img src={rent_roll_img_2} className="img-fluid" alt="property" />
                      <p>Income and Expenses - Actual</p>
                      <img src={income_expenses_img} className="img-fluid" alt="property" />
                    </div>
                     
                    <div>
                      <div style={{ backgroundColor: 'black' }}>
                        <h4 style={{ padding: '10px' }} className="text-white text-left">FINANCIAL PROJECTIONS</h4>
                      </div>

                      <p className="lead">
                        Here is the 7 Year P&L Projection:
                      </p>
                      <img src={financial_projection_img} className="img-fluid" alt="property" />
                    </div>
                    <div>
                      <small>
                        NOTE: The rates of return displayed on this page are only projections, and are not guarantees of any sort. Actual returns may vary widely, due to many economic and marketplace factors beyond our control.
                      </small>
                    </div>

                    <div>
                      <div style={{ backgroundColor: 'black' }}>
                        <h4 style={{ padding: '10px' }} className="text-white text-left">EQUITY RETURN AT RESALE</h4>
                      </div>
                      <p className="lead">
                           We assume we will be able to sell the building at 50 basis points less than the going cap rate of 8% for a well-performing asset in this area of Columbus, OH. All investor capital is returned first before the remaining proceeds are split according to the investors’ equity share.
                      </p>
                      <img src={equity_return_img} className="img-fluid" alt="property" />
                      <img src={projected_cash_flow_img} className="img-fluid" alt="property" />
                    </div>
                    <div>
                      <h6 style={{ fontWeight: "100" }}>
                        Questions should be directed to Limitless Estates, LLC, c/o Kyle Mitchell, (562) 833-5010 or kylemitchellrea@gmail.com.
          </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  
}

export default Columbus;