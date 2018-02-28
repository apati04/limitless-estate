import React from 'react';
import { Link } from 'react-router-dom';
export default () => {
  return (
    <nav style={{ width: '180px' }} className="col-md-2 d-none-d-md-block bg-dark sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li key="back" className="text-center nav-item m-1">
            <Link to="/about">
              <i style={{ fontSize: '50px' }} className="fas fa-angle-double-left" />
            </Link>
            <hr />
          </li>
        </ul>
      </div>
    </nav>
  );
};
