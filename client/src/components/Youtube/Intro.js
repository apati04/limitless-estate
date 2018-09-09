import React, { Component } from 'react';

class Intro extends Component {
  render() {
    return (
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/q9sRSrwe-CM" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
      </div>
    );
  }
}

export default Intro;
