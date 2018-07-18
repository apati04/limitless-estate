import React, { Component } from 'react';
import summary from './summary';
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
const styles = {
  header: {
    padding: '0',
    background: 'url(https://i.imgur.com/w5aqhrW.jpg) 50% 50% no-repeat',
    backgroundSize: 'cover',
    height: 25 + 'em'
  }
};
class Tucson extends Component {
  renderContent = () => {
    return summary[0].body.map((item, index) => {
      return (
        <p className="textblockclass" key={'tuc' + index}>
          {item}
        </p>
      );
    });
  };
  render() {
    const [lat, lng] = [32.2151078, -110.9765115];
    return (
      <section className="animated fadeIn z-depth-0">
        <div style={styles.header} />
        <div className="container">
          <div className="row justify-content-around my-4">
            <div className="col-12 col-md-8 text-left text-justify">
              <div>
                <h3 className="h3-responsive text-center text-md-left mb-4">
                  Tucson, AZ
                </h3>
                <div className="border-bottom" />
                <div className="mt-4">{this.renderContent()}</div>
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
                zoomLevel={11}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Tucson;