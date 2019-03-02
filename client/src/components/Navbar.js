// import '../style/styles.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MobileNav from '../components/Navigation/MobileNav';
import {
  MDBNavbar,
  NavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBContainer,
  MDBNavLink,
  MDBNavbarBrand
} from 'mdbreact';

class Navigation extends Component {
  state = {
    collapse: false,
    isWideEnough: false,
    dropdownOpen: false,
    dropdownOpen2: false
  };

  onClick = () => {
    this.setState({
      collapse: !this.state.collapse
    });
  };
  toggle = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  };
  toggle2 = () => {
    this.setState({ dropdownOpen2: !this.state.dropdownOpen2 });
  };
  render() {
    let navPos = null;
    if (this.state.collapsed) {
      navPos = <MobileNav />;
    }
    return (
      <MDBNavbar
        dark
        expand="md"
        sticky="top"
        style={{ borderRadius: 0 }}
        className="primary-color-dark"
      >
        <MDBContainer fluid>
          <Link to="/">
            <img
              height="44"
              src="https://i.imgur.com/6TpCmWV.png"
              className="d-inline-block img-fluid"
              alt=""
            />
          </Link>

          {!this.state.isWideEnough && (
            <MDBNavbarToggler onClick={this.onClick} />
          )}
          <MDBCollapse isOpen={this.state.collapse} navbar>
            {!this.state.collapse ? (
              <NavbarNav
                right
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  textTransform: 'uppercase',
                  alignItems: 'center',
                  fontSize: '13px',
                  fontWeight: 400,
                  lineHeight: '20px',
                  flexWrap: 'no-wrap',
                  whiteSpace: 'nowrap',
                  marginTop: 0
                }}
              >
                <MDBNavItem className="p-2">
                  <MDBNavLink
                    exact
                    style={{ color: 'white', letterSpacing: '0.5px' }}
                    activeStyle={{
                      borderBottom: '1px white solid',
                      outline: 0
                    }}
                    to="/"
                  >
                    Home
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className="p-2">
                  <MDBNavLink
                    exact
                    style={{ color: 'white', letterSpacing: '0.5px' }}
                    activeStyle={{
                      borderBottom: '1px white solid',
                      outline: 0
                    }}
                    to="/members/about/"
                  >
                    About
                  </MDBNavLink>
                </MDBNavItem>
                <div className="nav-item dropdown">
                  <div
                    style={{
                      outline: 0,
                      letterSpacing: '0.5px',
                      cursor: 'default'
                    }}
                    className="text-white nav-link dropdown-toggle"
                    id="navbarDropdownMenuLink"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Markets
                  </div>
                  <div
                    aria-labelledby="navbarDropdownMenuLink"
                    className="dropdown-menu"
                  >
                    <MDBNavLink
                      exact
                      activeStyle={{ fontWeight: 400 }}
                      className="px-3 dropdown-item"
                      to="/markets/tucson/"
                    >
                      Tucson, AZ
                    </MDBNavLink>
                    <MDBNavLink
                      exact
                      activeStyle={{ fontWeight: 400, color: 'white' }}
                      className="px-3 dropdown-item"
                      to="/markets/phoenix/"
                    >
                      Phoenix, AZ
                    </MDBNavLink>

                    <MDBNavLink
                      exact
                      activeStyle={{ fontWeight: 400 }}
                      className="px-3 dropdown-item"
                      to="/markets/columbus/"
                    >
                      Columbus, OH
                    </MDBNavLink>
                  </div>
                </div>
                <div className="nav-item dropdown">
                  <div
                    style={{
                      outline: 0,
                      letterSpacing: '0.5px',
                      cursor: 'default'
                    }}
                    className="text-white nav-link dropdown-toggle"
                    id="navRes"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Resources
                  </div>
                  <div className="dropdown-menu p-1" aria-labelledby="navRes">
                    <MDBNavLink
                      exact
                      activeStyle={{ fontWeight: 400 }}
                      className="px-3 h4-responsive dropdown-item"
                      to="/resources"
                    >
                      Why Invest in Multifamily
                    </MDBNavLink>
                    <MDBNavLink
                      exact
                      activeStyle={{ fontWeight: 400 }}
                      className="px-3 dropdown-item"
                      to="/resources/impactinvesting"
                    >
                      Impact Investing
                    </MDBNavLink>
                    <MDBNavLink
                      exact
                      activeStyle={{ fontWeight: 400 }}
                      className="px-3 dropdown-item"
                      to="/info/investing/ira401k"
                    >
                      401K/IRA
                    </MDBNavLink>

                    <MDBNavLink
                      exact
                      style={{ color: 'white' }}
                      activeStyle={{ fontWeight: 400 }}
                      className="px-3 dropdown-item"
                      to="/resources/investingrisks/1"
                    >
                      Risks
                    </MDBNavLink>
                    <MDBNavLink
                      exact
                      activeStyle={{ fontWeight: 400 }}
                      className="px-3 dropdown-item"
                      to="/resources/faq"
                    >
                      FAQ
                    </MDBNavLink>
                  </div>
                </div>
                <MDBNavItem className="p-2">
                  <MDBNavLink
                    exact
                    style={{ color: 'white', letterSpacing: '0.5px' }}
                    activeStyle={{
                      borderBottom: '1px white solid',
                      outline: 0
                    }}
                    to="/info/questionnaire"
                  >
                    Questionnaire
                  </MDBNavLink>
                </MDBNavItem>
                <div className="nav-item dropdown">
                  <div
                    style={{
                      outline: 0,
                      letterSpacing: '0.5px',
                      cursor: 'default'
                    }}
                    className="text-white nav-link dropdown-toggle"
                    id="navbarDropdownMenuLink"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Events
                  </div>
                  <div
                    aria-labelledby="navbarDropdownMenuLink"
                    className="dropdown-menu"
                  >
                    <MDBNavLink
                      exact
                      activeStyle={{ fontWeight: 400, color: 'white' }}
                      className="px-3 dropdown-item"
                      to="/events/meetups/"
                    >
                      Multifamily Apartment Investors Meetup - Long Beach
                    </MDBNavLink>
                    <MDBNavLink
                      exact
                      activeStyle={{ fontWeight: 400, color: 'white' }}
                      className="px-3 dropdown-item"
                      to="/events/meetups/cerritos"
                    >
                      Cerritos Multifamily Investors Roundtable
                    </MDBNavLink>
                  </div>
                </div>
                <MDBNavItem className="p-2">
                  <MDBNavLink
                    exact
                    style={{ color: 'white', letterSpacing: '0.5px' }}
                    activeStyle={{
                      borderBottom: '1px white solid',
                      outline: 0
                    }}
                    to="/podcasts"
                  >
                    Podcast
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className="p-2">
                  <MDBNavLink
                    exact
                    style={{ color: 'white', letterSpacing: '0.5px' }}
                    activeStyle={{
                      borderBottom: '1px white solid',
                      outline: 0
                    }}
                    to="/info/contact"
                  >
                    Contact
                  </MDBNavLink>
                </MDBNavItem>
                <div>
                  <a
                    href="https://ehypauluugknktzawdwva-free.10to8.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{ whiteSpace: 'nowrap', fontSize: '14px' }}
                    className="btn btn-sm btn-success btn-rounded"
                  >
                    Schedule a Call{' '}
                    <i
                      className="fa fa-phone"
                      style={{
                        fontSize: '14px',
                        paddingTop: '4px',
                        paddingLeft: '8px'
                      }}
                    />
                  </a>
                </div>
              </NavbarNav>
            ) : (
              <MobileNav />
            )}
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    );
  }
}
export default Navigation;
