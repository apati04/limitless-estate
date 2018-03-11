import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuItem from './navMenuItem';

class Navbar extends Component {
  renderMenu() {
    const fields = [ 'about', 'markets', 'resources', 'contact' ];
    return fields.map((item) => {
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
      <nav
        style={{ borderBottom: '#008ed6 2px solid' }}
        className="navbar navbar-toggleble-sm navbar-expand-sm navbar-dark bg-dark"
      >
        <div className="container">
          {/* <Link to="/" className="navbar-brand">
            Limitless Estates, LLC
          </Link> */}
          <a href="#" className="navbar-brand">
            <img
              src="https://tmpfilecdn.freelogodesign.org/f473b27e-8f10-45f2-99b0-95a4d6c558e9.png"
              width="30"
              height="30"
              alt=""
            />
            Limitless Estates, LLC
          </a>
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
    );
  }
}

export default Navbar;
