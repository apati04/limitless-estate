import React from 'react';

const Footer = () => {
  return ( 
    <footer id="myFooter">
      <div className="container">
        <div className="row">
          <div className="col-sm-3 myCols">
            <h5>Get started</h5>
            <ul>
              <li><a>Home</a></li>
              <li><a>Sign up</a></li>
              <li><a>Downloads</a></li>
            </ul>
          </div>
          <div className="col-sm-3 myCols">
            <h5>About us</h5>
            <ul>
              <li><a >Company Information</a></li>
              <li><a >Contact us</a></li>
              <li><a >Reviews</a></li>
            </ul>
          </div>
          <div className="col-sm-3 myCols">
            <h5>Support</h5>
            <ul>
              <li><a >FAQ</a></li>
              <li><a >Help desk</a></li>
              <li><a >Forums</a></li>
            </ul>
          </div>
          <div className="col-sm-3 myCols">
            <h5>Legal</h5>
            <ul>
              <li><a >Terms of Service</a></li>
              <li><a >Terms of Use</a></li>
              <li><a >Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="social-networks">
        <a  className="twitter"><i className="fab fa-twitter"></i></a>
        <a  className="facebook"><i className="fab fa-facebook"></i></a>
        <a className="google"><i className="fab fa-google-plus-g"></i></a>
      </div>
      <div className="footer-copyright">
        <p>© 2018 Limitless Estates, LLC</p>
      </div>
    </footer>
  )
}
export default Footer;