import React, { Component } from "react";
import PageHeader from "../components/PageHeader";
import {
  Button,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText,
  Container
} from "mdbreact";
import { nuView, uDirect } from "../api/nuView";

export default class SupportCo extends Component {
  renderInfo(company) {
    const { name, phone, address, email, website, misc, logo } = company;
    return (
      <Card narrow>
        <a target="_blank" href={website}>
          <CardImage
            style={{ cursor: "pointer" }}
            className="container p-5 img-fluid"
            src={logo}
            alt=""
          />
        </a>
        <CardBody className="container m-5">
          <CardTitle className="h2">{name}</CardTitle>
          <CardText>
            {[
              <div className="d-flex p-0 align-items-center">
                <i className="material-icons">phone</i>
                <h3 style={{ fontFamily: "Roboto" }} className="ml-2">
                  {phone}
                </h3>
              </div>,
              <div className="d-flex align-items-center">
                <i className="material-icons">email</i>
                <h3 style={{ fontFamily: "Roboto" }} className="ml-2 align-top">
                  {email}
                </h3>
              </div>,
              <div className="d-flex align-items-top">
                <i className="material-icons">location_on</i>
                <ul className="ml-2 list-unstyled align-top">
                  <li className="align-items-center">
                    <h3 style={{ fontFamily: "Roboto" }} className="align-top">
                      {address.street}
                    </h3>
                    <h3 style={{ fontFamily: "Roboto", marginTop: "-10px" }}>
                      {address.city}, {address.state} {address.zipcode}
                    </h3>
                  </li>
                </ul>
              </div>,
              <div
                style={{ marginTop: "-20px" }}
                className="d-flex align-items-center"
              >
                <i className="material-icons">web</i>
                <h3 style={{ fontFamily: "Roboto" }} className="ml-2 align-top">
                  {website}
                </h3>
              </div>,
              <div className="mt-4">
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  target="_blank"
                  href={misc}
                >
                  <Button color="indigo" size="lg" className="text-white">
                    Learn More
                  </Button>
                </a>
              </div>
            ]}
          </CardText>
        </CardBody>
      </Card>
    );
  }
  render() {
    const { name } = nuView;
    return (
      <section style={{ width: "100hv" }}>
        <PageHeader title="Invest with your 401k/IRA" subtitle="" />
        <div className="mt-5 container mb-5">
          <div className="card-deck d-flex justify-content-between">
            {this.renderInfo(nuView)}
            {this.renderInfo(uDirect)}
          </div>
        </div>
      </section>
    );
  }
}
