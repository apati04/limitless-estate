import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuItem from './navMenuItem';


class Navbar extends Component {
  renderMenu() {
    const fields = ['about', 'markets', 'resources', 'contact'];
    return fields.map((item) => (
      <li key={item} className="nav-item">
        <MenuItem field={item} className="nav-link"/>
      </li>
    ));
  }
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Limitless Estates, LLC
          </Link>

          <button className="navbar-toggler" data-toggle="collapse" data-target="#nbNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="nbNav">
            <ul className="navbar-nav ml-auto">
              <li key='home' className="nav-item">
                <Link to="/" className="nav-link">
                  HOME
                </Link>
              </li>
              {this.renderMenu()}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;
