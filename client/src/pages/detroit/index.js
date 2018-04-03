import React, { Component } from 'react';
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
    return list.map((e, i) => <li key={i}>{e}</li>);
  };

  render() {
    return (
      <Card className="h-100 z-depth-0">
        <div>
          <CardImage
            src="https://i.imgur.com/c5f5NOc.jpg"
            className="w-100 h-100 d-none d-sm-block"
          />
        </div>

        <div className="view hm-black-light">
          <CardImage
            src="https://i.imgur.com/3qqAILY.jpg?1"
            className="w-100  d-sm-none"
          />
        </div>

        <CardBody>
          <Container>
            <div className="row align-items-stretch justify-content-around text-left">
              <div className="col-12 col-md-8">
                <h2 className="h4-responsive">Detroit, MI</h2>

                {this.renderContent()}
              </div>
              <div className="col-12 col-md-8">
                <ul style={{ padding: 0, listStyle: 'inside' }}>
                  {this.renderList()}
                </ul>
                <NavLink className="white-text" to="/markets/detroit/sdp">
                  <Button size="lg" color="blue">
                    Sample Deal Package
                  </Button>
                </NavLink>
              </div>
            </div>
          </Container>
        </CardBody>
      </Card>
    );
  }
}

export default Detroit;
