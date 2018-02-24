import React from 'react';
import { Link } from 'react-router-dom';

const navMenuItem = ({ field }) => {

  return (
      <Link to={"/" + field.toLowerCase()} className="nav-link">
        {field.toUpperCase()}
      </Link>
  )
}

export default navMenuItem;