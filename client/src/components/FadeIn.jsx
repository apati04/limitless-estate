import React, { Component } from "react";
import { FadeIn as Animation } from "react-lazyload-fadein";

class FadeIn extends Component {
  render() {
    return (
      <Animation height={600}>
        {onload => (
          <div onLoad={onload}>
            {this.props.children}
          </div>
        )}
      </Animation>
    );
  }
}

export default FadeIn;
