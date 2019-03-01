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
        <div className="view">
          <div style={styles.header} />
        </div>

        {this.renderProfile()}
      </div>
    );
  }
}

export default AboutUs;
