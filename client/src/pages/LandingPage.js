import React, { Component } from 'react';
import IconSection from '../components/IconSection';
import LandingParallax from '../components/LandingParallax';
import InfoSection from '../components/InfoSection';
import MemberSection from '../components/landing_section/MemberSection';
import PicCarousel from '../components/PicCarousel';
import ImpactInfo from './landing/Impact_info';
import MailChimpSubscribe from '../components/MailChimp/Subscribe';
class LandingPage extends Component {
  render() {
    return (
      <div>
        <PicCarousel />
        <IconSection />
        <LandingParallax />
        <InfoSection />
        <ImpactInfo />
        <MemberSection />
        <MailChimpSubscribe />
      </div>
    );
  }
}

export default LandingPage;
