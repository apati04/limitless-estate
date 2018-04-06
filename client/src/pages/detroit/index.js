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
    background: `url(${'https://i.imgur.com/3qqAILY.jpg?1'})center center no-repeat`,
    backgroundSize: 'cover',
    height: 27 + 'em'
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
      <Card className="z-depth-0">
        <CardImage tag="div">
          <div className="view">
            <img
              className="img-fluid w-100"
              src="https://i.imgur.com/5beXJXj.jpg"
              alt=""
            />
          </div>
        </CardImage>

        <CardBody>
          <div className="container">
            <div className="row align-items-start justify-content-center justify-content-lg-end text-left mr-0">
              <div style={{ fontWeight: 300 }} className="col-md-9 text-left">
                <h2 className="h2-responsive">Detroit, MI</h2>

                {this.renderContent()}

                <ul className="m-0 pl-3">{this.renderList()}</ul>

                <div className="text-center text-sm-left">
                  <button className="btn btn-lg btn-primary">
                    <NavLink className=" white-text" to="/markets/columbus/sdp">
                      Sample Deal Package
                    </NavLink>
                  </button>
                </div>
              </div>
              <div className="pr-0 col-md-3 d-none d-md-block">
                {/* Financial Data */}
                <MapBox address="Detroit, MI" />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default Detroit;
