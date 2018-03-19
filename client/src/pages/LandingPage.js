import React, { Component } from 'react';
import SlideShow from '../components/Carosuel';
import IconSection from '../components/IconSection';
import LandingParallax from '../components/LandingParallax';
import InfoSection from '../components/InfoSection';
import MemberSection from '../components/home/MemberSection';
import Test from '../components/templates/LandingSection';
import HeaderSection from '../components/home/HeaderSection';
class LandingPage extends Component {
  render() {
    return (
      <div>
        <HeaderSection />
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
