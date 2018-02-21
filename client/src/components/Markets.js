import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PageHeader from './PageHeader';
import PageBox from './PageBox';
class Markets extends Component {
  render() {
    const imgURL = '/img/pageheader.jpg';
    const description = "optional info"
    const title = "Markets"
    return (
      <div>
        <PageHeader title={title} bgPos='800px -430px' description={description} img={imgURL} />
        <div className="container p-5">
          <div className="row mb-4">
            <div className="col-md-6">
                <Link style={{ textDecoration: 'none' }} to="/markets/columbus"><PageBox icon="building" title="Columbus" bgColor="bg-dark" description="description"/></Link>
            </div>
            <div className="col-md-6">
              <Link style={{ textDecoration: 'none'}} to="/markets/ecorse">
              <PageBox icon="building" title="Ecorse" bgColor="bg-dark" description="description" /></Link>
            </div>
            </div>
            </div>
      </div>
    )
  }
}

export default Markets;