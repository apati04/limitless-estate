import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../../components/FadeIn';
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
    height: 27 + 'em'
  }
};
class Columbus extends Component {
  render() {
    return (
      <Card className="z-depth-0">
        <CardImage tag="div">
          <div style={styles.header} />
        </CardImage>
        {/* <PageHeader title={title} /> */}
        <CardBody data-wow-delay="1s" className="animated fadeInRightBig py-3">
          <div className="container">
            <div className="row flex-center">
              <div className="col-8">
                {/* building stats */}
                <div
                  style={{ height: 100 + 'em' }}
                  className="animate fadeInLeftBig embed-responsive embed-responsive-16by9"
                >
                  <iframe
                    className=" embed-responsive-item"
                    src="https://drive.google.com/file/d/1LjcORGxJIbLN4gid_q8aax7J0RsTjItM/preview"
                    width="640"
                    height="480"
                    allowFullScreen
                  />
                </div>
                <hr />
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
                    <Link to="/">Back to Home</Link>
                  </div>
                </form>
              </div>
              {/* <div className="col-12 col-lg-4 mt-4 d-none d-lg-block">
                <StickyBox style={{ marginTop: '-100px', paddingTop: '100px' }}>
                  <MapBox address="2201 Riverside Drive, Columbus, OH" />
                </StickyBox>
              </div> */}
            </div>
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default Columbus;
