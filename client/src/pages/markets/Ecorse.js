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
    const title = 'Sample Deal Package';

    return (
      <div>
        <PageHeader
          height="320px"
          title={title}
          bgPos="800px -430px"
          img={imgURL}
        />
        <section className="animated fadeIn py-3">
          <div className="container">
            <div className="row justify-content-between">
              {/* main body section */}
              <div className="col-12 col-lg-8">
                <div
                  style={{ height: 70 + 'em' }}
                  className="embed-responsive embed-responsive-16by9"
                >
                  <iframe
                    className="embed-responsive-item"
                    src="https://drive.google.com/file/d/1TE53jhqppDVlpe_MZa6lQrIl5zusxBxF/preview"
                    allowFullScreen
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
                    <Link to="/">Back To Home</Link>
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
