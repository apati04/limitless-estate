import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import PropertyCard from '../components/PropertyCard';
const arlington = '/img/columbus/arlingtonHeights.jpg';
const ecorse = '/img/ecorse/rjmanor.jpg';

const style = {
  marketStyle: {
    backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
  },
};
/*bgPos='800px -430px'*/
class Markets extends Component {
  render() {
    const imgURL = '/img/pageheader.jpg';
    const title = 'Markets';
    return (
      <div>
        <PageHeader title={title} bgRepeat="no-repeat" img={imgURL} />
        <div style={style.marketStyle} className="mt-2 py-5">
          <main role="main" className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="display-4 pb-3 mb-4 font-italic border-bottom">Columbus, Ohio</h2>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <PropertyCard
                  titleText="ARLINGTON HEIGHTS"
                  headlineText="2201 Riverside Drive"
                  bodyText="57 Unit Multifamily Investment Opportunity"
                  supportText={[<div>text area</div>, <div>More info below...</div>]}
                  photo={arlington}
                  marketRoute="arlingtonheights"
                />
              </div>
            </div>
          </main>
          {/* Detriot  */}
          <main role="main" className="container">
            <div className="row">
              <div className=" col-md-12">
                <h2 className="display-4 pb-3 mb-4 font-italic border-bottom">Detriot, MI</h2>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <PropertyCard
                  titleText="RIVER PARK & JEFFERSON MANOR"
                  headlineText="4471 & 4581 High Street"
                  bodyText="72 Unit Multifamily Investment Opportunity"
                  supportText={[<div>text area</div>, <div>More info below...</div>]}
                  photo={ecorse}
                  marketRoute="riverparkjefferson"
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Markets;
