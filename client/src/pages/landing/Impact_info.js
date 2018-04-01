import React from 'react';
import { NavLink } from 'react-router-dom';
import { View, Mask, Button } from 'mdbreact';
const img2 = 'https://i.imgur.com/kC8zbBM.jpg';
const styles = {
  bgImage: {
    backgroundImage: `url(${img2})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100%'
  }
};
export default () => {
  return (
    <section style={{ height: 22 + 'em' }}>
      <View style={styles.bgImage} className="hm-black-light">
        <Mask className="flex-center">
          <div className="text-center w-75">
            <h1 className="h1-responsive font-weight-bold cyan-text mb-3">
              Impact Investing
            </h1>
            <h3 className="h3-responsive white-text">
              Impact investing enables investors to put their money to good use
              in meaningful, intelligent ventures that provide both a financial
              AND a social return on their investment.
            </h3>
            <NavLink to="/resources/impactinvesting">
              <Button className="h5-responsive" color="cyan">
                Learn More
              </Button>
            </NavLink>
          </div>
        </Mask>
      </View>
    </section>
  );
};
