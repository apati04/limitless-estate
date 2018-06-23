import React from 'react';
import { NavLink } from 'react-router-dom';
import { View, Mask, Button } from 'mdbreact';
const styles = {
  bgImage: {
    backgroundImage: `url("https://i.imgur.com/kC8zbBM.jpg")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100%'
  }
};
export default () => {
  return (
    <section style={{ height: 42 + 'em' }}>
      <View style={styles.bgImage} className="hm-black-light">
        <Mask className="dark-overlay flex-column flex-center">
          <div className="w-75 text-center text-justify-center text-md-center">
            <h1 className="h1-responsive font-weight-bold text-white mb-3">
              Impact Investing
            </h1>
            <p className="mb-3 h3-responsive white-text">
              Impact investing enables investors to put their money to good use
              in meaningful, intelligent ventures that provide both a financial
              AND a social return on their investment.
            </p>
            <NavLink
              className="btn btn-primary"
              to="/resources/impactinvesting"
            >
              Impact Investing
            </NavLink>
          </div>
          <div className="w-75 mt-4 text-center text-justify-center text-md-center white-text">
            <h1 className="h1-responsive font-weight-bold text-white mb-3">
              Did you know...
            </h1>

            <p className="mb-3 h3-responsive white-text">
              You can invest with your 401k/IRA?
            </p>

            <NavLink
              className="btn btn-primary"
              to="/info/investing/ira401k"
              size="md"
            >
              Invest With your 401k/IRA
            </NavLink>
          </div>
        </Mask>
      </View>
    </section>
  );
};
