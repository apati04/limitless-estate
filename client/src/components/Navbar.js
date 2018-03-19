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
  Container
} from 'mdbreact';

class Navigation extends Component {
  state = {
    collapse: false,
    isWideEnough: false,
    dropdownOpen: false
  };
  onClick = () => {
    this.setState({
      collapse: !this.state.collapse
    });
  };
  toggle = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
    console.log('clicked, ', this);
  };
  renderMenu() {
    const fields = ['about', 'markets', 'faq', 'contact'];
    return fields.map(item => {
      if (item === 'markets') {
        return (
          <li key={item} className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              MARKETS
            </a>
            <div
              style={{ backgroundColor: '#eee' }}
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link to="/markets/arlingtonheights" className="dropdown-item">
                Columbus, OH
              </Link>
              <Link to="/markets/riverparkjefferson" className="dropdown-item">
                Detroit, MI
              </Link>
              <div
                style={{ borderTop: '1px solid #c0c3c6' }}
                className="dropdown-divider"
              />
              <Link to="/markets" className="dropdown-item">
                Overview
              </Link>
            </div>
          </li>
        );
      }
      return (
        <li key={item}>
          <MenuItem field={item} />
        </li>
      );
    });
  }

  render() {
    return (
      <Navbar color="stylish-color-dark" dark expand="lg" scrolling>
        <Container>
          <NavbarBrand href="/">
            <strong>Limitless-Estates</strong>
          </NavbarBrand>
          {!this.state.isWideEnough && (
            <NavbarToggler onClick={this.onClick.bind(this)} />
          )}
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav className="ml-auto" right>
              <NavItem>
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <Dropdown
                  isOpen={this.state.dropdownOpen}
                  toggle={this.toggle.bind(this)}
                >
                  <DropdownToggle nav caret>
                    Markets
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <Link to="/markets/arlingtonheights">Columbus, OH</Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="/markets/riverparkjefferson">Detroit, MI</Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="/markets">Overview</Link>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/info/contact">
                  Contact
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/faq">
                  FAQ
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
