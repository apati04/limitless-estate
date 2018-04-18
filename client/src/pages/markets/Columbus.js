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
    const pdfCol = '/docs/SDP-Columbus.pdf';

    //https://drive.google.com/file/d/1zPPDZuutwMX2kvGR5z5TqWeHsBHruYQN/view?embedded=true&usp=sharing
    return (
      <Card className="z-depth-0">
        <CardImage tag="div">
          <div style={styles.header} />
        </CardImage>
        <CardBody data-wow-delay="1s" className="animated fadeInRightBig">
          <div className="container">
            <div className="row justify-content-around">
              <div className="col-12  col-lg-10">
                {/* building stats */}
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
                      src="https://docs.google.com/viewer?srcid=1_3rpMpTltGTL16KiRo23mMtSt-ZaTgmf&pid=explorer&efh=false&a=v&chrome=false&w=1600&webp=true&embedded=true&scale=100"
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
                      <Link to="/markets/columbus/summary">
                        Back to Overview
                      </Link>
                    </div>
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
