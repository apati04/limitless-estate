import React, { Component } from 'react';
import MapBox from '../../components/MapBox';
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

const styles = {
  header: {
    padding: '0',
    background: 'url(https://i.imgur.com/GwLW8SA.jpg?1) 50% 70% no-repeat',
    backgroundSize: 'cover',
    height: 25 + 'em'
  }
};

class Phoenix extends Component {
  renderContent = () => {
    return summary[0].body.map((item, index) => {
      return <p key={'phx' + index}>{item}</p>;
    });
  };
  renderList = () => {
    return summary[1].list.map((listItem, index) => {
      return <li key={'phxlist' + index}>{listItem}</li>;
    });
  };
  render() {
    return (
      <section className="animated fadeIn z-depth-0">
        <div style={styles.header} />
        <div className="container">
          <div className="row justify-content-around my-4">
            <div className="col-12 col-md-8 text-left text-justify">
              <div>
                <h3 className="h3-responsive text-center text-md-left mb-4">
                  Phoenix, AZ
                </h3>
                <div className="border-bottom" />
                <div className="mt-4">
                  {this.renderContent()}
                  <ul>{this.renderList()}</ul>
                </div>
                <div className="text-center text-sm-left">
                  <NavLink
                    className="btn btn-lg btn-primary white-text"
                    to="/markets/phoenix/sdp"
                  >
                    Sample Deal Package
                  </NavLink>
                </div>
              </div>
            </div>
            <div
              style={{ marginRight: -1 + 'em' }}
              className="pr-0 col-md-4 d-none d-md-block"
            >
              <MapBox roundedCi mapStyle={{height: 22 + 'em', width: 22+ 'em', marginTop: -5 + 'em' }} address="Phoenix, AZ" zoomLevel={10} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Phoenix;
