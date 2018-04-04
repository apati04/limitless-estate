import React, { Component } from 'react';
import MapBox from '../../components/MapBox';
import StickyBox from 'react-sticky-box';
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
      <div>
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
        <CardImage tag="div">
          <div style={styles.header} />
        </CardImage>

        <CardBody className="m-5 px-2">
          <Container>
            <div className="row no-gutters align-items-start justify-content-center text-left">
              <div className="col-12 col-md-8">
                <h2 className="h2-responsive">Columbus, OH</h2>
                {this.renderContent()}

                <NavLink className="white-text" to="/markets/columbus/sdp">
                  <Button size="lg" color="blue">
                    Sample Deal Package
                  </Button>
                </NavLink>
              </div>
              <div className="ml-auto p-0 m-0 col-12 col-lg-4  d-none d-lg-block">
                <StickyBox className="m-0 p-0">
                  <MapBox address="2201 Riverside Drive, Columbus, OH" />
                </StickyBox>
              </div>
            </div>
          </Container>
        </CardBody>
      </Card>
    );
  }
}

export default Columbus;
