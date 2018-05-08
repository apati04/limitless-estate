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
const styles = {
  header: {
    padding: '0',
    background: 'url(https://i.imgur.com/GwLW8SA.jpg?1) 50% 70% no-repeat',
    backgroundSize: 'cover',
    height: 25 + 'em'
  }
};
class Phoenix extends Component {
  render() {
    const pdfId = '1h49lgYWehZqI1KPG28i8k1tESsCZkeLd';
    return (
      <Card className="z-depth-0">
        <CardImage tag="div">
          <div style={styles.header} />
        </CardImage>
        <CardBody className="animated fadeInRightBig pb-4">
          <div className="container">
            <div className="row justify-content-around">
              <div className="col-12 col-lg-10">
                <div
                  style={{ width: '1px', minWidth: '100%', minHeight: '100%' }}
                >
                  <div
                    style={{ height: 52 + 'em' }}
                    className="embed-responsive embed-responsive-16by9"
                  >
                    <iframe
                      title="phoenixpdf"
                      className="embed-responsive-item"
                      src={`https://docs.google.com/viewer?srcid=${pdfId}&pid=explorer&efh=false&a=v&chrome=false&embedded=true`}
                      allowFullScreen
                    />
                  </div>
                  <hr className="w-100" />
                  <h5 className="mb-4">
                    Sound like the right investment for you?
                  </h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/info/contact">
                      <button className="btn btn-primary">Contact Us</button>
                    </Link>
                    <Link to="/markets/phoenix/summary">Back To Overview</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default Phoenix;
