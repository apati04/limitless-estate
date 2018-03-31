import React, { Component } from 'react';
import IconSection from '../components/IconSection';
import LandingParallax from '../components/LandingParallax';
import InfoSection from '../components/InfoSection';
import MemberSection from '../components/landing_section/MemberSection';
import PicCarousel from '../components/PicCarousel';
import ImpactInfo from './landing/Impact_info';
import IraInfo from './landing/Ira_info';
class LandingPage extends Component {
  render() {
    return (
      <div>
        <PicCarousel />
        <IconSection />
        <LandingParallax />
        <InfoSection />
        <ImpactInfo />
        <IraInfo link="/info/investing/ira401k" />
        <MemberSection />
      </div>
    );
  }
}

export default LandingPage;
