import React from 'react';

export default () => {
  return (
    <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
      <a href="#" className="navbar-brand col-sm-3 col-md-2 mr-0">
        CompanyName
      </a>
      <input type="text" className="form-control form-control-dark w-100" placeholder="Search" aria-label="Search" />
      <ul className="navbar-nav px-3">
        <li className="nav-item text-nowrap">
          <a href="" className="nav-link">
            sign out
          </a>
        </li>
      </ul>
    </nav>
  );
};
