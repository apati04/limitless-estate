import React from 'react';
import { View, Mask } from 'mdbreact';

const LandingParallax = () => {
  const imgpara = 'https://i.imgur.com/vnCJr0J.jpg';
  return (
    <section style={{ height: 20 + 'em' }}>
      <div
        className="view"
        style={{
          backgroundImage: `url(${imgpara})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '100%'
        }}
      >
        <div className="dark-overlay">
          <Mask className="flex-center h1-responsive font-weight-bold  white-text">
            Reasons to invest in multifamily...
          </Mask>
        </div>
      </div>
    </section>
  );
};
export default LandingParallax;
