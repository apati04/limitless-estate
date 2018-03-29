import React, { Component } from 'react';
import { View, Mask, Button } from 'mdbreact';
import summary from './summary_data';
import { NavLink } from 'react-router-dom';

class Columbus extends Component {
  renderContent = () => {
    const main = summary[0].body;
    return main.map((e, i) => (
      <p className="" key={i}>
        {e}
      </p>
    ));
  };
  render() {
    return (
      <div>
        <View className="bg-mdb-color" style={{ height: 22 + 'em' }}>
          <Mask className="flex-column flex-center">
            <h1 className="text-white font-bold">Columbus, Ohio</h1>
            <h2 className="mt-4 h4-responsive text-light text-white">
              Overview and SDP
            </h2>
          </Mask>
        </View>
        <div style={{ minHeight: '100vh' }} className="container-fluid my-5">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8">
              {this.renderContent()}
              <div className="text-right">
                <NavLink to="/markets/columbus/sdp">
                  <Button className="text-right" size="lg" color="blue">
                    Sample Deal Package
                  </Button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Columbus;
