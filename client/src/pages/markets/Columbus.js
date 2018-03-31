import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../../components/FadeIn';
import MapBox from '../../components/MapBox';
import StickyBox from 'react-sticky-box';
import PageHeader from '../../components/PageHeader';

const imgURL = '/img/pageheader.jpg';
const description = 'Sample Deal Package';
const title = 'Arlington Heights';
/**
 * Finacial Statements
 */
const FINANCE = '/img/columbus/financials';
const acquisitionSummary = `${FINANCE}/acq_sum.jpg`;
const rentRoll = `${FINANCE}/rentRoll.png`;
const incomeActual = `${FINANCE}/incomeActual.jpg`;
const PLFiveYears = `${FINANCE}/PLFiveYears.jpg`;
const equityReturn = `${FINANCE}/equityReturn.jpg`;
const projectedCashFlows = `${FINANCE}/projectedCashFlows.jpg`;
const pdfFile =
  'https://drive.google.com/open?id=19YL-vDPDwsR0GR7L1mLoUWOvCqX3Xb8E';
class Columbus extends Component {
  render() {
    return (
      <div data-wow-delay="1s" className="animated fadeIn">
        <PageHeader title={title} description={description} img={imgURL} />
        <section className="py-3">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-12 col-lg-8 mt-4">
                {/* building stats */}
                <div
                  style={{ height: 100 + 'em' }}
                  className="embed-responsive embed-responsive-16by9"
                >
                  <iframe
                    src="https://drive.google.com/file/d/1MiUi-BOB0YI7dGlsvuuTp3SaXk9c52eu/preview"
                    allowfullscreen
                  />
                </div>

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
                    <Link to="/">Back to Home</Link>
                  </div>
                </form>
              </div>

              <div className="col-12 col-lg-4 mt-4 d-none d-lg-block">
                <StickyBox style={{ marginTop: '-100px', paddingTop: '100px' }}>
                  <MapBox address="2201 Riverside Drive, Columbus, OH" />
                </StickyBox>
              </div>

              {/* Each modal must be registered below */}
              {/* <RegisterModal
                id="acquisition"
                title="Acquisition Summary"
                body={
                  <div>
                <img src={acq_sum} className="img-fluid" />
                <hr />
                <small>
                Closing costs includes origination fees, appraisal, property inspection, legal fees, recording
                fees, and transfer taxes. The acquisition fee is payable to Limitless Estates, LLC at closing.
                Repair escrows are kept in the operating account until needed.
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
              /> */}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Columbus;
