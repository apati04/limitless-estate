import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MapBox from '../../components/MapBox';
import Content from '../../components/Content';
import PageHeader from '../../components/PageHeader';
import RegisterModal from '../../components/RegisterModal';
import StickyBox from 'react-sticky-box';
const property_img = '/img/ecorse/image1.png';
const map_img = '/img/ecorse/image2.png';
const acquisition_img = '/img/ecorse/image3.png';
const rent_roll_img = '/img/ecorse/image4.png';
const income_expenses_img = '/img/ecorse/image5.png';
const financial_projection_img = '/img/ecorse/image6.png';
const equity_return_img = '/img/ecorse/image7.png';
const projected_cash_flow_img = '/img/ecorse/image8.png';

class Ecorse extends Component {
  render() {
    const imgURL = '/img/ecorse/ec2.jpg';
    const description = 'Sample Deal Package';
    const title = 'River Park & Jefferson Manor';

    return (
      <div>
        <PageHeader height="320px" title={title} bgPos="800px -430px" description={description} img={imgURL} />
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
                        <div className="d-flex justify-content-between" onClick={this.handleClick}>
                          <a href="#content-1">EXECUTIVE SUMMARY</a>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <div className="d-flex justify-content-between" onClick={this.handleClick}>
                          <a href="#content-2">ABOUT THIS PROPERTY</a>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <div className="d-flex justify-content-between" onClick={this.handleClick}>
                          <a href="#content-3">OPPORTUNITY AND BUSINESS PLAN</a>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <div className="d-flex justify-content-between" onClick={this.handleClick}>
                          <a href="#content-4">THE NEIGHBORHOOD</a>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* <div className="mt-2 card">
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
    </div> */}
                </StickyBox>
              </div>
              {/* main body section */}
              <div className="col-12 col-md-6 mt-4">
                <article>
                  <div id="content-1">
                    <h2 className="pb-3 mb-3 border-bottom">Executive Summary</h2>
                  </div>
                  <div style={{ marginLeft: '8px', marginTop: '14px' }}>
                    <p>
                      Limitless Estates, LLC a California Limited Liability company with offices in Long Beach, CA, is
                      arranging for the acquisition of undivided real estate interests in the above property by a
                      limited number of sophisticated and qualified investors. The property consists of 72 units. The
                      purchase price is $3.175M.
                    </p>
                    <p>
                      We are seeking a total investment of $1.0M with a minimum of $50,000 per investor. Investors
                      receive 80% equity with projected average annual returns of 15%-20%. Cash flow distributions are
                      made at the end of each calendar quarterly.
                    </p>
                    <p>
                      Investors should be prepared to leave their money in for a minimum of 5 years, even though there
                      is a possibility to re-finance and repay the investor’s principal before then. Investors have the
                      option of getting cashed out of their investment between year 3 and 4 at 90% of fair market value
                      of their shares. If we re-finance or sell the property, investors first receive their principal
                      back, then receive 80% of any profits.
                    </p>
                    <p>
                      We have not yet completed due diligence. If due diligence materials differ in our assumptions, we
                      will either re-negotiate the terms or terminate the contract.
                    </p>
                    <p>
                      Please see below for more information about the property, its current performance, our strategy to
                      increase income and our financial projections.
                    </p>
                  </div>
                  <div id="content-2">
                    <h2 className="pb-3 mb-3 pt-3 border-top border-bottom">About This Property</h2>
                  </div>
                  <div style={{ marginLeft: '8px', marginTop: '14px' }}>
                    <p>
                      The subject property is a 72-unit multifamily low-rise garden style apartment divided into 4
                      buildings located at 4471 & 4581 High Street. There is a 24 unit building and a 12 unit building
                      to make up River Park and two 18 unit buildings to make up Jefferson Manor. The buildings are
                      comprised of 67 Two Bedroom/One Bath and 5 One Bedroom/One Bath units. The buildings sit on 1.67
                      acres and 57,100 rentable square feet. These properties were built between 1971-1973 and provide
                      views of the Detroit River.
                    </p>
                  </div>
                  <div id="content-3">
                    <h2 className="pb-3 pt-3 mb-3 border-top border-bottom">Opportunity and Business Plan</h2>
                  </div>
                  <div style={{ marginLeft: '8px', marginTop: '14px' }}>
                    <p>
                      This property is a value add opportunity with potential upside through management as well as
                      increasing current rents to reflect the local multifamily market. Our plan is to complete interior
                      and exterior renovations, increase the asking rents and rebrand and remarket. We believe that
                      after the completion of the necessary upgrades rents can be increased by an average of $92 per
                      unit as well as fundamentally serve as a comfortable living establishment for tenants. The
                      building will thrive under the expertise of our property management company (JSDA Property
                      Management).
                    </p>
                  </div>
                  <div id="content-4" />
                  <div>
                    <h2 className="pb-3 pt-3 mb-3 border-top border-bottom">The Neighborhood</h2>
                  </div>
                  <div style={{ marginLeft: '8px', marginTop: '14px' }}>
                    <p>
                      The subject property is located in the southwest suburbs of Detroit. (DDOT), which is the largest
                      bus transit carrier in Michigan has 44 fixed route bus lines offering services to Detroit and its
                      23 surrounding communities. Through a coalition of some of Detroit’s largest employers, worldwide
                      investors, as well as passionate and driven city leaders, Detroit’s revival has become an
                      unprecedented success story bound to make history. The buzz and excitement generated by Detroit’s
                      “Live Downtown”, has attracted thousands of new residents that are seeking housing in the Detroit
                      area, which are sending apartment rents soaring and vacancy rates to historic lows. The city has
                      been reborn with passionate entrepreneurs, determined to not only make their new start-ups
                      succeed, but Detroit succeed as a whole as well. Detroit has the “cool factor” again, with fresh
                      college grads and young people flocking to the city with excitement. And according to Quicken
                      Loans founder Dan Gilbert, who invested $2.2 billion, purchased 95 buildings, and moved 15,000
                      employees downtown, the sizzle is just beginning. The significant developments occurring in the
                      area coupled with the property's access to transit make this an ideal investment to capitalize on
                      the area's momentum.
                    </p>
                  </div>
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
                    <a type="button" href="mailto:kmitchell@limitless-estates.com" className="btn btn-success">
                      Contact Us
                    </a>
                  </div>
                  <div>
                    <Link to="/markets">Back To Markets</Link>
                  </div>
                </form>
              </div>
              {/* SideBar */}
              <div className="col-12 col-md-3 mt-4">
                <StickyBox style={{ marginTop: '-100px', paddingTop: '100px' }}>
                  {/* Financial Data */}
                  <MapBox address="4471 & 4581 High Street, Ecorse, MI" />
                </StickyBox>
              </div>
              {/* Modal Registration Below */}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Ecorse;
