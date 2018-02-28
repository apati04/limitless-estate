import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import PageBox from '../components/PageBox';
/*bgPos='800px -430px'*/
class Markets extends Component {
  render() {
    const imgURL = '/img/pageheader.jpg';
    const title = 'Markets';
    return (
      <div>
        <PageHeader title={title} bgRepeat="no-repeat" img={imgURL} />
        <div className="mt-2 py-5">
          <main role="main" className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="pb-3 mb-4 font-italic border-bottom">Columbus Ohio</h3>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-4">
                <Link style={{ textDecoration: 'none' }} to="/markets/columbus">
                  <PageBox icon="building" title="Columbus" bgColor="bg-dark" description="description" />
                </Link>
              </div>
              <div className="col-md-4">
                <Link style={{ textDecoration: 'none' }} to="/markets/ecorse">
                  <PageBox icon="building" title="Ecorse" bgColor="bg-dark" description="description" />
                </Link>
              </div>
            </div>
          </main>
          <hr />
        </div>
        <div className="container">
          <div className="row ">
            <div className="col-md-4">
              <Link style={{ textDecoration: 'none' }} to="/markets/columbus">
                <PageBox icon="building" title="Columbus" bgColor="bg-dark" description="description" />
              </Link>
            </div>
            <div className="col-md-4">
              <Link style={{ textDecoration: 'none' }} to="/markets/ecorse">
                <PageBox icon="building" title="Ecorse" bgColor="bg-dark" description="description" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Markets;
