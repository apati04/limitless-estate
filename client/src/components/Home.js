import React from "react";
import background from "../images/background/la.jpg";
import { Link } from "react-router-dom";

const Home = () => {

  const style = {
    background: {
      minHeight: "100vh",
      minWidth: "100%",
      backgroundImage: `url(${background})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      padding: "120px"
    }
}

  return (
    <div style={style.background}>
      <ul className="list-group" style={{maxWidth: "250px"}}>
        <Link to="/packages/ecorse" className="list-group-item" style={{color: "black"}}>Ecorse, MI</Link>
        <Link to="/packages/columbus" className="list-group-item" style={{color: "black"}}>Columbus, OH</Link>
      </ul>
    </div>
  );
}

export default Home;
