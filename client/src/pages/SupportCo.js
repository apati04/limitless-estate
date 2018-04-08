import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Card, CardBody, CardText, CardImage, CardTitle, Fa } from 'mdbreact';
import { nuView, uDirect } from '../api/nuView';

export default class SupportCo extends Component {
  renderInfo(company) {
    const { name, phone, address, email, website, misc, logo } = company;
    return (
      <Card narrow>
        <a target="_blank" rel="noopener" className="w-100" href={website}>
          <CardImage style={{height: 10 + 'em'}} className="mw-100 mx-auto p-4 d-block img-fluid" src={logo} alt="logo" />
        </a>
     
        <CardBody>
          <div className="container">
           
            <div className="row flex-column flex-nowrap text-left align-items-start justify-content-around">
              <div className="col-12 my-1 col-md-6 pr-0 m-0 d-flex flex-row">
                <Fa
                  size="md"
                  icon="phone"
                  className="mr-2 d-inline"
                />{' '}
                <CardText>{phone}</CardText>
              </div>
              <div className="col-12 my-1 col-md-6 d-flex flex-row pr-0 mr-0">
                <Fa
                  size="md"
                  icon="envelope"
                  className="mr-2 d-inline"
                />
                <CardText>{email}</CardText>
              </div>
              <div className="my-1  col-12 d-flex">
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
              <div className="col-12 my-1 d-flex">
                <Fa
                  style={{ color: 'blue' }}
                  size="md"
                  icon="location-arrow"
                  className="mr-2"
                />
                <ul className="no-margins no-gutters list-unstyled pl-1">
                  <li>
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
 
          <div className="row m-5 animated fadeIn">
            <div className="col-12 col-md-6 px-2 mh-100">
              <div>{this.renderInfo(nuView)}</div>
            </div>
            <div className="col-12 col-md-6 px-2 mh-100">
              <div>{this.renderInfo(uDirect)}</div>
            </div>
          </div>

      </section>
    );
  }
}
