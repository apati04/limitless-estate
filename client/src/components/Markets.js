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
            <div className="col-md-4">
                <Link style={{ textDecoration: 'none' }} to="/markets/columbus"><PageBox icon="building" title="Columbus" bgColor="bg-dark" description="description"/></Link>
            </div>
            <div className="col-md-4">
              <PageBox icon="building" title="Ecorse" bgColor="bg-secondary" description="description" />
            </div>
            <div className="col-md-4">
              <PageBox icon="building" title="asdf" bgColor="bg-success" description="description" />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-4">
              <PageBox icon="users" title="asdf" bgColor="bg-danger" description="description" />
            </div>
            <div className="col-md-4">
              <PageBox icon="building" title="asdf" bgColor="bg-dark" description="description" />
            </div>
            <div className="col-md-4">
              <PageBox icon="building" title="asdf" bgColor="bg-info" description="description" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Markets;