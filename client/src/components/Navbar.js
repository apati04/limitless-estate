import '../style/navStyle.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import MenuItem from './navMenuItem';
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  SideNavNav
} from 'mdbreact';

class Navigation extends Component {
  state = {
    collapse: false,
    isWideEnough: false,
    dropdownOpen: false
  };
  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }
  toggle() {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  }

  render() {
    console.log('sidenavnav ', SideNavNav);
    return (
      <Navbar dark expand="md" fixed="top" scrolling>
        <Container>
          <NavbarBrand to="/">
            <strong>Limitless-Estates</strong>
          </NavbarBrand>
          {!this.state.isWideEnough && (
            <NavbarToggler onClick={this.onClick.bind(this)} />
          )}

          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav>
              <NavItem>
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/markets">Markets</NavLink>
              </NavItem>
              <NavItem>
                <Dropdown
                  isOpen={this.state.dropdownOpen}
                  toggle={() => {
                    this.toggle();
                  }}
                >
                  <DropdownToggle nav caret>
                    Resources
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <NavLink to="/resources">
                        Why Invest in Multifamily
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink to="/resources/impactinvesting">
                        Impact Investing
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink to="/resources/investingrisks/1">Risks</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink to="/resources/faq">FAQ</NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/info/questionnaire">
                  Make an impact
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/info/contact">
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

/*
      <nav
        style={{ borderBottom: "#008ed6 2px solid" }}
        className="navbar navbar-toggleble-sm navbar-expand-sm navbar-dark bg-dark"
      >
        <div className="container">
          <Link to="/" className="navbar-brand">
            Limitless Estates, LLC
          </Link>
          {/* <a href="#" className="p-0 navbar-brand">
            <img src="/img/logo.png" width="60" height="60" alt="" />
          </a> *}
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#nbNav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="nbNav">
            <ul className="navbar-nav ml-auto">
              <li key="asd" className="nav-item">
                <Link to="/" className="nav-link">
                  HOME
                </Link>
              </li>
              {this.renderMenu()}
            </ul>
          </div>
        </div>
      </nav>
*/
