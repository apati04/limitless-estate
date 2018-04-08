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
    padding: '0',
    background: 'url(https://i.imgur.com/BZOlfik.jpg?1) center no-repeat',
    backgroundSize: 'cover',
    height: 25 + 'em'
  }
};
class Columbus extends Component {
  renderContent = () => {
    const main = summary[0].body;
    const { list } = summary[1];
    const body = main.map((e, i) => <CardText key={i}>{e}</CardText>);
    const listItems = list.map((e, i) => (
      <CardText key={i}>
        <li>{e}</li>
      </CardText>
    ));
    return (
      <div className="mt-4">
        {body}
        <ul>{listItems}</ul>
      </div>
    );
  };

  render() {
    return (
      <Card className="z-depth-0">
        <CardImage tag="div">
          <div style={styles.header} />
        </CardImage>
        <CardBody>
          <div className="container">
            <div className="row no-gutters justify-content-around py-3">
              <div className="col-12 col-md-8 text-align-left">
                <div>
                  <CardTitle>Columbus, OH</CardTitle>
                  <div className="border-bottom" />
                  {this.renderContent()}

                  <div className=" text-center text-sm-left">
                    <CardText>
                      Check out the sample deal package below:
                    </CardText>
                    <NavLink
                      className="ml-0 btn btn-lg btn-primary white-text text-center"
                      to="/markets/columbus/sdp"
                    >
                      Sample Deal Package
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="pr-0 col-md-4 d-none d-md-block">
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
