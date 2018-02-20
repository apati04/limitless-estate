import React from "react";

const property_img ="/img/columbus/image1.png";
const map_img ="/img/columbus/image2.png";
const acquisition_img = "/img/columbus/image3.png";
const rent_roll_img_1 = "/img/columbus/image4.png";
const rent_roll_img_2 = "/img/columbus/image5.png";
const income_expenses_img = "/img/columbus/image6.png";
const financial_projection_img = "/img/columbus/image7.png";
const equity_return_img = "/img/columbus/image8.png";
const projected_cash_flow_img = "/img/columbus/image10.png";


const Columbus = () => {
  return (
    <div className="d-flex justify-content-center align-items-center container">
      <div>

        <div style={{padding: "80px"}} className="text-center">
          <div>
            <h1 className="display-4"><i className="fas fa-home"></i> 2201 Riverside Drive</h1>
            <h1>Columbus, OH</h1>
            <h3>58 Units | $2.25M</h3>
          </div>
          <div style={{marginTop: "20px"}}>
            <img src={property_img} className="img-fluid" alt="property" style={{border: "2px solid black"}}/>
          </div>
          <div>
            <div style={{margin: "20px 0 20px 0", fontSize: "12px"}}>
              <small className="text-muted">
                This information is authorized for use only by a limited number of persons with an existing relationship with Limitless Estates, LLC and who have been qualified and accepted as sophisticated investors by Limitless Estates, LLC, by furnishing proof of extensive investment experience. Neither the Securities and Exchange Commission nor any state securities commission has approved or disapproved of the real estate interests in this property package, or passed upon the adequacy or accuracy of this document. Any representation to the contrary is a criminal offense.
              </small>
            </div>
            <small style={{fontWeight: "100"}}>
              This material does not constitute an offer or a solicitation to purchase securities. An offer can only be made by the private placement memorandum. This document is an informational summary and is authorized for use only by sophisticated investors with an existing relationship with Limitless Estates, LLC and have been accepted as qualified and sophisticated investors by virtue of their experience and financial circumstance.
            </small>
          </div>
        </div>

        <hr/>
        <div style={{padding: "80px"}}>
          <h1 className="text-muted lead" style={{fontWeight: "bold"}}>EXECUTIVE SUMMARY</h1>
          <h6 style={{fontWeight: "100"}}>
            Limitless Estates, LLC a California Limited Liability company with offices in Long Beach, CA, is arranging for the acquisition of undivided real estate interests in the above property by a limited number of sophisticated and qualified investors. The property consists of 58 units. The purchase price is $2.25M.

            We are seeking a total investment of $900,000 with a minimum of $50,000 per investor. Investors receive 70% equity with projected average annual returns of 12%-17%. Cash flow distributions are made at the end of each calendar.

            Investors should be prepared to leave their money in for a minimum of 7 years, even though there is a possibility to re-finance and repay the investor’s principal before then. Investors have the option of getting cashed out of their investment between year 4 and 5 at 90% of fair market value of their shares. If we re-finance or sell the property, investors first receive their principal back, then receive 70% of any profits.

            Please see below for more information about the property, its current performance, our strategy to increase income and our financial projections.
          </h6>
        </div>
        <hr/>

        <div style={{padding: "80px"}} className="row">
          <div className="col-lg-6">
            <h1 className="text-muted lead" style={{fontWeight: "bold"}}>ABOUT THIS PROPERTY</h1>
            <h6 style={{fontWeight: "100"}}>
              The subject property is a 58-unit multifamily walk-up apartment building located at 2201 Riverside Drive. The building is comprised of 3 Two Bedroom/One Bath, 1 Office, and 54 One Bedroom/One Bath units. The Lot and building sit on 2.16 acres, 45,430 rentable square feet and 104 parking spaces. At three stories tall, the building itself totals 37,958 gross square feet. 2201 Riverside Drive was built in 1970 with an effervescent red brick exterior that adds vibrancy to the plush green way via Riverside Drive.
            </h6>
          </div>
          <div className="col-lg-6">
            <img src={map_img} className="img-fluid" alt="property" style={{marginTop: "20px", border: "2px solid black"}}/>
          </div>
        </div>
        <hr/>

        <div style={{padding: "80px"}}>
          <div>
            <h1 className="text-muted lead" style={{fontWeight: "bold"}}>THE OPPORTUNITY AND BUSINESS PLAN</h1>
            <h6 style={{fontWeight: "100"}}>
              This property is a true value add with current average rents more than 30% below directly competitive comparable properties. A more aggressive approach to leasing will translate into rents at the higher end of Arlington Heights’ one bedroom in-place rent range. Sub-market vacancy of one-bedroom units is less than 5%. There is constant renter demand from OSU students and medical center staff as well as millennials seeking moderately priced housing in the red-hot Grandview/Upper Arlington rental market. The building will thrive under the expertise of our property management company (Rickert Property Management).
            </h6>
          </div>
          <div style={{marginTop: "30px"}}>
            <h4 className="lead">The Neighborhood</h4>
            <h6 style={{fontWeight: "100"}}>
              The subject property is located in The City of Upper Arlington an affluent first-ring suburb of Central Ohio. Upper Arlington has a population of 34,465 people with a median household income of $102,094 almost twice the national average. The property is directly across the street from the prestigious Scioto Country Club designed by acclaimed architect Donald Ross. The City enjoys a convenient location, with easy access to downtown Columbus, the Columbus airport and major highways. Value levels of development in Upper Arlington are above the median for Central Ohio, with numerous dwellings in excess of $1,000,000. The higher value dwellings are in close proximity to Scioto Country Club.  Along with having a low crime rate and strong sense of community, Upper Arlington also offers highly ranked services and institutions, such as its renowned schools and library system. Its school district is one of the best in the region, with the high school receiving a gold medal designation from U.S. News and World Report’s 2017 “Best High Schools” report where it was also ranked the #12 high school in Ohio. The library system is consistently recognized as one of the best in the country among communities of a similar size.
            </h6>
          </div>
        </div>
        <hr/>

        <div style={{padding: "80px"}} className="row">
          <div className="col-lg-6">
            <h1 className="text-muted lead" style={{fontWeight: "bold"}}>ACQUISITION SUMMARY</h1>
            <h6 style={{fontWeight: "100"}}>
              Closing costs includes origination fees, appraisal, property inspection, legal fees, recording fees, and transfer taxes. The acquisition fee is payable to Limitless Estates, LLC at closing. Repair escrows are kept in the operating account until needed.
            </h6>
          </div>
          <div className="col-lg-6">
            <img src={acquisition_img} className="img-fluid" alt="property" style={{marginTop: "20px"}}/>
          </div>
        </div>
        <hr/>

        <div style={{padding: "80px"}}>
          <h1 className="text-muted lead" style={{fontWeight: "bold"}}>SELLER-DISCLOSED FINANCIALS</h1>
          <p>Rent Roll</p>
          <img src={rent_roll_img_1} className="img-fluid" alt="property" style={{marginLeft: "18px"}}/>
          <img src={rent_roll_img_2} className="img-fluid" alt="property"/>
          <p>Income and Expenses - Actual</p>
          <img src={income_expenses_img} className="img-fluid" alt="property"/>
        </div>
        <hr/>

        <div style={{padding: "80px"}}>
          <div>
            <h1 className="text-muted lead" style={{fontWeight: "bold"}}>FINANCIAL PROJECTIONS</h1>
            <p>Here is the 7 Year P&L Projection:</p>
            <img src={financial_projection_img} className="img-fluid" alt="property"/>
          </div>
          <div style={{marginTop: "20px"}}>
            <small className="text-muted">
              NOTE: The rates of return displayed on this page are only projections, and are not guarantees of any sort. Actual returns may vary widely, due to many economic and marketplace factors beyond our control.
            </small>
          </div>
        </div>
        <hr/>

        <div style={{padding: "80px"}}>
          <div style={{marginBottom: "20px"}}>
            <h1 className="text-muted lead" style={{fontWeight: "bold"}}>EQUITY RETURN AT RESALE</h1>
            <h6 style={{fontWeight: "100"}}>
              We assume we will be able to sell the building at 50 basis points less than the going cap rate of 8% for a well-performing asset in this area of Columbus, OH. All investor capital is returned first before the remaining proceeds are split according to the investors’ equity share.
            </h6>
            <img src={equity_return_img} className="img-fluid" alt="property"/>
          </div>
          <img src={projected_cash_flow_img} className="img-fluid" alt="property"/>
        </div>
        <hr/>

        <div style={{padding: "80px"}}>
          <h1 className="text-muted lead" style={{fontWeight: "bold"}}>MANAGEMENT AND ADVISORS</h1>
          <div className="row text-center" style={{marginTop: "20px"}}>
            <div className="col-lg-4">
              <img src="http://via.placeholder.com/140x140" className="rounded-circle img-fluid" alt="headshot" style={{marginBottom: "20px"}}/>
              <p style={{fontWeight: "100"}} className="lead">Kyle Mitchell, President, Managing Member.</p>
              <p><small>Kyle has personally invested in income producing real estate valued at over $1.2M in multiple states throughout the West Coast and Mid West.  He continues to actively seek investments in apartment communities in multiple states.  In addition to his own investing activities, Kyle is also a California licensed Realtor. His expertise in all facets of real estate investing gives us, and our investing partners, confidence that all of our acquisitions are carefully evaluated so that we achieve consistent returns for our investors.</small>
              </p>
            </div>
            <div className="col-lg-4">
              <img src="http://via.placeholder.com/140x140" className="rounded-circle img-fluid" alt="headshot" style={{marginBottom: "20px"}}/>
              <p style={{fontWeight: "100"}} className="lead">Lalita Patipaksiri, Managing Member</p>
              <p><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget sapien ut neque aliquam fermentum. Donec et elit at dui vulputate ullamcorper eu ac dui. Duis quis ligula vel libero convallis aliquam. Etiam ac turpis et nisl suscipit vestibulum faucibus a diam. Integer aliquet vulputate cursus. Aenean sed libero in lectus imperdiet placerat. Phasellus eu maximus ex, sed laoreet ex. Duis consectetur massa quis nibh viverra, non fringilla arcu egestas.</small>
              </p>
            </div>
            <div className="col-lg-4">
              <img src="http://via.placeholder.com/140x140" className="rounded-circle img-fluid" alt="headshot" style={{marginBottom: "20px"}}/>
              <p style={{fontWeight: "100"}} className="lead">Luis Cruz, Managing Member</p>
              <p><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget sapien ut neque aliquam fermentum. Donec et elit at dui vulputate ullamcorper eu ac dui. Duis quis ligula vel libero convallis aliquam. Etiam ac turpis et nisl suscipit vestibulum faucibus a diam. Integer aliquet vulputate cursus. Aenean sed libero in lectus imperdiet placerat. Phasellus eu maximus ex, sed laoreet ex. Duis consectetur massa quis nibh viverra, non fringilla arcu egestas.</small>
              </p>
            </div>
          </div>
        </div>

        <div style={{padding: "0 80px 80px 80px"}}>
          <h6 className="text-danger lead" style={{fontWeight: "100"}}>
            Metro Detroit Property Management (MDPM), Property Management. MDPM has hundreds of units under management in Metro Detroit Area and over 100 years of overall staff experience.

            Drew Kniffin, Advisor.  Mr. Kniffin advises the managing members….

            Michael Gross, Real Estate Attorney. Mr. Gross handles all legal matters related to the real estate transaction.
          </h6>
          <h6 style={{fontWeight: "100"}}>Steven Rinaldi, SEC Attorney. Mr. Rinaldi handles all legal matters related to SEC compliance.</h6>
        </div>
        <hr/>

        <div style={{padding: "80px"}}>
          <h1 className="text-muted lead" style={{fontWeight: "bold"}}>CONTACT</h1>
          <h6 style={{fontWeight: "100"}}>
            Questions should be directed to Limitless Estates, LLC, c/o Kyle Mitchell, (562) 833-5010 or kylemitchellrea@gmail.com.
          </h6>
        </div>
        <hr/>

        <div style={{padding: "80px"}} className="text-center">
          <small className="text-danger" style={{fontWeight: "900"}}>Confidential - Don't distribute without permissions from Limitless Estates, LLC</small>
        </div>

      </div>
    </div>
  );
}

export default Columbus;
