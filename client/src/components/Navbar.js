import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../style/styles.css';

import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Button
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
    if (this.state.isWideEnough) {
      console.log('yes');
    }
    return (
      <Navbar
        dark
        expand="lg"
        sticky="top"
        style={{ borderRadius: 0 }}
        className="primary-color-dark"
      >
        <Container className="mx-0 mw-100">
          <Link to="/">
            <img
              height="44"
              src="https://i.imgur.com/6TpCmWV.png"
              className="d-inline-block m-2"
              alt=""
            />
          </Link>
          {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav
              right
              style={{
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'center',
                textTransform: 'uppercase',
                fontSize: '13px',
                fontWeight: 400,
                lineHeight: '20px',
                flexWrap: 'no-wrap',
                whiteSpace: 'nowrap'
              }}
            >
              <NavItem className="p-2">
                <NavLink
                  exact
                  style={{ color: 'white', letterSpacing: '0.5px' }}
                  activeStyle={{
                    borderBottom: '2px white solid',
                    outline: 0
                  }}
                  to="/"
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem className="p-2">
                <NavLink
                  exact
                  style={{ color: 'white', letterSpacing: '0.5px' }}
                  activeStyle={{
                    borderBottom: '2px white solid',
                    outline: 0
                  }}
                  to="/members/about/"
                >
                  About
                </NavLink>
              </NavItem>
              <div className="nav-item dropdown">
                <a
                  style={{ outline: 0, letterSpacing: '0.5px' }}
                  className="text-white nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Markets
                </a>
                <div
                  aria-labelledby="navbarDropdownMenuLink"
                  className="dropdown-menu"
                >
                  <NavLink
                    exact
                    activeStyle={{ fontWeight: 400 }}
                    className="px-3 dropdown-item"
                    to="/markets/columbus/summary"
                  >
                    Columbus, OH
                  </NavLink>
                  <NavLink
                    exact
                    activeStyle={{ fontWeight: 400 }}
                    className="px-3 dropdown-item"
                    to="/markets/detroit/summary"
                  >
                    Detroit, MI
                  </NavLink>
                  <NavLink
                    exact
                    activeStyle={{ fontWeight: 400, color: 'white' }}
                    className="px-3 dropdown-item"
                    to="/markets/phoenix/summary"
                  >
                    Phoenix, AZ
                  </NavLink>
                  <NavLink
                    exact
                    activeStyle={{ fontWeight: 400 }}
                    className="px-3 dropdown-item"
                    to="/markets/tucson/summary"
                  >
                    Tucson, AZ
                  </NavLink>
                </div>
              </div>
              <div className="nav-item dropdown">
                <a
                  style={{ outline: 0, letterSpacing: '0.5px' }}
                  className="text-white nav-link dropdown-toggle"
                  id="navRes"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Resources
                </a>
                <div className="dropdown-menu p-1" aria-labelledby="navRes">
                  <NavLink
                    exact
                    activeStyle={{ fontWeight: 400 }}
                    className="px-3 h4-responsive dropdown-item"
                    to="/resources"
                  >
                    Why Invest in Multifamily
                  </NavLink>
                  <NavLink
                    exact
                    activeStyle={{ fontWeight: 400 }}
                    className="px-3 dropdown-item"
                    to="/resources/impactinvesting"
                  >
                    Impact Investing
                  </NavLink>
                  <NavLink
                    exact
                    activeStyle={{ fontWeight: 400 }}
                    className="px-3 dropdown-item"
                    to="/info/investing/ira401k"
                  >
                    401K/IRA
                  </NavLink>

                  <NavLink
                    exact
                    style={{ color: 'white' }}
                    activeStyle={{ fontWeight: 400 }}
                    className="px-3 dropdown-item"
                    to="/resources/investingrisks/1"
                  >
                    Risks
                  </NavLink>
                  <NavLink
                    exact
                    activeStyle={{ fontWeight: 400 }}
                    className="px-3 dropdown-item"
                    to="/resources/faq"
                  >
                    FAQ
                  </NavLink>
                </div>
              </div>
              <NavItem className="p-2">
                <NavLink
                  exact
                  style={{ color: 'white', letterSpacing: '0.5px' }}
                  activeStyle={{
                    borderBottom: '2px white solid',
                    outline: 0
                  }}
                  to="/info/questionnaire"
                >
                  Questionnaire
                </NavLink>
              </NavItem>

              <NavItem className="p-2">
                <NavLink
                  exact
                  style={{ color: 'white', letterSpacing: '0.5px' }}
                  activeStyle={{
                    borderBottom: '2px white solid',
                    outline: 0
                  }}
                  to="/events/meetups"
                >
                  Events
                </NavLink>
              </NavItem>
              <NavItem className="p-2">
                <NavLink
                  exact
                  style={{ color: 'white', letterSpacing: '0.5px' }}
                  activeStyle={{
                    borderBottom: '2px white solid',
                    outline: 0
                  }}
                  to="/info/contact"
                >
                  Contact
                </NavLink>
              </NavItem>
              <div className="p-2">
                <a
                  href="https://ehypauluugknktzawdwva-free.10to8.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ whiteSpace: 'nowrap', fontSize: '14px' }}
                  className="btn btn-sm btn-success btn-rounded"
                >
                  Schedule an appointment{' '}
                  <i
                    className="fa fa-volume-control-phone"
                    aria-hidden="true"
                    style={{
                      fontSize: '16px',
                      paddingTop: '2px',
                      paddingLeft: '8px'
                    }}
                  />
                </a>
              </div>
            </NavbarNav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}
export default Navigation;
