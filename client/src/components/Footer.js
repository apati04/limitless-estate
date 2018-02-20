import React from "react";
import "../style/footer.css";

const Footer = () => {
  return (
    <footer className="text-center footer bg-dark d-flex justify-content-center align-items-center" style={{padding: "20px"}}>
      <small className="text-danger" style={{fontWeight: "900"}}>Confidential - Don't distribute without permissions from Limitless Estates, LLC</small>
      <div style={{color: '#fff', position: "absolute", right: "0", marginRight: "20px", fontSize: "35px"}}>
        <i className="fab fa-facebook" style={{marginRight: "20px"}}></i>
        <i className="fab fa-instagram" style={{marginRight: "20px"}}></i>
        <i className="fab fa-twitter" style={{marginRight: "20px"}}></i>
      </div>
    </footer>
  );
}

export default Footer;
