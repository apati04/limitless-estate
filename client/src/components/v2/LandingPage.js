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
        <footer id="myFooter">
          <div className="container">
            <div className="row">
              <div className="col-sm-3 myCols">
                <h5>Get started</h5>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Sign up</a></li>
                  <li><a href="#">Downloads</a></li>
                </ul>
              </div>
              <div className="col-sm-3 myCols">
                <h5>About us</h5>
                <ul>
                  <li><a href="#">Company Information</a></li>
                  <li><a href="#">Contact us</a></li>
                  <li><a href="#">Reviews</a></li>
                </ul>
              </div>
              <div className="col-sm-3 myCols">
                <h5>Support</h5>
                <ul>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Help desk</a></li>
                  <li><a href="#">Forums</a></li>
                </ul>
              </div>
              <div className="col-sm-3 myCols">
                <h5>Legal</h5>
                <ul>
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="#">Terms of Use</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="social-networks">
            <a href="#" className="twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" className="facebook"><i className="fab fa-facebook"></i></a>
            <a href="#" className="google"><i className="fab fa-google-plus-g"></i></a>
          </div>
          <div className="footer-copyright">
            <p>© 2016 Copyright Text </p>
          </div>
        </footer>
      </div>
    )
  }
}

export default LandingPage;
