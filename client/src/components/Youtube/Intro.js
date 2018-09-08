import React, { Component } from 'react';
import Youtube from 'react-youtube';
class Intro extends Component {
  render() {
    const opts = {
      height: '315',
      width: '560',
      playerVars: {
        autoplay: 1
      }
    };
    return (
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/q9sRSrwe-CM" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen/>
      </div>
    );
  }

  // _onReady(e) {
  //   console.log('e: ', e.target);
  //   e.target.playVideo();
  // }
}

export default Intro;
