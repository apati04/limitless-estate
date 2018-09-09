import React, { Component } from 'react';

class Intro extends Component {
  render() {
    return (
      <div className="embed-responsive embed-responsive-16by9">
        <iframe id="youtubeVideo" className="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/q9sRSrwe-CM?autoplay=1&enablejsapi=1" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen autoplay="1" />
      </div>
    );
  }
}

export default Intro;
