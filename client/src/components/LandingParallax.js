import React from 'react';
import { NavLink } from 'react-router-dom';
import { View, Mask, Button } from 'mdbreact';

const img = 'https://i.imgur.com/vnCJr0J.jpg';
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
const LandingParallax = () => {
  return (
    <div>
      <section style={{ height: 22 + 'em' }}>
        <View style={styles.bgImage}>
          <Mask className="dark-overlay flex-center">
            <div className="text-center w-75">
              <h1 className="h1-responsive font-weight-bold cyan-text mb-3">
                Impact Investing
              </h1>
              <h3 className="h3-responsive white-text">
                Impact investing enables investors to put their money to good
                use in meaningful, intelligent ventures that provide both a
                financial AND a social return on their investment.
              </h3>
              <NavLink to="/resources/impactinvesting">
                <Button outline color="cyan" size="lg">
                  Learn More
                </Button>
              </NavLink>
            </div>
          </Mask>
        </View>
      </section>
      <section style={{ height: 22 + 'em' }}>
        <View style={styles.bgImage} className="hm-black-slight">
          <Mask className="flex-center">
            <div className="text-center w-75">
              <h1 className="h1-responsive font-weight-bold cyan-text mb-3">
                Impact Investing
              </h1>
              <h3 className="h3-responsive white-text">
                Impact investing enables investors to put their money to good
                use in meaningful, intelligent ventures that provide both a
                financial AND a social return on their investment.
              </h3>
              <NavLink to="/resources/impactinvesting">
                <Button rounded color="indigo" size="md">
                  Learn More
                </Button>
              </NavLink>
            </div>
          </Mask>
        </View>
      </section>
      <section style={{ height: 22 + 'em' }}>
        <View style={styles.bgImage} className="hm-black-light">
          <Mask className="flex-center">
            <div className="text-center w-75">
              <h1 className="h1-responsive font-weight-bold cyan-text mb-3">
                Impact Investing
              </h1>
              <h3 className="h3-responsive white-text">
                Impact investing enables investors to put their money to good
                use in meaningful, intelligent ventures that provide both a
                financial AND a social return on their investment.
              </h3>
              <NavLink to="/resources/impactinvesting">
                <Button outline color="cyan" size="lg">
                  Learn More
                </Button>
              </NavLink>
            </div>
          </Mask>
        </View>
      </section>
      <section style={{ height: 22 + 'em' }}>
        <View style={styles.bgImage} className="hm-black-strong">
          <Mask className="flex-center">
            <div className="text-center w-75">
              <h1 className="h1-responsive font-weight-bold cyan-text mb-3">
                Impact Investing
              </h1>
              <h3 className="h3-responsive white-text">
                Impact investing enables investors to put their money to good
                use in meaningful, intelligent ventures that provide both a
                financial AND a social return on their investment.
              </h3>
              <NavLink to="/resources/impactinvesting">
                <Button outline color="cyan" size="lg">
                  Learn More
                </Button>
              </NavLink>
            </div>
          </Mask>
        </View>
      </section>
      <section style={{ height: 22 + 'em' }}>
        <View style={styles.bgImage} className="hm-indigo-slight">
          <Mask className="flex-center">
            <div className="text-center w-75">
              <h1 className="h1-responsive font-weight-bold cyan-text mb-3">
                Impact Investing
              </h1>
              <h3 className="h3-responsive white-text">
                Impact investing enables investors to put their money to good
                use in meaningful, intelligent ventures that provide both a
                financial AND a social return on their investment.
              </h3>
              <NavLink to="/resources/impactinvesting">
                <Button outline color="cyan" size="lg">
                  Learn More
                </Button>
              </NavLink>
            </div>
          </Mask>
        </View>
      </section>{' '}
      <section style={{ height: 22 + 'em' }}>
        <View style={styles.bgImage} className="hm-indigo-light">
          <Mask className="flex-center">
            <div className="text-center w-75">
              <h1 className="h1-responsive font-weight-bold cyan-text mb-3">
                Impact Investing
              </h1>
              <h3 className="h3-responsive white-text">
                Impact investing enables investors to put their money to good
                use in meaningful, intelligent ventures that provide both a
                financial AND a social return on their investment.
              </h3>
              <NavLink to="/resources/impactinvesting">
                <Button outline color="cyan" size="lg">
                  Learn More
                </Button>
              </NavLink>
            </div>
          </Mask>
        </View>
      </section>
      <section style={{ height: 22 + 'em' }}>
        <View style={styles.bgImage} className="hm-indigo-strong">
          <Mask className="flex-center">
            <div className="text-center w-75">
              <h1 className="h1-responsive font-weight-bold cyan-text mb-3">
                Impact Investing
              </h1>
              <h3 className="h3-responsive white-text">
                Impact investing enables investors to put their money to good
                use in meaningful, intelligent ventures that provide both a
                financial AND a social return on their investment.
              </h3>
              <NavLink to="/resources/impactinvesting">
                <Button outline color="cyan" size="lg">
                  Learn More
                </Button>
              </NavLink>
            </div>
          </Mask>
        </View>
      </section>{' '}
      <section style={{ height: 22 + 'em' }}>
        <View style={styles.bgImage} className="hm-brown-slight">
          <Mask className="flex-center">
            <p className="h1-responsive white-text">
              Reasons to invest in multifamily...
            </p>
          </Mask>
        </View>
      </section>{' '}
      <section style={{ height: 22 + 'em' }}>
        <View style={styles.bgImage} className="hm-brown-light">
          <Mask className="flex-center">
            <p className="h1-responsive white-text">
              Reasons to invest in multifamily...
            </p>
          </Mask>
        </View>
      </section>{' '}
      <section style={{ height: 22 + 'em' }}>
        <View style={styles.bgImage} className="hm-brown-strong">
          <Mask className="flex-center">
            <p className="h1-responsive white-text">
              Reasons to invest in multifamily...
            </p>
          </Mask>
        </View>
      </section>{' '}
      <section style={{ height: 20 + 'em' }}>
        <View style={styles.bgImage} className="hm-indigo-light">
          <Mask className="flex-center">
            <p className="h1-responsive white-text">
              Reasons to invest in multifamily...
            </p>
          </Mask>
        </View>
      </section>{' '}
      <section style={{ height: 20 + 'em' }}>
        <View style={styles.bgImage} className="hm-purple-strong">
          <Mask className="flex-center">
            <p className="h1-responsive white-text">
              Reasons to invest in multifamily...
            </p>
          </Mask>
        </View>
      </section>{' '}
      <section style={{ height: 20 + 'em' }}>
        <View style={styles.bgImage} className="hm-pink-strong">
          <Mask className="flex-center">
            <p className="h1-responsive white-text">
              Reasons to invest in multifamily...
            </p>
          </Mask>
        </View>
      </section>{' '}
      <section style={{ height: 20 + 'em' }}>
        <View style={styles.bgImage} className="hm-red-strong">
          <Mask className="flex-center">
            <p className="h1-responsive white-text">
              Reasons to invest in multifamily...
            </p>
          </Mask>
        </View>
      </section>{' '}
      <section style={{ height: 20 + 'em' }}>
        <View style={styles.bgImage} className="hm-bluegrey-light">
          <Mask className="flex-center">
            <p className="h1-responsive white-text">
              Reasons to invest in multifamily...
            </p>
          </Mask>
        </View>
      </section>
    </div>
  );
};
export default LandingParallax;
