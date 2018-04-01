import React, { Component } from 'react';
import { View, Mask, Button } from 'mdbreact';
import summary from './summary_data';
import { Link } from 'react-router-dom';

class Columbus extends Component {
  renderContent = () => {
    const main = summary[0].body;
    return main.map((e, i) => (
      <p className="text-left" key={i}>
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
            <h1 className="h1-responsive text-white font-bold">
              Columbus, Ohio
            </h1>
            <h2 className="mt-4 h4-responsive text-white">
              Overview and{' '}
              <Link className="text-white" to="/markets/columbus/sdp">
                <strong>Sample Deal Package</strong>
              </Link>
            </h2>
          </Mask>
        </View>
        <div className="container-fluid my-5">
          <div className="row no-gutters justify-content-center">
            <div className="col-12 col-md-8">
              {this.renderContent()}

              <ul style={{ listStyle: 'inside' }} className="p-0">
                {this.renderList()}
              </ul>
            </div>
            <div className="col-12 text-center">
              <Link to="/markets/columbus/sdp">
                <Button className="h5" size="lg" color="blue">
                  View Sample Deal Package
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Columbus;
