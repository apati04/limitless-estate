import React from 'react';
import { NavLink } from 'react-router-dom';
import { View, Mask, Button } from 'mdbreact';

const img = 'https://i.imgur.com/vnCJr0J.jpg';
const img2 = 'https://i.imgur.com/kC8zbBM.jpg';
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
    <div>
      <section style={{ height: 20 + 'em' }}>
        <View style={styles.bgImage} className="hm-bluegrey-strong">
          <Mask className="flex-center">
            <p className="h1-responsive font-weight-medium white-text">
              Reasons to invest in multifamily...
            </p>
          </Mask>
        </View>
      </section>
    </div>
  );
};
export default LandingParallax;
