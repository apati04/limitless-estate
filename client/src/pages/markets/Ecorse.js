import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../../components/FadeIn';

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
    background: 'url(https://i.imgur.com/5beXJXj.jpg?2) bottom no-repeat',
    backgroundSize: 'cover',
    height: 25 + 'em'
  }
};
class Ecorse extends Component {
  render() {
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
                  style={{
                    width: '1px',
                    minWidth: '100%',
                    minHeight: '100%'
                  }}
                >
                  <div
                    style={{ height: 52 + 'em' }}
                    className="embed-responsive embed-responsive-16by9"
                  >
                    <iframe
                      title="columbuspdf"
                      className="embed-responsive-item"
                      src="https://docs.google.com/viewer?srcid=1lUc9DltmD8o1LiDu-OVwrvsdvEk-lkcE&pid=explorer&efh=false&a=v&chrome=false&embedded=true"
                      allowFullScreen
                    />
                  </div>
                  <hr className="w-100" />
                  <h5 className="mb-4">
                    Sound like the right investment for you?
                  </h5>
                  <div
                    style={{ display: 'flex' }}
                    className="d-flex justify-content-between align-items-center"
                  >
                    <Link to="/info/contact">
                      <button className="btn btn-primary">Contact Us</button>
                    </Link>

                    <Link to="/markets/detroit/summary">Back To Overview</Link>
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

export default Ecorse;
