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
      <div>
        <Card wide>
          <a target="_blank" href={website}>
            <CardImage className="p-4 card-img-top" src={logo} alt="" />
          </a>

          <CardBody>
            <div className="container px-3">
              <CardTitle className="h2-responsive">{name}</CardTitle>
              <div className="row flex-column no-gutters flex-nowrap text-left align-items-stretch justify-content-around">
                <div className="col-auto">
                  <h5 className="h5-responsive">
                    <Fa
                      style={{ color: 'blue' }}
                      size="lg"
                      icon="phone"
                      className="mr-2"
                    />{' '}
                    {phone}
                  </h5>
                </div>
                <div className="col-auto pr-0 mr-0">
                  <h5 className="h5-responsive">
                    <Fa
                      style={{ color: 'blue' }}
                      size="lg"
                      icon="envelope"
                      className="mr-2 d-inline"
                    />
                    {email}
                  </h5>
                </div>

                <div className="col-auto d-flex flex-row">
                  <Fa
                    style={{ color: 'blue' }}
                    size="lg"
                    icon="location-arrow"
                    className="mr-2"
                  />
                  <ul className="no-margins no-gutters list-unstyled pl-1">
                    <li>
                      <h5 className="h5-responsive">{address.street}</h5>
                    </li>
                    <li className="my-0">
                      <h5 className="h5-responsive">
                        {`${address.city}, ${address.state}  ${
                          address.zipcode
                        }`}
                      </h5>
                    </li>
                  </ul>
                </div>
                <div className="col-auto d-flex">
                  <Fa
                    style={{ color: 'blue' }}
                    size="lg"
                    icon="external-link"
                    className="mr-2"
                  />
                  <h5 className="h5-responsive">
                    <NavLink to={website}>{website}</NavLink>
                  </h5>
                </div>
              </div>
              <div className="mt-2 text-center">
                <a
                  style={{ textDecoration: 'none', color: 'white' }}
                  target="_blank"
                  href={misc}>
                  <Button
                    color="indigo"
                    size="lg"
                    className="btn btn-block text-white">
                    Learn More
                  </Button>
                </a>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
  render() {
    const { name } = nuView;
    return (
      <section>
        <div className="container-fluid py-4">
          <div className="row  mb-5 justify-content-center align-items-center">
            <div className="col">
              <header className="text-center">
                <h1 style={{ color: 'cyan' }} className="h1-responsive">
                  Did you know...
                </h1>
                <h2 className="text-grey h5-responsive">
                  You can invest with your 401k/IRA?
                </h2>
                <p className="h5-responsive">Find out more below</p>
                <Fa
                  className="align-bottom"
                  style={{ fontSize: 2 + 'em' }}
                  icon="chevron-down"
                />
              </header>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6">{this.renderInfo(nuView)}</div>
            <div className="col-12 col-sm-6">{this.renderInfo(uDirect)}</div>
          </div>
        </div>
      </section>
    );
  }
}
