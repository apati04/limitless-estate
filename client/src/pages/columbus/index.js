import React, { Component } from 'react';
import { View, Mask, Button, Card, CardImage } from 'mdbreact';
import summary from './summary_data';
import { NavLink, Link } from 'react-router-dom';
import Article from '../../components/templates/Article';

class Columbus extends Component {
  renderContent = () => {
    const main = summary[0].body;
    const { list } = summary[1];
    const body = main.map((e, i) => <p key={i}>{e}</p>);
    const listItems = list.map((e, i) => <li key={i}>{e}</li>);
    return (
      <div>
        {body}
        <ul style={{ listStyle: 'inside' }} className="p-0">
          {listItems}
        </ul>
      </div>
    );
  };

  render() {
    return (
      <Card>
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-8">
              <h1 className="display-4 font-bold text-white">Columbus, OH</h1>
              <div>{this.renderContent()}</div>
              <div />
              <div className="col-12 text-center">
                <NavLink className="white-text" to="/markets/columbus/sdp">
                  <Button size="lg" color="blue">
                    Sample Deal Package
                  </Button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

export default Columbus;
