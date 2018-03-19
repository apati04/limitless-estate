import React, { Component } from 'react';
import SlideShow from '../components/Carosuel';
import IconSection from '../components/IconSection';
import LandingParallax from '../components/LandingParallax';
import InfoSection from '../components/InfoSection';
import NewsLetter from '../components/NewsLetter';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <SlideShow />
        <IconSection />
        <LandingParallax />
        <InfoSection />
        <NewsLetter />
      </div>
    );
  }
}

export default LandingPage;
