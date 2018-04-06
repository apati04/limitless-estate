import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MapBox from '../../components/MapBox';
import StickyBox from 'react-sticky-box';
import { Card, CardBody, CardImage, Button } from 'mdbreact';
// import PageHeader from '../../components/PageHeader';
const title = 'Sample Deal Package';
/**
 * Finacial Statements
 */

const pdfFile =
  'https://drive.google.com/file/d/1ZEywS1ClTgyRkVqfwGcISMzyPMhwDwgF/view?usp=sharing';
const styles = {
  header: {
    background: `url(${'https://i.imgur.com/BZOlfik.jpg?1'})center center no-repeat`,
    backgroundSize: 'cover',
    height: 22 + 'em'
  }
};
class Columbus extends Component {
  render() {
    return (
      <Card className="z-depth-0">
        <CardImage className="view" tag="div">
          <div>
            <img
              className="img-fluid w-100 "
              src="https://i.imgur.com/BZOlfik.jpg?2"
              alt=""
            />
          </div>
        </CardImage>

        <CardBody data-wow-delay="1s" className="animated fadeInRightBig pb-4">
          <div className="container">
            <div className="row flex-center">
              <div className="col-12">
                {/* building stats */}

                <div
                  style={{ height: 80 + 'em' }}
                  className="z-depth-2 embed-responsive embed-responsive-16by9"
                >
                  <iframe
                    className="embed-responsive-item"
                    src="/docs/columbusSDP.pdf#zoom=100"
                    width="100%"
                    height="100%"
                    allowFullScreen
                  />
                </div>
                <hr className="w-100" />
                <h5 className="mb-4">
                  Sound like the right investment for you?
                </h5>
                <form className="d-flex justify-content-between align-items-center">
                  <div>
                    <Link to="/info/contact">
                      <button className="btn btn-primary">Contact Us</button>
                    </Link>
                  </div>
                  <div>
                    <Link to="/markets/columbus/summary">Back to Overview</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default Columbus;
