import React, { Component } from 'react';
import { View, Mask, Button } from 'mdbreact';
import summary from './summary_data';
import { NavLink } from 'react-router-dom';

class Columbus extends Component {
  renderContent = () => {
    const main = summary[0].body;
    return main.map((e, i) => (
      <p className="h4-responsive" key={i}>
        {e}
      </p>
    ));
  };
  render() {
    return (
      <div>
        <View className="rgba-blue-strong" style={{ height: 25 + 'em' }}>
          <Mask className="flex-center">Detroit Summary</Mask>
        </View>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10">{this.renderContent()}</div>
            <div className="col-12">
              <Button size="lg" coloe="blue">
                <NavLink to="/markets/columbus/sdp">
                  Sample Deal Package
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Columbus;
