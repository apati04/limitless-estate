import React, { Component } from 'react';
import { View, Mask, Button } from 'mdbreact';
import summary from './summary_data';
import { Link } from 'react-router-dom';
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
        <ul>{listItems}</ul>
      </div>
    );
  };
  renderList = () => {};
  render() {
    return (
      <div>
        <div className="animated fadeIn rgba-blue-grey-slight">
          <Article
            headerImage="https://i.imgur.com/YXieUK4.jpg"
            overlayColor="hm-purple-slight"
            title="What is Impact Investing?"
            subTitle="Often called a “double bottom line” investment, impact investing enables investors to put their money to good use in meaningful, intelligent ventures that provide both a financial AND a social return on their investment."
            circleImage="https://i.imgur.com/2A3IGvX.jpg?1"
            body={this.renderContent()}
          />
        </div>
      </div>
    );
  }
}

export default Columbus;
/*
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
*/
