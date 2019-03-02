import React, { Component } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  NavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer,
  MDBNavLink
} from 'mdbreact';
class MobileNav extends Component {
  render() {
    return (
      <NavbarNav left className="p-3">
        <MDBNavItem>
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
        <MDBNavItem>
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
        <MDBNavItem>
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
        <MDBNavItem>
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
        <MDBNavItem>
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
    );
  }
}

export default MobileNav;
