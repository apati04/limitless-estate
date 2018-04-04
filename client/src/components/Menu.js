import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrind,
  NavbarToggler,
  Collapse,
  NavbarNav,
  NavItem,
  NavLink,
  NavbarBrand
} from 'mdbreact';

const style = {
  navStyle: {
    navView: {
      background:
        'url("https://mdbootstrap.com/img/Photos/Others/img_(40).jpg")no-repeat center center',
      backgroundSize: 'cover'
    },

    navBar: {
      backgroundColor: 'transparent'
    },

    topNavCollapse: {
      backgroundColor: '#4285F4'
    }
  }
};
export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      dropdownOpen: false
    };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  onClick = () => {
    this.setState({
      collapse: !this.state.collapse
    });
  };
  toggle = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  };
  render() {
    return (
      <div>
        <Navbar color="indigo" dark expand="md" fixed="top" scrolling>
          <NavbarBrand href="/">Navbar</NavbarBrand>
          {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
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
            </NavbarNav>
            <NavbarNav className="ml-auto">
              <NavItem>
                <NavLink className="nav-link" to="https://twitter.com/">
                  <i className="far fa-twitter" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="https://instagram.com/">
                  <i className="far fa=instagram" />
                </NavLink>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
