import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MapBox from '../../components/MapBox';
import Content from '../../components/Content';
import StickyBox from 'react-sticky-box';
import PageHeader from '../../components/PageHeader';
import RegisterModal from '../../components/RegisterModal';
const property_img = '/img/columbus/image1.png';
const map_img = '/img/columbus/image2.png';
const acquisition_img = '/img/columbus/image3.png';
const rent_roll_img_1 = '/img/columbus/image4.png';
const rent_roll_img_2 = '/img/columbus/image5.png';
const income_expenses_img = '/img/columbus/image6.png';
const rent_roll_final = '/img/columbus/renroll_final.png';
const financial_projection_img = '/img/columbus/image7.png';
const equity_return_img = '/img/columbus/image8.png';
const projected_cash_flow_img = '/img/columbus/image10.png';
const acq_sum = '/img/columbus/acq_sum.png';
const imgURL = '/img/pageheader.jpg';
const description = 'optional info';
const title = 'Columbus, OH';

class Columbus extends Component {
  state = {
    content: 'EXECUTIVE_SUMMARY',
  };

  renderData = () => {
    switch (this.state.content) {
      case 'EXECUTIVE_SUMMARY':
        return (
          <Content
            title="EXECUTIVE SUMMARY"
            content_1="Limitless Estates, LLC a California Limited Liability company with offices in Long Beach, CA, is arranging for the acquisition of undivided real estate interests in the above property by a limited number of sophisticated and qualified investors. The property consists of 58 units. The purchase price is $2.25M. We are seeking a total investment of $700,000 with a minimum of $50,000 per investor. Investors receive 80% equity with projected average annual returns of 15%-20%. Cash flow distributions are made at the end of each quarter. Investors should be prepared to leave their money in for a minimum of 5 years, even though there is a possibility to re-finance and repay the investor’s principal before then. Investors have the option of getting cashed out of their investment between year 3 and 4 at 90% of fair market value of their shares. If we re-finance or sell the property, investors first receive their principal back, then receive 80% of any profits. We have not yet completed due diligence. If due diligence materials differ in our assumptions, we will either re-negotiate the terms or terminate the contract. Please see below for more information about the property, its current performance, our strategy to increase income and our financial projections."
          />
        );
        break;
      case 'ABOUT_THIS_PROPERTY':
        return (
          <Content
            title="ABOUT THIS PROPERTY"
            content_1="The subject property is a 58-unit multifamily walk-up apartment building located at 2201 Riverside Drive. The building is comprised of 3 Two Bedroom/One Bath, 1 Office, and 54 One Bedroom/One Bath units. The Lot and building sit on 2.16 acres, 45,430 rentable square feet and 104 parking spaces. At three stories tall, the building itself totals 37,958 gross square feet. 2201 Riverside Drive was built in 1970 with an effervescent red brick exterior that adds vibrancy to the plush green way via Riverside Drive."
          />
        );
        break;
      case 'OPPORTUNITY_AND_BUSINESS_PLAN':
        return (
          <Content
            title="OPPORTUNITY AND BUSINESS PLAN"
            content_1="This property is a true value add with current average rents more than 30% below directly competitive comparable properties. A more aggressive approach to leasing will translate into rents at the higher end of Arlington Heights’ one bedroom in-place rent range. Sub-market vacancy of one-bedroom units is less than 5%. There is constant renter demand from OSU students and medical center staff as well as millennials seeking moderately priced housing in the red-hot Grandview/Upper Arlington rental market. The building will thrive under the expertise of our property management company (Panzera Realty)."
          />
        );
        break;
      case 'THE_NEIGHBORHOOD':
        return (
          <Content
            title="THE NEIGHBORHOOD"
            content_1="The subject property is located in The City of Upper Arlington an affluent first-ring suburb of Central Ohio. Upper Arlington has a population of 34,465 people with a median household income of $102,094 almost twice the national average. The property is directly across the street from the prestigious Scioto Country Club designed by acclaimed architect Donald Ross. The City enjoys a convenient location, with easy access to downtown Columbus, the Columbus airport and major highways. Value levels of development in Upper Arlington are above the median for Central Ohio, with numerous dwellings in excess of $1,000,000. The higher value dwellings are in close proximity to Scioto Country Club. Along with having a low crime rate and strong sense of community, Upper Arlington also offers highly ranked services and institutions, such as its renowned schools and library system. Its school district is one of the best in the region, with the high school receiving a gold medal designation from U.S. News and World Report’s 2017 “Best High Schools” report where it was also ranked the #12 high school in Ohio. The library system is consistently recognized as one of the best in the country among communities of a similar size."
          />
        );
        break;
      default:
        return <div />;
    }
  };

  handleClick = (event) => {
    switch (event.target.innerText) {
      case 'EXECUTIVE SUMMARY':
        this.setState({ content: 'EXECUTIVE_SUMMARY' });
        break;
      case 'ABOUT THIS PROPERTY':
        this.setState({ content: 'ABOUT_THIS_PROPERTY' });
        break;
      case 'OPPORTUNITY AND BUSINESS PLAN':
        this.setState({ content: 'OPPORTUNITY_AND_BUSINESS_PLAN' });
        break;
      case 'THE NEIGHBORHOOD':
        this.setState({ content: 'THE_NEIGHBORHOOD' });
        break;
      default:
        this.setState({ content: '' });
    }
  };

  render() {
    return (
      <div>
        <PageHeader height="320px" title={title} description={description} img={imgURL} />
        <section className="py-3">
          <div className="container-fluid">
            <div className="row justify-content-between">
              <div className="col-12 col-md-3 mt-4">
                {/* building stats */}
                <StickyBox style={{ marginTop: '-100px', paddingTop: '100px' }}>
                  <div className="card">
                    <div className="card-header">
                      <span className="h6">Navigation</span>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item list-group-item-action">
                        <div id="content_1" className="d-flex justify-content-between" onClick={this.handleClick}>
                          EXECUTIVE SUMMARY
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <div id="content_2" className="d-flex justify-content-between" onClick={this.handleClick}>
                          ABOUT THIS PROPERTY
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <div id="content_3" className="d-flex justify-content-between" onClick={this.handleClick}>
                          OPPORTUNITY AND BUSINESS PLAN
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <div id="content_4" className="d-flex justify-content-between" onClick={this.handleClick}>
                          THE NEIGHBORHOOD
                        </div>
                      </li>
                    </ul>
                  </div>
                </StickyBox>
              </div>

              <div className="col-12 col-md-6 mt-4">
                {/* building stats */}
                <article>
                  {/* section one */}
                  {this.renderData()}
                </article>
                <hr />
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
                <h5 className="mb-4">Sound like the right investment for you?</h5>
                <form className="d-flex justify-content-between align-items-center">
                  <div>
                    <Link to="/applyNow">
                      <button className="btn btn-success">Contact Us</button>
                    </Link>
                  </div>
                  <div>
                    <Link to="/markets">Back to Markets</Link>
                  </div>
                </form>
              </div>

              <div className="col-12 col-md-3 mt-4">
                <StickyBox style={{ marginTop: '-100px', paddingTop: '100px' }}>
                  {/* Financial Data  */}
                  <MapBox address="2201 Riverside Drive, Columbus, OH" />
                  <div className="card">
                    <div className="card-header">
                      <span className="h6">Financial Reports</span>
                    </div>
                    <div className="list-group list-group-flush">
                      <a
                        className="list-group-item d-flex justify-content-between"
                        data-toggle="modal"
                        href="#acquisition"
                      >
                        <span>Acquisition Summary</span>
                        <i style={{ fontSize: '24px' }} className="far fa-file-alt" />
                      </a>
                      <a
                        className="list-group-item d-flex justify-content-between"
                        data-toggle="modal"
                        href="#profit-loss"
                      >
                        <span>5 Year Profit & Loss Projection</span>
                        <i style={{ fontSize: '24px' }} className="far fa-file-alt" />
                      </a>
                      <a className="list-group-item d-flex justify-content-between" data-toggle="modal" href="#inc-exp">
                        <span>Income And Expenses</span>
                        <i style={{ fontSize: '24px' }} className="far fa-file-alt" />
                      </a>
                      <a
                        className="list-group-item d-flex justify-content-between"
                        data-toggle="modal"
                        href="#equity-return"
                      >
                        <span>Equity Return At Resale</span>
                        <i style={{ fontSize: '24px' }} className="far fa-file-alt" />
                      </a>
                      <a
                        className="list-group-item d-flex justify-content-between"
                        data-toggle="modal"
                        href="#rentroll"
                      >
                        <span>Rent Roll</span>
                        <i style={{ fontSize: '24px' }} className="far fa-file-alt" />
                      </a>
                    </div>
                  </div>
                </StickyBox>
              </div>

              {/* Each modal must be registered below */}
              <RegisterModal
                id="acquisition"
                title="Acquisition Summary"
                body={
                  <div>
                    <img src={acq_sum} className="img-fluid" />
                    <hr />
                    <small>
                      Closing costs includes origination fees, appraisal, property inspection, legal fees, recording
                      fees, and transfer taxes. The acquisition fee is payable to Limitless Estates, LLC at closing.
                      Repair escrows are kept in the operating account until needed.{' '}
                    </small>
                  </div>
                }
              />
              <RegisterModal
                id="incomeSummary"
                title="Income Expenses"
                size="modal-lg"
                body={
                  <div>
                    <img src={income_expenses_img} />
                  </div>
                }
              />
              <RegisterModal
                id="rentroll"
                title="Rent Roll"
                size="modal-xl"
                body={
                  <div>
                    <img src="/img/columbus/rentroll1.jpg" className="img-fluid" />
                    <img src="/img/columbus/rentroll.jpg" className="img-fluid" />
                  </div>
                }
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Columbus;
