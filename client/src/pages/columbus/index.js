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
import { NavLink, Link } from 'react-router-dom';
import Article from '../../components/templates/Article';
const styles = {
  header: {
    background: `url(${'https://i.imgur.com/BZOlfik.jpg?1'})center center no-repeat`,
    backgroundSize: 'cover',
    height: 22 + 'em'
  }
};
class Columbus extends Component {
  renderContent = () => {
    const main = summary[0].body;
    const { list } = summary[1];
    const body = main.map((e, i) => <p key={i}>{e}</p>);
    const listItems = list.map((e, i) => <li key={i}>{e}</li>);
    return (
      <div style={{ fontWeight: 300 }}>
        {body}
        <ul style={{ padding: 0, listStyle: 'inside' }} className="p-0">
          {listItems}
        </ul>
      </div>
    );
  };

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
        <CardBody>
          <div className="container">
            <div className="row align-items-start justify-content-center justify-content-lg-end text-left mr-0">
              <div style={{ fontWeight: 300 }} className="col-md-9 text-left">
                <h2 className="h2-responsive">Columbus, OH</h2>
                <div>{this.renderContent()}</div>
                <div className="text-center text-sm-left">
                  <button className="btn btn-lg btn-primary">
                    <NavLink className=" white-text" to="/markets/columbus/sdp">
                      Sample Deal Package
                    </NavLink>
                  </button>
                </div>
              </div>
              <div className="pr-0 col-md-3 d-none d-md-block">
                <MapBox address="Columbus, OH" />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default Columbus;
