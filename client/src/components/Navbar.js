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

const styles = {
  hoverDropdown: {}
};
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
        expand="md"
        sticky="top"
        style={{ borderRadius: 0 }}
        className="blue p-2 m-0"
      >
        <Container>
          <NavbarBrand>
            <Link to="/">
              <img
                height="50"
                src="https://i.imgur.com/6TpCmWV.png"
                className="d-inline-block ml-auto"
                alt=""
              />
            </Link>
          </NavbarBrand>
          {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}

          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav className="d-flex align-items-center mx-auto ml-auto">
              <NavItem className="m-1">
                <NavLink
                  exact
                  style={{ color: 'white' }}
                  activeStyle={{ fontWeight: 500 }}
                  className="h5-responsive"
                  to="/"
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem className="nav-item dropdown m-1">
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
                  <DropdownItem>
                    <NavLink
                      exact
                      style={{ color: 'white' }}
                      activeStyle={{ fontWeight: 500 }}
                      className="h5-responsive"
                      to="/markets/columbus/summary"
                    >
                      Columbus, OH
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink
                      exact
                      style={{ color: 'white' }}
                      activeStyle={{ fontWeight: 500 }}
                      className="h5-responsive"
                      to="/markets/detroit/summary"
                    >
                      Detroit, MI
                    </NavLink>
                  </DropdownItem>
                </div>
              </NavItem>
              <NavItem className="m-1">
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle
                    className="h5-responsive nav-item"
                    style={{ color: 'white' }}
                    nav
                    caret
                  >
                    Resources
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <NavLink
                        exact
                        style={{ color: 'white' }}
                        activeStyle={{ fontWeight: 500 }}
                        className="h5-responsive"
                        to="/resources"
                      >
                        Why Invest in Multifamily
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink
                        exact
                        style={{ color: 'white' }}
                        activeStyle={{ fontWeight: 500 }}
                        className="h5-responsive"
                        to="/resources/impactinvesting"
                      >
                        Impact Investing
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink
                        exact
                        style={{ color: 'white' }}
                        activeStyle={{ fontWeight: 500 }}
                        className="h5-responsive"
                        to="/resources/investingrisks/1"
                      >
                        Risks
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink
                        exact
                        style={{ color: 'white' }}
                        activeStyle={{ fontWeight: 500 }}
                        className="h5-responsive"
                        to="/resources/faq"
                      >
                        FAQ
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink
                        exact
                        style={{ color: 'white' }}
                        activeStyle={{ fontWeight: 500 }}
                        className="h5-responsive"
                        to="/info/investing/ira401k"
                      >
                        401K/IRA
                      </NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
              <NavItem className="m-1">
                <NavLink
                  exact
                  style={{ color: 'white' }}
                  activeStyle={{ fontWeight: 500 }}
                  className="h5-responsive"
                  to="/info/questionnaire"
                >
                  Make an impact
                </NavLink>
              </NavItem>
              <NavItem className="m-1">
                <NavLink
                  exact
                  style={{ color: 'white' }}
                  activeStyle={{ fontWeight: 500 }}
                  className="h5-responsive"
                  to="/info/contact"
                >
                  Contact
                </NavLink>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}
export default Navigation;
