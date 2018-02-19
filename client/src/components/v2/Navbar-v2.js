import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuItem from './navMenuItem'
/**
 * .navbar .nav-link {
  font-size: 14px;
  text-transform: uppercase;
  padding-left: 1em !important;
  padding-right: 1em !important; }

.navbar .nav-item.active {
  border-left: #444 3px solid; }
 */
class Navbar_v2 extends Component {
  renderMenu() {
    const fields = ['home', 'about us', 'markets', 'resources', 'contact'];
    return fields.map((item) => (
      <li key={item} className="nav-item">
        <MenuItem field={item} />
      </li>
    ));
  }
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">Limitless Estates, LLC</Link>
          <button className="navbar-toggler" data-toggle="collapse" data-target="#navNavbar"><span className="navbar-toggler-icon"></span></button>
          <ul className="navbar-nav ml-auto">
            {this.renderMenu()}
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar_v2;



