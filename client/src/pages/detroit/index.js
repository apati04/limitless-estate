import React, { Component } from 'react';
import { View, Mask, Button } from 'mdbreact';
import summary from './summary_data';
import { NavLink } from 'react-router-dom';

class Detroit extends Component {
  renderContent = () => {
    const main = summary[0].body;
    return main.map((e, i) => (
      <div className="texttext-letter-spacing" key={i}>
        {e}
      </div>
    ));
  };
  renderList = () => {
    const { list } = summary[1];
    return list.map((e, i) => <li key={i}>{e}</li>);
  };

  render() {
    return (
      <div>
        <View className="unique-color white-text" style={{ height: 25 + 'em' }}>
          <Mask className="flex-center">
            <h1 className="h1-responsive font-weight-medium">
              Detroit Summary
            </h1>
          </Mask>
        </View>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10">
              <div>{this.renderContent()}</div>
              <div>
                <ul>{this.renderList()}</ul>
              </div>
              <div className="col-12">
                <Button size="lg" color="blue">
                  <NavLink to="/markets/detroit/sdp">
                    Sample Deal Package
                  </NavLink>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detroit;
