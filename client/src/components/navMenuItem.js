import React from 'react';
import { Link } from 'react-router-dom';

const navMenuItem = ({ field }) => {
  if(field === 'markets') {
    return (
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          MARKETS
        </a>
        <div style={{backgroundColor: '#eee'}}className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link to="/markets/columbus"className="dropdown-item">Columbus, OH</Link>
          <Link to="/markets/ecorse" className="dropdown-item">Ecorse, MI</Link>
          <div style={{ borderTop: '1px solid #c0c3c6'}} className="dropdown-divider"></div>
          <Link to="/markets" className="dropdown-item">Overview</Link>
        </div>
      </li>
    )
  }
  return (
    <li key={field} className="nav-item">
      <Link to={"/" + field.toLowerCase()} className="nav-link">
        {field.toUpperCase()}
      </Link>
    </li>
  )
}

export default navMenuItem;