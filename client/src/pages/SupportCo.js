import React, { Component } from 'react';
import { Card, CardBody, CardText, CardImage, Fa } from 'mdbreact';
import { nuView, uDirect } from '../api/nuView';

export default class SupportCo extends Component {
  renderInfo(company) {
    const {
      name,
      contact,
      phone,
      address,
      email,
      website,
      misc,
      logo
    } = company;
    return (
      <Card className="my-4">
        <a target="_blank" rel="noopener" className="w-100" href={website}>
          <CardImage
            style={{ height: 10 + 'em' }}
            className="mw-100 mx-auto p-4 d-block img-fluid"
            src={logo}
            alt="logo"
          />
        </a>

        <CardBody style={{ minHeight: 20 + 'em' }}>
          <div className="container">
            <div className="h-100 row flex-center">
              <div className="col-12 my-2 pr-0 m-0">
                <h2>{contact}</h2>
                <Fa size="md" icon="phone" className="mr-2" />
                <CardText className="pl-1 d-inline">{phone}</CardText>
              </div>
              <div className="col-12 my-2 pr-0 mr-0">
                <Fa size="md" icon="envelope" className="mr-2" />
                <CardText className="pl-1 d-inline">{email}</CardText>
              </div>
              <div className="col-12 my-2 d-flex">
                <Fa
                  style={{ color: 'blue' }}
                  size="md"
                  icon="external-link"
                  className="mr-2"
                />
                <CardText>
                  <a target="_blank" rel="noopener" href={website}>
                    {website}
                  </a>
                </CardText>
              </div>
              <div className="col-12 my-2 d-flex">
                <Fa
                  style={{ color: 'blue' }}
                  size="md"
                  icon="location-arrow"
                  className="mr-2"
                />
                <ul className="text-left no-margins no-gutters list-unstyled pl-1">
                  <li className="my-0">
                    <CardText>{address.street}</CardText>
                  </li>
                  <li className="my-0">
                    <CardText>
                      {`${address.city}, ${address.state}  ${address.zipcode}`}
                    </CardText>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row h-100 w-100 justify-content-center align-items-baseline">
              <div className="col-12">
                <div className="mt-2 text-center">
                  <a
                    role="button"
                    style={{ textDecoration: 'none', color: 'white' }}
                    target="_blank"
                    className="btn btn-primary btn-block text-white"
                    rel="noopener"
                    href={misc}
                  >
                    View Details
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
        height: 15 + 'em'
      }
    };
    return (
      <section>
        <div style={styles.header}>
          <div className="lightO">
            <div
              style={{ height: 25 + 'em' }}
              className="row mb-5 justify-content-center align-items-center"
            >
              <div className="col-8 text-left">
                <header className=" text-align-center-left text-white">
                  <h1 className="font-weight-bold">
                    Self-direct your 401k/IRA
                  </h1>
                </header>
              </div>
            </div>
          </div>
        </div>
        <div className="container my-5">
          <div className="row flex-center animated fadeIn">
            <div className="col-12 col-md-6">
              <div>{this.renderInfo(nuView)}</div>
            </div>
            <div className="col-12 col-md-6">
              <div>{this.renderInfo(uDirect)}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
