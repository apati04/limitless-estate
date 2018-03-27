import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import {
  Button,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText,
  Container,
  Fa
} from 'mdbreact';
import { nuView, uDirect } from '../api/nuView';
const style = {
  '.mask': { cursor: 'pointer' }
};
export default class SupportCo extends Component {
  renderInfo(company) {
    const { name, phone, address, email, website, misc, logo } = company;
    return (
      <div className="mb-4 col-md-6">
        <Card className="wow fadeIn h-100 w-100" narrow>
          <a target="_blank" href={website}>
            <CardImage
              style={{ opacity: '1' }}
              className="container p-5 img-fluid"
              src={logo}
              alt=""
            />
          </a>

          <CardBody>
            <div className="d-flex flex-column text-left justify-content-center align-items-center">
              <CardTitle className="m-2 col-md-12 h2">{name}</CardTitle>
              {[
                <span className="m-2 col-md-12">
                  <h5 className="lead">
                    <Fa
                      style={{ color: 'blue' }}
                      size="lg"
                      icon="phone"
                      className="mr-2"
                    />{' '}
                    {phone}
                  </h5>
                </span>,
                <span className="m-2 col-md-12">
                  <h5 className="lead">
                    <Fa
                      style={{ color: 'blue' }}
                      size="lg"
                      icon="envelope"
                      className="mr-2"
                    />
                    {email}
                  </h5>
                </span>,

                <ul className="m-2 col-md-12 list-unstyled">
                  <li>
                    <h5 className="lead ml-1">
                      <Fa
                        style={{ color: 'blue' }}
                        size="lg"
                        icon="location-arrow"
                        className="mr-2"
                      />

                      {address.street}
                    </h5>
                    <h5
                      className="lead ml-1"
                      style={{ marginTop: -0.5 + 'em' }}
                    >
                      <Fa
                        style={{ color: 'blue' }}
                        size="lg"
                        style={{ visibility: 'hidden' }}
                        icon="location-arrow"
                        className="mr-2"
                      />
                      {address.city}, {address.state} {address.zipcode}
                    </h5>
                  </li>
                </ul>,
                <span className="m-2 col-md-12">
                  <h5 className="lead">
                    <Fa
                      style={{ color: 'blue' }}
                      size="lg"
                      icon="external-link"
                      className="mr-2"
                    />
                    <NavLink to={website}>{website}</NavLink>
                  </h5>
                </span>,
                <span className="col-md-12">
                  <a
                    style={{ textDecoration: 'none', color: 'white' }}
                    target="_blank"
                    href={misc}
                  >
                    <Button color="indigo" size="lg" className="text-white">
                      Learn More
                    </Button>
                  </a>
                </span>
              ]}
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
  render() {
    const { name } = nuView;
    return (
      <section className="container-fluid p-4">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <header className="text-center">
            <h1 className="h1-responsive">Did you know...</h1>
            <h2 className="h2-responsive">
              You can invest with your 401k/IRA?
            </h2>
            <p className="lead">Find out more below</p>
            <Fa
              className="align-bottom"
              style={{ fontSize: 2 + 'em' }}
              icon="chevron-down"
            />
          </header>
          <div className="row">
            {this.renderInfo(nuView)}
            {this.renderInfo(uDirect)}
          </div>
        </div>
      </section>
    );
  }
}
