import React from "react";

import { Link } from "react-router-dom";
const background = "/images/background/la.jpg";
const style = {
  homeStyles: {
    minHeight: "100vh",
    minWidth: "100%",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    padding: "120px"
  }
}
const Home = () => {



  return (
    <div style={style.homeStyles}>
      <ul className="list-group" style={{maxWidth: "250px"}}>
        <Link to="/packages/ecorse" className="list-group-item" style={{color: "black"}}>Ecorse, MI</Link>
        <Link to="/packages/columbus" className="list-group-item" style={{color: "black"}}>Columbus, OH</Link>
      </ul>
    </div>
  );
}

export default Home;
