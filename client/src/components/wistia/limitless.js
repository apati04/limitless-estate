import React, { Component } from 'react';

class Limitless extends Component {
  render() {
    return (
      <div
        className="wistia_embed wistia_async_pueh6irs0z videoFoam=true"
        style={{ height: '100%', position: 'relative', width: '100%' }}
      >
        <div
          className="wistia_swatch"
          style={{
            height: '100%',
            left: 0,
            opacity: 0,
            overflow: 'hidden',
            position: 'absolute',
            top: 0,
            transition: 'opacity 200ms',
            width: '100%'
          }}
        >
          <img
            src="https://fast.wistia.com/embed/medias/pueh6irs0z/swatch"
            style={{
              filter: 'blur(5px)',
              height: '100%',
              objectFit: 'contain',
              width: '100%'
            }}
            alt=""
            onload="this.parentNode.style.opacity=1;"
          />
        </div>
      </div>
    );
  }
}

export default Limitless;
