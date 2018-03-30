import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../../components/FadeIn';
import MapBox from '../../components/MapBox';
import PageHeader from '../../components/PageHeader';
import StickyBox from 'react-sticky-box';
// const property_img = '/img/ecorse/image1.png';
// const map_img = '/img/ecorse/image2.png';
// const acquisition_img = '/img/ecorse/image3.png';
// const rent_roll_img = '/img/ecorse/image4.png';
// const income_expenses_img = '/img/ecorse/image5.png';
// const financial_projection_img = '/img/ecorse/image6.png';
// const equity_return_img = '/img/ecorse/image7.png';
// const projected_cash_flow_img = '/img/ecorse/image8.png';

/**
 * Finacial Statements
 */
const FINANCE = '/img/ecorse/financials';
const acquisitionSummary = `${FINANCE}/acq_sum.jpg`;
const rentRoll = `${FINANCE}/rentRoll.jpg`;
const incomeActual = `${FINANCE}/incomeActual.jpg`;
const fiveYearPL = `${FINANCE}/fiveYearPL.jpg`;
const equityReturn = `${FINANCE}/equityReturn.jpg`;
const projectedCashFlows = `${FINANCE}/projectedCashFlows.jpg`;

class Ecorse extends Component {
  render() {
    const imgURL = '/img/ecorse/ec2.jpg';
    const description = 'Sample Deal Package';
    const title = 'River Park & Jefferson Manor';

    return (
      <div>
        <PageHeader
          height="320px"
          title={title}
          bgPos="800px -430px"
          description={description}
          img={imgURL}
        />
        <section className="animated fadeIn py-3">
          <div className="container">
            <div className="row justify-content-between">
              {/* main body section */}
              <div className="col-12 col-lg-8 mt-4">
                <article>
                  <div id="content-1">
                    <h2 className="pb-2 mb-3 text-left border-bottom">
                      Executive Summary
                    </h2>
                  </div>
                  <div style={{ marginTop: '14px' }}>
                    <p>
                      Limitless Estates, LLC a California Limited Liability
                      company with offices in Long Beach, CA, is arranging for
                      the acquisition of undivided real estate interests in the
                      above property by a limited number of sophisticated and
                      qualified investors. The property consists of 72 units.
                      The purchase price is $3.175M.
                    </p>
                    <p>
                      We are seeking a total investment of $1.0M with a minimum
                      of $50,000 per investor. Investors receive 80% equity with
                      projected average annual returns of 15%-20%. Cash flow
                      distributions are made at the end of each calendar
                      quarterly.
                    </p>
                    <p>
                      Investors should be prepared to leave their money in for a
                      minimum of 5 years, even though there is a possibility to
                      re-finance and repay the investor’s principal before then.
                      Investors have the option of getting cashed out of their
                      investment between year 3 and 4 at 90% of fair market
                      value of their shares. If we re-finance or sell the
                      property, investors first receive their principal back,
                      then receive 80% of any profits.
                    </p>
                    <p>
                      We have not yet completed due diligence. If due diligence
                      materials differ in our assumptions, we will either
                      re-negotiate the terms or terminate the contract.
                    </p>
                    <p>
                      Please see below for more information about the property,
                      its current performance, our strategy to increase income
                      and our financial projections.
                    </p>
                  </div>
                  <div id="content-2">
                    <h2 className="pb-2 mb-3 pt-3 text-left border-bottom">
                      About This Property
                    </h2>
                  </div>
                  <div style={{ marginTop: '14px' }}>
                    <p>
                      The subject property is a 72-unit multifamily low-rise
                      garden style apartment divided into 4 buildings located at
                      4471 & 4581 High Street. There is a 24 unit building and a
                      12 unit building to make up River Park and two 18 unit
                      buildings to make up Jefferson Manor. The buildings are
                      comprised of 67 Two Bedroom/One Bath and 5 One Bedroom/One
                      Bath units. The buildings sit on 1.67 acres and 57,100
                      rentable square feet. These properties were built between
                      1971-1973 and provide views of the Detroit River.
                    </p>
                  </div>
                  <div id="content-3">
                    <h2 className="pb-2 pt-3 mb-3 text-left border-bottom">
                      Opportunity and Business Plan
                    </h2>
                  </div>
                  <div style={{ marginTop: '14px' }}>
                    <p>
                      This property is a value add opportunity with potential
                      upside through management as well as increasing current
                      rents to reflect the local multifamily market. Our plan is
                      to complete interior and exterior renovations, increase
                      the asking rents and rebrand and remarket. We believe that
                      after the completion of the necessary upgrades rents can
                      be increased by an average of $92 per unit as well as
                      fundamentally serve as a comfortable living establishment
                      for tenants. The building will thrive under the expertise
                      of our property management company (JSDA Property
                      Management).
                    </p>
                  </div>

                  <div>
                    <h2 className="pb-2 pt-3 mb-3 text-left border-bottom">
                      The Neighborhood
                    </h2>
                  </div>
                  <div style={{ marginTop: '14px' }}>
                    <p>
                      The subject property is located in the southwest suburbs
                      of Detroit. (DDOT), which is the largest bus transit
                      carrier in Michigan has 44 fixed route bus lines offering
                      services to Detroit and its 23 surrounding communities.
                      Through a coalition of some of Detroit’s largest
                      employers, worldwide investors, as well as passionate and
                      driven city leaders, Detroit’s revival has become an
                      unprecedented success story bound to make history. The
                      buzz and excitement generated by Detroit’s “Live
                      Downtown”, has attracted thousands of new residents that
                      are seeking housing in the Detroit area, which are sending
                      apartment rents soaring and vacancy rates to historic
                      lows. The city has been reborn with passionate
                      entrepreneurs, determined to not only make their new
                      start-ups succeed, but Detroit succeed as a whole as well.
                      Detroit has the “cool factor” again, with fresh college
                      grads and young people flocking to the city with
                      excitement. And according to Quicken Loans founder Dan
                      Gilbert, who invested $2.2 billion, purchased 95
                      buildings, and moved 15,000 employees downtown, the sizzle
                      is just beginning. The significant developments occurring
                      in the area coupled with the property's access to transit
                      make this an ideal investment to capitalize on the area's
                      momentum.
                    </p>
                  </div>
                </article>

                <div>
                  <h2 className="text-left pb-2 pt-3 mb-3 border-bottom">
                    Acquisition Summary
                  </h2>
                </div>
                <FadeIn>
                  <div style={{ marginTop: '14px' }}>
                    <img
                      src={acquisitionSummary}
                      height="200px"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </FadeIn>

                <div>
                  <h2 className="pb-2 pt-3 mb-3 text-left border-bottom">
                    Rent Roll
                  </h2>
                </div>
                <FadeIn>
                  <div style={{ marginTop: '14px' }}>
                    <img src={rentRoll} alt="" className="img-fluid" />
                  </div>
                </FadeIn>

                <div>
                  <h2 className="pb-2 pt-3 mb-3 text-left border-bottom">
                    Income And Expenses - Actual
                  </h2>
                </div>
                <FadeIn>
                  <div style={{ marginTop: '14px' }}>
                    <img src={incomeActual} alt="" className="img-fluid" />
                  </div>
                </FadeIn>

                <div>
                  <h2 className="pb-2 pt-3 mb-3 text-left border-bottom">
                    Five Year Projection
                  </h2>
                </div>
                <FadeIn>
                  <div style={{ marginTop: '14px' }}>
                    <img
                      src={fiveYearPL}
                      alt="fiveYearPL"
                      className="img-fluid"
                    />
                  </div>
                </FadeIn>

                <div>
                  <h2 className="pb-2 pt-3 mb-3 text-left border-bottom">
                    Equity Return at Resale
                  </h2>
                </div>
                <FadeIn>
                  <div style={{ marginTop: '14px' }}>
                    <img
                      src={equityReturn}
                      alt=""
                      className="img-fluid border-bottom"
                    />
                    <div className="text-left mt-4 pt-2">
                      <p className="lead font-italic">
                        <strong>
                          Summary of Projected Member Cash Flows and Returns
                        </strong>
                      </p>
                      <img
                        src={projectedCashFlows}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </FadeIn>
                <hr />
                <small>
                  This material does not constitute an offer or a solicitation
                  to purchase securities. An offer can only be made by the
                  private placement memorandum. This document is an
                  informational summary and is authorized for use only by
                  sophisticated investors with an existing relationship with
                  Limitless Estates, LLC and have been accepted as qualified and
                  sophisticated investors by virtue of their experience and
                  financial circumstance.
                </small>
                <hr />
                <small className="text-muted">
                  This information is authorized for use only by a limited
                  number of persons with an existing relationship with Limitless
                  Estates, LLC and who have been qualified and accepted as
                  sophisticated investors by Limitless Estates, LLC, by
                  furnishing proof of extensive investment experience. Neither
                  the Securities and Exchange Commission nor any state
                  securities commission has approved or disapproved of the real
                  estate interests in this property package, or passed upon the
                  adequacy or accuracy of this document. Any representation to
                  the contrary is a criminal offense.
                </small>
                <hr />
                <h5 className="mb-4">
                  Sound like the right investment for you?
                </h5>
                <form className="d-flex justify-content-between align-items-center">
                  <div>
                    <a
                      role="button"
                      href="mailto:kmitchell@limitless-estates.com"
                      className="btn btn-success"
                    >
                      Contact Us
                    </a>
                  </div>
                  <div>
                    <Link to="/markets">Back To Markets</Link>
                  </div>
                </form>
              </div>
              {/* SideBar */}
              <div className="col-12 col-lg-4 mt-4 d-none d-lg-block">
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
