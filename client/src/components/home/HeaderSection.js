import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavbarNav,
  NavItem
} from 'mdbreact';
import { NavLink } from 'react-router-dom';
export default class HeaderSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }
  render() {
    return (
      <div>
        <header>
          <Navbar color="indigo" dark expand="md" fixed="top" scrolling>
            <NavbarBrand href="/">Navbar</NavbarBrand>
            {!this.state.isWideEnough && (
              <NavbarToggler onClick={this.onClick} />
            )}
            <Collapse isOpen={this.state.collapse} navbar>
              <NavbarNav className="mr-auto" onClick={this.onClick}>
                <NavItem>
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/feature">
                    Features
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/pricing">
                    Pricing
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/opinions">
                    Opinions
                  </NavLink>
                </NavItem>
              </NavbarNav>
              <NavbarNav className="ml-auto">
                <NavItem>
                  <NavLink className="nav-link" to="https://facebook.com/">
                    asdfasdf
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="https://twitter.com/">
                    asdf
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="https://instagram.com/">
                    asasdf
                  </NavLink>
                </NavItem>
              </NavbarNav>
            </Collapse>
          </Navbar>

          <div className="view intro hm-purple-light">
            <div className="full-bg-img flex-center">
              <div className="container text-center white-text wow fadeInUp">
                <h2>This Navbar is fixed and transparent</h2>
                <hr />
                <h5>
                  It will always stay visible on the top, even when you scroll
                  down
                </h5>
                <p>
                  Navbar's background will switch from transparent to solid
                  color while scrolling down
                </p>
                <hr />
                <p>
                  Full page intro with background image will be always displayed
                  in full screen mode, regardless of device{' '}
                </p>
              </div>
            </div>
          </div>
        </header>
        {/* main layout */}
        <main className="text-center py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p align="justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
