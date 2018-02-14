import React from "react";

import property_img from "./../../images/ecorse/image1.png";
import map_img from "./../../images/ecorse/image2.png";
import acquisition_img from "./../../images/ecorse/image3.png";
import rent_roll_img from "./../../images/ecorse/image4.png";
import income_expenses_img from "./../../images/ecorse/image5.png";
import financial_projection_img from "./../../images/ecorse/image6.png";
import equity_return_img from "./../../images/ecorse/image7.png";
import projected_cash_flow_img from "./../../images/ecorse/image8.png";


const Ecorse = () => {
  return (
    <div className="d-flex justify-content-center align-items-center text-center container">
      <div>

        <div style={{padding: "80px"}}>
          <div>
            <h1 className="display-4">4471 & 4581 High Street</h1>
            <h1>Ecorse, MI</h1>
            <h3>72 Units</h3>
            <h5>$3.175M</h5>
          </div>
          <div style={{marginTop: "20px"}}>
            <img src={property_img} className="img-fluid" alt="property"/>
          </div>
          <div>
            <div style={{margin: "20px 0 20px 0", fontSize: "12px"}}>
              <small className="text-muted">
                This information is authorized for use only by a limited number of persons with an existing relationship with Limitless Estates, LLC and who have been qualified and accepted as sophisticated investors by Limitless Estates, LLC, by furnishing proof of extensive investment experience. Neither the Securities and Exchange Commission nor any state securities commission has approved or disapproved of the real estate interests in this property package, or passed upon the adequacy or accuracy of this document. Any representation to the contrary is a criminal offence.
              </small>
            </div>
            <h6>
              This material does not constitute an offer or a solicitation to purchase securities. An offer can only be made by the private placement memorandum. This document is an informational summary and is authorized for use only by sophisticated investors with an existing relationship with Limitless Estates, LLC and have been accepted as qualified and sophisticated investors by virtue of their experience and financial circumstance.
            </h6>
          </div>
        </div>

        <div style={{padding: "80px"}}>
          <h1>EXECUTIVE SUMMARY</h1>
          <h6>
            Limitless Estates, LLC a California Limited Liability company with offices in Long Beach, CA, is arranging for the acquisition of undivided real estate interests in the above property by a limited number of sophisticated and qualified investors. The property consists of 72 units. The purchase price is $3.175M.

            We are seeking a total investment of $1.2M with a minimum of $50,000 per investor. Investors receive 70% equity with projected average annual returns of 12%-17%. Cash flow distributions are made at the end of each calendar year.

            Investors should be prepared to leave their money in for a minimum of 7 years, even though there is a possibility to re-finance and repay the investor’s principal before then. Investors have the option of getting cashed out of their investment between year 4 and 5 at 90% of fair market value of their shares. If we re-finance or sell the property, investors first receive their principal back, then receive 70% of any profits.

            Please see below for more information about the property, its current performance, our strategy to increase income and our financial projections.
          </h6>
        </div>

        <div style={{padding: "80px"}}>
          <h1>ABOUT THIS PROPERTY</h1>
          <h6>
            The subject property is a 72-unit multifamily low-rise garden style apartment divided into 4 buildings located at 4471 & 4581 High Street. There is a 24 unit building and a 12 unit building to make up River Park and two 18 unit buildings to make up Jefferson Manor.  The buildings are comprised of 67 Two Bedroom/One Bath and 5 One Bedroom/One Bath units. The buildings sit on 1.67 acres and 57,100 rentable square feet. These properties were built between 1971-1973 and provide views of the Detroit River.
          </h6>
          <img src={map_img} className="img-fluid" alt="property"/>
        </div>

        <div style={{padding: "80px"}}>
          <div>
            <h1>THE OPPORTUNITY AND BUSINESS PLAN</h1>
            <h6>
              This property is a value add opportunity with potential upside through management as well as increasing current rents to reflect the local multifamily market.  Our plan is to complete interior and exterior renovations, increase the asking rents and rebrand and remarket. We believe that after the completion of the necessary upgrades (roughly $216,000 in improvements) rents can be increased by an average of $92 per unit as well as fundamentally serve as a comfortable living establishment for tenants.  The building will thrive under the expertise of our property management company (Metro Detroit Property Management).
            </h6>
          </div>
          <div style={{marginTop: "30px"}}>
            <h4>The Neighborhood</h4>
            <h6>
              The subject property is located in the southwest suburbs of Detroit.  (DDOT), which is the largest bus transit carrier in Michigan has 44 fixed route bus lines offering services to Detroit and its 23 surrounding communities.  Through a coalition of some of Detroit’s largest employers, worldwide investors, as well as passionate and driven city leaders, Detroit’s revival has become an unprecedented success story bound to make history. The buzz and excitement generated by Detroit’s “Live Downtown”, has attracted thousands of new residents that are seeking housing in the Detroit area, which are sending apartment rents soaring and vacancy rates to historic lows. The city has been reborn with passionate entrepreneurs, determined to not only make their new start-ups succeed, but Detroit succeed as a whole as well. Detroit has the “cool factor” again, with fresh college grads and young people flocking to the city with excitement. And according to Quicken Loans founder Dan Gilbert, who invested $2.2 billion, purchased 95 buildings, and moved 15,000 employees downtown, the sizzle is just beginning.  The significant developments occurring in the area coupled with the property's access to transit make this an ideal investment to capitalize on the area's momentum.
            </h6>
          </div>
        </div>

        <div style={{padding: "80px"}}>
          <h1>ACQUISITION SUMMARY</h1>
          <img src={acquisition_img} className="img-fluid" alt="property"/>
          <h6>
            Closing costs includes origination fees, appraisal, property inspection, legal fees, recording fees, and transfer taxes. The acquisition fee is payable to Limitless Estates, LLC at closing. Repair escrows are kept in the operating account until needed.
          </h6>
        </div>

        <div style={{padding: "80px"}}>
          <h1>SELLER-DISCLOSED FINANCIALS</h1>
          <h4>Rent Roll</h4>
          <img src={rent_roll_img} className="img-fluid" alt="property"/>
          <h4>Income and Expenses - Actual</h4>
          <img src={income_expenses_img} className="img-fluid" alt="property"/>
        </div>

        <div style={{padding: "80px"}}>
          <div>
            <h1>FINANCIAL PROJECTIONS</h1>
            <h4>Here is the 7 Year P&L Projection:</h4>
            <img src={financial_projection_img} className="img-fluid" alt="property"/>
          </div>
          <small className="text-muted">
            NOTE: The rates of return displayed on this page are only projections, and are not guarantees of any sort. Actual returns may vary widely, due to many economic and marketplace factors beyond our control.
          </small>
        </div>

        <div style={{padding: "80px"}}>
          <div>
            <h1>EQUITY RETURN AT RESALE</h1>
            <h6>
              We assume we will be able to sell the building at 50 basis points less than the going cap rate of 8% for a well-performing asset in this area of Ecorse, Mi. All investor capital is returned first before the remaining proceeds are split according to the investors’ equity share.
            </h6>
            <img src={equity_return_img} className="img-fluid" alt="property"/>
          </div>
          <img src={projected_cash_flow_img} className="img-fluid" alt="property"/>
        </div>

        <div style={{padding: "80px"}}>
          <h1>MANAGEMENT AND ADVISORS</h1>
          <h6>
            <strong>Kyle Mitchell, President, Managing Member.</strong> Kyle has personally invested in income producing real estate valued at over $1.2M in multiple states throughout the West Coast and Mid West.  He continues to actively seek investments in apartment communities in multiple states.  In addition to his own investing activities, Kyle is also a California licensed Realtor. His expertise in all facets of real estate investing gives us, and our investing partners, confidence that all of our acquisitions are carefully evaluated so that we achieve consistent returns for our investors.
          </h6>
          <h6><strong>Lalita Patipaksiri, Managing Member</strong></h6>
          <h6><strong>Luis Cruz, Managing Member</strong></h6>
        </div>

      </div>
    </div>
  );
}

export default Ecorse;
