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
import { NavLink, Link } from 'react-router-dom';
import Article from '../../components/templates/Article';
const styles = {
  header: {
    background: `url(${'https://i.imgur.com/BZOlfik.jpg?1'})center center no-repeat`,
    backgroundSize: 'cover',
    height: 27 + 'em'
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

        <div className="view hm-black-light">
          <CardImage
            style={{ height: 27 + 'em' }}
            src="https://i.imgur.com/3qqAILY.jpg?1"
            className="d-sm-none d-block im-fluid"
          />
        </div>
        <CardBody>
          <Container>
            <div className="row p-4 justify-content-around text-left">
              <div className="col-12 col-md-8">
                <h2 className="h4-responsive">Columbus, OH</h2>
                {this.renderContent()}
              </div>
              <div className="col-12 col-md-8">
                <NavLink className="white-text" to="/markets/columbus/sdp">
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

export default Columbus;
