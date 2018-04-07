import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
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
  Container
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
    return (
      <Navbar
        dark
        expand="lg"
        sticky="top"
        style={{ borderRadius: 0 }}
        className="primary-color m-0"
      >
        <Container>
          <Link to="/">
            <img
              height="48"
              src="https://i.imgur.com/6TpCmWV.png"
              className="d-inline-block align-center  ml-auto"
              alt=""
            />
          </Link>
          {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
          <div className="col-10 text-right align-right">
            <Collapse isOpen={this.state.collapse} navbar>
              <NavbarNav className="px-auto mx-auto d-flex justify-content-center align-items-center m-0 ">
                <NavItem>
                  <NavLink
                    exact
                    style={{ color: 'white' }}
                    activeStyle={{ fontWeight: 400 }}
                    className="h5-responsive"
                    to="/"
                  >
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    exact
                    style={{ color: 'white' }}
                    activeStyle={{ fontWeight: 400 }}
                    className="h5-responsive"
                    to="/members/about/"
                  >
                    About Us
                  </NavLink>
                </NavItem>
                <div className="nav-item dropdown">
                  <a
                    className="h5-responsive text-white nav-link dropdown-toggle"
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
                      className="px-3 h4-responsive dropdown-item"
                      to="/markets/columbus/summary"
                    >
                      Columbus, OH
                    </NavLink>

                    <NavLink
                      exact
                      activeStyle={{ fontWeight: 400 }}
                      className="px-3 h4-responsive dropdown-item"
                      to="/markets/detroit/summary"
                    >
                      Detroit, MI
                    </NavLink>
                  </div>
                </div>
                <div className="nav-item dropdown">
                  <a
                    className="h5-responsive text-white nav-link dropdown-toggle"
                    id="navRes"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Resources
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navRes">
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
                      activeStyle={{
                        fontWeight: 400
                      }}
                      className="px-3 h4-responsive dropdown-item"
                      to="/resources/impactinvesting"
                    >
                      Impact Investing
                    </NavLink>

                    <NavLink
                      exact
                      activeStyle={{ fontWeight: 400 }}
                      className="px-3 h4-responsive dropdown-item"
                      to="/info/investing/ira401k"
                    >
                      401K/IRA
                    </NavLink>

                    <NavLink
                      exact
                      style={{ color: 'white' }}
                      activeStyle={{ fontWeight: 400 }}
                      className="px-3 h4-responsive dropdown-item"
                      to="/resources/investingrisks/1"
                    >
                      Risks
                    </NavLink>

                    <NavLink
                      exact
                      activeStyle={{ fontWeight: 400 }}
                      className="px-3 h4-responsive dropdown-item"
                      to="/resources/faq"
                    >
                      FAQ
                    </NavLink>
                  </div>
                </div>
                <NavItem>
                  <NavLink
                    exact
                    style={{ color: 'white' }}
                    activeStyle={{ fontWeight: 400 }}
                    className="h5-responsive"
                    to="/info/questionnaire"
                  >
                    Make an Impact
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    exact
                    style={{ color: 'white' }}
                    activeStyle={{ fontWeight: 400 }}
                    className="h5-responsive"
                    to="/info/contact"
                  >
                    Contact
                  </NavLink>
                </NavItem>
              </NavbarNav>
            </Collapse>
          </div>
        </Container>
      </Navbar>
    );
  }
}
export default Navigation;
