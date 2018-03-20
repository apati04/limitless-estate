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
      <header>
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
                Navbar's background will switch from transparent to solid color
                while scrolling down
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
    );
  }
}
