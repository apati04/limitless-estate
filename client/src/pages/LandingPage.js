import React, { Component } from 'react';

import IconSection from '../components/IconSection';
import LandingParallax from '../components/LandingParallax';
import InfoSection from '../components/InfoSection';
import MemberSection from '../components/home/MemberSection';
import Test from '../components/templates/LandingSection';
const SlideShow = () => <div>slideshow</div>;

class LandingPage extends Component {
  render() {
    return (
      <div>
        <SlideShow />
        <IconSection />
        <LandingParallax />
        <InfoSection />
        <MemberSection />
        <Test />
      </div>
    );
  }
}

export default LandingPage;
