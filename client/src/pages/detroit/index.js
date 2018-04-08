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
    return list.map((e, i) => (
      <li className="list-item text-wrap" key={i}>
        {e}
      </li>
    ));
  };

  render() {
    return (
      <section id="overview">
        <div style={styles.header} />

        <div className="container mr-3">
          <div className="row justify-content-center py-3">
            <div className="col-8 col-md-8 text-left text-align-left">
              <div>
                <h2 className="h3-responsive">Detroit, MI</h2>

                {this.renderContent()}

                <ul className="pl-3">{this.renderList()}</ul>

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
            <div className="pr-0 col-md-4 d-none d-md-block">
              {/* Financial Data */}
              <MapBox address="Detroit, MI" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Detroit;
