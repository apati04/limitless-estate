import React, { Component } from 'react';
import { View, Mask } from 'mdbreact';
import Kyle from '../AboutUs/Kyle';
import Lalita from '../AboutUs/Lalita';

const styles = {
  header: {
    padding: '0',
    background: 'url(https://i.imgur.com/3LUFyC1.jpg?1) center no-repeat',
    backgroundSize: 'cover',
    height: 25 + 'em'
  }
};
class AboutUs extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  renderProfile() {
    if (this.props.location.pathname === '/members/about/kyle') {
      return <Kyle />;
    }
    if (this.props.location.pathname === '/members/about/lalita') {
      return <Lalita />;
    }
    return (
      <div>
        <Kyle />
        <Lalita />
      </div>
    );
  }
  render() {
    return (
      <div>
        <View>
          <div style={styles.header} />
        </View>
        <div className="container">
          <div className="row flex-wrap justify-content-between text-left">
            {this.renderProfile()}
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
