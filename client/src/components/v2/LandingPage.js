import React, {Component} from 'react';
import SlideShow from './SlideShow';
import IconSection from './IconSection';
import LandingParallax from './LandingParallax';
import InfoSection from './InfoSection';
import NewsLetter from './NewsLetter';
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
    )
  }
}

export default LandingPage;
