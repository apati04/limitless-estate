import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import PropertyCard from '../components/PropertyCard';
const arlington = '/img/columbus/arlingtonHeights.jpg';
const ecorse = '/img/ecorse/rjmanor.jpg';

const SDP_Columbus =
  'https://drive.google.com/file/d/1teIUZKadttGDSCj7Tg26rivLIODfr7ma/view?usp=sharing';

const SDP_Detroit =
  'https://drive.google.com/file/d/1z0czV_7QrojZY1YHKazDI1XRtVy0cU2f/view?usp=sharing';
const style = {
  marketStyle: {
    backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)'
  }
};
/*bgPos='800px -430px'*/
class Markets extends Component {
  render() {
    const imgURL = '/img/pageheader.jpg';
    const title = 'Sample Deal Packages';
    return (
      <div>
        <PageHeader title={title} bgRepeat="no-repeat" img={imgURL} />
        <div style={style.marketStyle} className="py-5">
          <main role="main" className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="pb-3 mb-4  border-bottom">
                  Columbus, Ohio{' '}
                  <span className="lead ml-2 font-italic">
                    (<a target="_blank" href={SDP_Columbus}>
                      View PDF
                    </a>)
                  </span>
                </h2>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <PropertyCard
                  titleText="ARLINGTON HEIGHTS"
                  headlineText="2201 Riverside Drive"
                  bodyText="57 Unit Multifamily Investment Opportunity"
                  supportText={
                    <ul className="pt-3">
                      <li key="aar">17% average annual return</li>
                      <li key="coc">10%+ cash on cash</li>
                    </ul>
                  }
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
                <h2 className="pb-3 mb-4  border-bottom">
                  Detroit, MI{' '}
                  <span className="lead ml-2 font-italic">
                    (<a target="_blank" href={SDP_Detroit}>
                      View PDF
                    </a>)
                  </span>
                </h2>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <PropertyCard
                  titleText="RIVER PARK & JEFFERSON MANOR"
                  headlineText="4471 & 4581 High Street"
                  bodyText="72 Unit Multifamily Investment Opportunity"
                  supportText={
                    <ul className="pt-3">
                      <li key="aar">17% average annual return</li>
                      <li key="coc">10%+ cash on cash</li>
                    </ul>
                  }
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
