import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Card, CardBody, CardImage, CardTitle, Fa } from 'mdbreact';
import { nuView, uDirect } from '../api/nuView';

export default class SupportCo extends Component {
  renderInfo(company) {
    const { name, phone, address, email, website, misc, logo } = company;
    return (
      <Card className="" narrow>
        <a target="_blank" rel="noopener" href={website}>
          <CardImage className="p-4 card-img-top" src={logo} alt="" />
        </a>
        <CardTitle className="h2-responsive">{name}</CardTitle>
        <CardBody>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <span>
                  <Fa style={{ color: 'blue' }} size="md" icon="phone" />
                </span>{' '}
                <h5 style={{ display: 'inline' }} className="h5-responsive">
                  {phone}
                </h5>
              </div>
              <div className="col-12">
                <span>
                  <Fa style={{ color: 'blue' }} size="md" icon="envelope" />
                </span>{' '}
                <h5 style={{ display: 'inline' }} className="h5-responsive">
                  {email}
                </h5>
              </div>
              <span>
                <Fa
                  style={{ color: 'blue' }}
                  size="md"
                  icon="location-arrow"
                  className=""
                />
              </span>
              <h5 style={{ display: 'inline' }} className="h5-responsive">
                {address.street}
              </h5>

              <h5 className="m-0">
                {`${address.city}, ${address.state}  ${address.zipcode}`}
              </h5>

              <span>
                <Fa
                  style={{ color: 'blue' }}
                  size="lg"
                  icon="external-link"
                  className="mr-2"
                />
              </span>

              <h5 style={{ display: 'inline' }} className="h5-responsive">
                <a target="_blank" rel="noopener" href={website}>
                  {website}
                </a>
              </h5>
            </div>
            <div className="row  align-items-baseline">
              <div className="col-12">
                <div className="mt-2 text-center">
                  <a
                    style={{ textDecoration: 'none', color: 'white' }}
                    target="_blank"
                    rel="noopener"
                    href={misc}
                  >
                    <Button
                      color="primary"
                      size="lg"
                      className="btn btn-block text-white"
                    >
                      View Details
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
              <div className="h-100 p-3">{this.renderInfo(nuView)}</div>
            </div>
            <div className="col-12 col-md-6">
              <div className="h-100 p-3">{this.renderInfo(uDirect)}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
