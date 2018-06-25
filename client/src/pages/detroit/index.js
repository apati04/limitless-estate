import React, { Component } from 'react';
import GoogleMap from '../../components/GoogleMap/GoogleMap';
import {
  Button,
  Card,
  CardImage,
  CardBody,
  CardText,
  CardTitle,
  Container,
  View
} from 'mdbreact';
import summary from './summary_data';
import { NavLink } from 'react-router-dom';
//  src="https://i.imgur.com/ycNbBgG.jpg?1"

const styles = {
  header: {
    padding: '0',
    background: 'url(https://i.imgur.com/5beXJXj.jpg?2) bottom no-repeat',
    backgroundSize: 'cover',
    height: 25 + 'em'
  }
};
class Detroit extends Component {
  renderContent = () => {
    const main = summary[0].body;
    return main.map((e, i) => <p key={i}>{e}</p>);
  };
  renderList = () => {
    const { list } = summary[1];
    return list.map((e, i) => <li key={i}>{e}</li>);
  };

  render() {
    const [lat, lng] = [42.3367495, -83.0525838];

    return (
      <section className="animated fadeIn z-depth-0" id="overview">
        <div style={styles.header} />

        <div className="container">
          <div className="row justify-content-around my-4">
            <div className="col-12 col-md-8 text-left text-justify">
              <div>
                <h3 className="h3-responsive text-center text-md-left mb-4">
                  Detroit, MI
                </h3>
                <div className="border-bottom" />
                <div className="mt-4">
                  {this.renderContent()}
                  <ul>{this.renderList()}</ul>
                </div>

                <div className="text-center text-sm-left">
                  <NavLink
                    className="btn btn-lg btn-primary white-text"
                    to="/markets/detroit/sdp"
                  >
                    Sample Deal Package
                  </NavLink>
                </div>
              </div>
            </div>
            <div
              style={{
                marginRight: -1 + 'em',
                height: '300px',
                width: '100%'
              }}
              className="pr-0 col-md-4 d-none d-md-block"
            >
              <GoogleMap
                centerMap={{ lat, lng }}
                mapLng={lng}
                mapLat={lat}
                zoomLevel={10}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Detroit;
