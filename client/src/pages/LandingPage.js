import React, { Component } from 'react';
import SlideShow from '../components/Carosuel';
import IconSection from '../components/IconSection';
import LandingParallax from '../components/LandingParallax';
import InfoSection from '../components/InfoSection';
import MemberSection from '../components/home/MemberSection';
class LandingPage extends Component {
  render() {
    return (
      <div>
        <SlideShow />
        <IconSection />
        <LandingParallax />
        <InfoSection />
        <MemberSection />
      </div>
    );
  }
}

export default LandingPage;
