import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Card, CardBody, CardImage, CardTitle, Fa } from 'mdbreact';
import { nuView, uDirect } from '../api/nuView';

export default class SupportCo extends Component {
  renderInfo(company) {
    const { name, phone, address, email, website, misc, logo } = company;
    return (
      <Card className="h-100 w-100" narrow>
        <a target="_blank" href={website}>
          <CardImage className="p-4 card-img-top" src={logo} alt="" />
        </a>

        <CardBody>
          <div className="container">
            <CardTitle className="h2-responsive">{name}</CardTitle>
            <div className="row flex-column no-gutters flex-nowrap text-left align-items-start justify-content-around">
              <div className="col-12 col-md-6 pr-0 m-0 d-flex flex-row">
                <Fa
                  style={{ color: 'blue' }}
                  size="lg"
                  icon="phone"
                  className="mr-2"
                />{' '}
                <h5 className="h5-responsive">{phone}</h5>
              </div>
              <div className="col-12 col-md-6 d-flex flex-row pr-0 mr-0">
                <Fa
                  style={{ color: 'blue' }}
                  size="lg"
                  icon="envelope"
                  className="mr-2 d-inline"
                />
                <h5 className="h5-responsive">{email}</h5>
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
                      {`${address.city}, ${address.state}  ${address.zipcode}`}
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
                  <a target="_blank" href={website}>
                    {website}
                  </a>
                </h5>
              </div>
            </div>
            <div className="row align-items-end">
              <div className="col-12">
                <div className="mt-2 text-center">
                  <a
                    style={{ textDecoration: 'none', color: 'white' }}
                    target="_blank"
                    href={misc}
                  >
                    <Button
                      color="primary"
                      size="lg"
                      className="btn btn-block text-white"
                    >
                      Learn More
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    );
  }
  render() {
    const styles = {
      header: {
        padding: '0',
        background:
          'url(https://i.imgur.com/1z653Y0.jpg?1) center center no-repeat',
        backgroundSize: 'cover',
        height: 25 + 'em'
      }
    };
    return (
      <section>
        <div style={styles.header}>
          <div
            style={{ height: 25 + 'em' }}
            className="row mb-5 justify-content-center align-items-center"
          >
            <div className="col-8 text-left">
              <header className=" text-align-center-left text-white">
                <h1 className="h1-responsive">401K/IRA</h1>
              </header>
            </div>
          </div>
        </div>
        <div className="container p-5 my-5">
          <div className="row  animated fadeIn">
            <div className="col-12 col-md-6">
              <div className="h-100 m-2">{this.renderInfo(nuView)}</div>
            </div>
            <div className="col-12 col-md-6">
              <div className="h-100 m-2">{this.renderInfo(uDirect)}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
