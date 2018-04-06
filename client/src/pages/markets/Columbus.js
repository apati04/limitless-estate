import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

import MapBox from '../../components/MapBox';

import { Card, CardBody, CardImage, Button } from 'mdbreact';
const styles = {
  header: {
    padding: '0',
    background: 'url(https://i.imgur.com/BZOlfik.jpg?1) center no-repeat',
    backgroundSize: 'cover',
    height: 25 + 'em'
  }
};
class Columbus extends Component {
  render() {
    return (
      <Card className="z-depth-0">
        <CardImage tag="div">
          <div style={styles.header} />
        </CardImage>
        <CardBody data-wow-delay="1s" className="animated fadeInRightBig">
          <div className="container">
            <div className="row flex-center">
              <div className="col-10">
                {/* building stats */}

                <div
                  style={{ height: 70 + 'em' }}
                  className="z-depth-3 embed-responsive embed-responsive-16by9"
                >
                  <iframe
                    className="embed-responsive-item"
                    src="/docs/SDP-Columbus.pdf#view=FitH"
                    width="100%"
                    height="100%"
                    allowFullScreen
                  />
                </div>
                <hr className="w-100" />
                <h5 className="mb-4">
                  Sound like the right investment for you?
                </h5>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <Link className="btn btn-primary" to="/info/contact">
                      Contact Us
                    </Link>
                  </div>
                  <div>
                    <Link to="/markets/columbus/summary">Back to Overview</Link>
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

export default Columbus;
