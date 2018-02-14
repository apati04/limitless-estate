import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul className="list-group">
        <li className="list-group-item">
          <Link to="/packages/ecorse">Ecorse, MI</Link>
        </li>
        <li className="list-group-item">
          <Link to="/packages/columbus">Columbus, OH</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
