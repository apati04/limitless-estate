import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
      <Navbar expand="md" sticky="top" className="blue">
        <Container>
          <NavbarBrand to="/">
            <img
              height="55"
              src="https://i.imgur.com/6TpCmWV.png"
              className="d-inline-block ml-auto"
              alt=""
            />
          </NavbarBrand>
          {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}

          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav className="mx-auto ml-auto">
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
              <NavItem className="m-1">
                <Dropdown
                  isOpen={this.state.dropdownOpen2}
                  toggle={this.toggle2}
                >
                  <DropdownToggle
                    className="h5-responsive nav-item p-0"
                    style={{ color: 'white' }}
                    nav
                    caret
                  >
                    Markets
                  </DropdownToggle>
                  <DropdownMenu>
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
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
              <NavItem className="m-1">
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle
                    className="h5-responsive nav-item p-0"
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
