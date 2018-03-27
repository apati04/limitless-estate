import React, { Component } from 'react';

import IconSection from '../components/IconSection';
import LandingParallax from '../components/LandingParallax';
import InfoSection from '../components/InfoSection';
import MemberSection from '../components/landing_section/MemberSection';
import SupportCo from './SupportCo';
import Header from '../components/landing_section/Header';
import Carosuel from '../components/PicCarousel';
import ImpactInvesting from './landing/Impact_info';

class LandingPage extends Component {
  componentWillReceiveProps(nextProps) {
    console.log('nextProps: ', nextProps);
  }
  render() {
    return (
      <div data-wow-delay="1s" className="animated fadeIn">
        <Carosuel />
        <IconSection />
        <LandingParallax />

        <InfoSection />

        <ImpactInvesting />
        <SupportCo />
        <MemberSection />
      </div>
    );
  }
}

export default LandingPage;
