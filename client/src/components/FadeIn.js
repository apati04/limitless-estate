import React, { Component } from 'react';
import { FadeIn as Animation } from 'react-lazyload-fadein';

class FadeIn extends Component {
  render() {
    return (
      <Animation
        height={600}
        render={onload => {
          console.log(onload);
          return (
            <div onLoad={onload} style={{ height: '100%' }}>
              {this.props.children}
            </div>
          );
        }}
      />
    );
  }
}

export default FadeIn;
