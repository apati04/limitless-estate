import './loader.css';
import React, { Component, Fragment } from 'react';
import { MDBSpinner } from 'mdbreact';
import Podcast from './Podcast';
import axios from 'axios';
class PodcastIndex extends Component {
  state = {
    episodes: null,
    width: window.innerWidth
  };
  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
    axios.get('/api/podcast').then(result => {
      this.setState({ episodes: result.data.data });
    });
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  handlePageView = () => {
    if (this.state.episodes === null) {
      return (
        <div className="loading">
          <div className="loader" />
        </div>
      );
    } else {
      return <Podcast episodes={this.state.episodes} />;
    }
  };
  render() {
    const deviceWidth = {
      mobile: 576,
      tablet: 768,
      laptop: 992,
      desktop: 1200
    };
    //
    let device;
    if (this.state.width < deviceWidth.mobile) {
      device = 'mobile';
    } else if (this.state.width < deviceWidth.tablet) {
      device = 'tablet';
    } else if (this.state.width < deviceWidth.laptop) {
      device = 'laptop';
    } else {
      device = 'desktop';
    }
    let pageView;

    return <Fragment>{this.handlePageView()}</Fragment>;
  }
}

export default PodcastIndex;
