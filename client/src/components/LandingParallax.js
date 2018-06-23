import React from 'react';
import { View, Mask } from 'mdbreact';

const img = '/img/vnCJr0J.jpg';
const styles = {
  bgImage: {
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100%'
  }
};
const LandingParallax = () => {
  return (
    <section style={{ height: 20 + 'em' }}>
      <View style={styles.bgImage}>
        <div className="dark-overlay">
          <Mask className="flex-center h1-responsive font-weight-bold  white-text">
            Reasons to invest in multifamily...
          </Mask>
        </div>
      </View>
    </section>
  );
};
export default LandingParallax;
