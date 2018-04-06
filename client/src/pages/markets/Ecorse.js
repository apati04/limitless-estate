import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../../components/FadeIn';
import MapBox from '../../components/MapBox';

import StickyBox from 'react-sticky-box';
import {
  Button,
  Card,
  CardImage,
  CardBody,
  CardText,
  CardTitle,
  Container,
  View,
  Mask
} from 'mdbreact';
// const property_img = '/img/ecorse/image1.png';
// const map_img = '/img/ecorse/image2.png';
// const acquisition_img = '/img/ecorse/image3.png';
// const rent_roll_img = '/img/ecorse/image4.png';
// const income_expenses_img = '/img/ecorse/image5.png';
// const financial_projection_img = '/img/ecorse/image6.png';
// const equity_return_img = '/img/ecorse/image7.png';
// const projected_cash_flow_img = '/img/ecorse/image8.png';

/**
 * Finacial Statements
 */

class Ecorse extends Component {
  render() {
    const imgURL = '/img/ecorse/ec2.jpg';
    const title = 'Sample Deal Package';

    return (
      <Card className="z-depth-0">
        <CardImage tag="div">
          <div className="view">
            <img
              className="img-fluid w-100"
              src="https://i.imgur.com/5beXJXj.jpg"
              alt=""
            />
          </div>
        </CardImage>
        <CardBody className="animated fadeInRightBig pb-4">
          <div className="container">
            <div className="row flex-center">
              {/* main body section */}
              <div className="col-12">
                <div
                  style={{ height: 80 + 'em' }}
                  className="z-depth-2 embed-responsive embed-responsive-16by9"
                >
                  <iframe
                    className="embed-responsive-item"
                    src="/docs/detroitSDP.pdf#zoom=100"
                    width="100%"
                    height="100%"
                    allowFullScreen
                  />
                </div>
                <hr />
                <h5 className="mb-4">
                  Sound like the right investment for you?
                </h5>
                <div className="d-flex justify-content-between align-items-center">
                  <Link to="/info/contact">
                    <button className="btn btn-primary">Contact Us</button>
                  </Link>

                  <Link to="/markets/detroit/summary">Back To Overview</Link>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default Ecorse;
