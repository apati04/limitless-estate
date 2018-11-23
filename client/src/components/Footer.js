import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Col, Container, Row, Footer } from "mdbreact";
const style = {
  footerStyle: {
    position: "absolute",
    bottom: 0,
    left: 0,
    height: "60px",
    color: "white"
  }
};
// const NavFooter = () => {
//   return (
//     <footer style={style.footerStyle} className="primary-color-dark w-100">
//       <div className="row flex-center">
//         <div className="col-12 d-flex flex-center">
//           <p className="white-text">
//             © 2018 Limitless Estates, LLC | Powered by:{' '}
//             <a
//               style={{ color: 'white', fontWeight: 'bold' }}
//               href="mailto:apax714@email.com"
//             >
//   AiTech
// </a>{' '}
// |{' '}
// <NavLink
//   style={{ color: 'white', fontWeight: 'bold' }}
//   className="white-text"
//   to="/legal"
// >
//   Disclaimer
// </NavLink>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

class NavFooter extends Component {
  render() {
    return (
      <Footer
        style={{ marginTop: 0 + "!important" }}
        color="primary-color-dark"
        className="pt-4"
      >
        <Container className="mt-4 mb-4 pr-0">
          <Row className="mt-3 pl-4 no-gutters">
            <Col md="3" lg="3" xl="3" className="mb-4 pl-2">
              <h5
                style={{ letterSpacing: "0.25px" }}
                className="text-uppercase font-weight-bold"
              >
                <strong>Limitless Estates L.L.C</strong>
              </h5>
              <hr
                className="yellow accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <NavLink to="/members/about/">About Us</NavLink>
              </p>
              <p>
                <NavLink to="/resources">Why Invest in Multifamily</NavLink>
              </p>

              <p>
                <NavLink to="/legal">Disclaimer</NavLink>
              </p>
            </Col>
            <Col md="3" lg="3" xl="3" className="mb-4 pl-2">
              <h5
                style={{ letterSpacing: "0.25px" }}
                className="text-uppercase font-weight-bold"
              >
                <strong>Markets</strong>
              </h5>
              <hr
                className="yellow accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <NavLink to="/markets/tucson/">Tucson, AZ</NavLink>
              </p>
              <p>
                <NavLink to="/markets/phoenix/">Phoenix, AZ</NavLink>
              </p>
              <p>
                <NavLink to="/markets/columbus/">Columbus, OH</NavLink>
              </p>
            </Col>
            <Col md="3" lg="3" xl="3" className="mb-4 pl-2">
              <h5
                style={{ letterSpacing: "0.25px" }}
                className="text-uppercase font-weight-bold"
              >
                <strong>Resources</strong>
              </h5>
              <hr
                className="yellow accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />

              <p>
                <NavLink to="/resources/impactinvesting">
                  Impact Investing
                </NavLink>
              </p>
              <p>
                <NavLink to="/info/investing/ira401k">401k/ IRA</NavLink>
              </p>
              <p>
                <NavLink to="/resources/investingrisks/1">
                  Investing Risks
                </NavLink>
              </p>
              <p>
                <NavLink to="/resources/faq">FAQ</NavLink>
              </p>
            </Col>
            <Col md="3" lg="3" xl="3" className="mb-4 pl-2">
              <h5
                style={{ letterSpacing: "0.25px" }}
                className="text-uppercase font-weight-bold"
              >
                <strong>Company Information</strong>
              </h5>
              <hr
                className="yellow accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <NavLink to="/events/meetups">Events</NavLink>
              </p>
              <p>
                <NavLink to="/info/contact/">Contact Us</NavLink>
              </p>
            </Col>
          </Row>
        </Container>
        <div
          style={{ color: "white" }}
          className="footer-copyright text-center p-3"
        >
          <Container fluid>
            &copy; {new Date().getFullYear()} Copyright: Limitless Estates,
            L.L.C. | Powered by: AiTech
          </Container>
        </div>
      </Footer>
    );
  }
}
export default NavFooter;
