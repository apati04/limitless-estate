import React, { Component } from 'react';
import { View, Mask, Button } from 'mdbreact';
import summary from './summary_data';
import { NavLink } from 'react-router-dom';

class Detroit extends Component {
  renderContent = () => {
    const main = summary[0].body;
    return main.map((e, i) => (
      <p className="" key={i}>
        {e}
      </p>
    ));
  };
  renderList = () => {
    const { list } = summary[1];
    return list.map((e, i) => <li key={i}>{e}</li>);
  };

  render() {
    return (
      <div>
        <View className="bg-mdb-color" style={{ height: 22 + 'em' }}>
          <Mask className="flex-column flex-center">
            <h1 className="display-4 font-bold text-white">Detroit, MI</h1>
            <h2 className="mt-4 h4-responsive text-white">
              Overview and{' '}
              <NavLink className="text-white" to="/markets/detroit/sdp">
                <strong>Sample Deal Package</strong>
              </NavLink>
            </h2>
          </Mask>
        </View>
        <div style={{ minHeight: '100vh' }} className="container my-5">
          <div className="row justify-content-center">
            <div className="col-8">
              <div>{this.renderContent()}</div>
              <div>
                <ul>{this.renderList()}</ul>
              </div>
              <div className="col-12 text-center">
                <NavLink className="text-center" to="/markets/detroit/sdp">
                  <Button size="lg" color="blue">
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

export default Detroit;
