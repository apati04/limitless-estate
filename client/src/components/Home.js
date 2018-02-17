import React from "react";

import { Link } from "react-router-dom";

const background = "/images/background/la.jpg"

const styles = {
  homeSection: {
    background: `url(${background}) no-repeat`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    minHeight: '100vh'
  },
  darkOverlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    minHeight: '100vh'
  },
  homeInner: {
    paddingTop: '150px'
  },
  iconStyles: {
    color: '#008ed6',
    background: '#fff',
    padding: '4px',
    borderRadius: '5px',
    fontSize: '30px'
  }
}
const Home = () => {

  return (
    <header style={styles.homeSection}>
      <div style={styles.darkOverlay}>
        <div style={styles.homeInner}>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 d-lg-block">
                <h1 style={{color: '#fff'}} className="display-4">"Insert <strong>Mission Statement</strong> here"</h1>
                {/* <div className="d-flex flex-row">
                  <div className="p-4 align-self-start">
                    <i style={styles.iconStyles} className="fa fa-home"></i>
                  </div>
                  <div className="p-4 align-self-end">
                    <Link className="h3" style={{color: '#fff'}} to="/packages/ecorse">Ecorse, MI</Link>
                </div>
                </div>

                <div className="d-flex flex-row">
                  <div className="p-4 align-self-start">
                    <i style={styles.iconStyles} className="fa fa-home"></i>
                  </div>
                  <div className="p-4 align-self-end">
                    <Link className="h3" style={{ color: '#fff' }} to="/packages/columbus">Columbus, OH</Link>
                </div>
                </div> */}
                <div>
                  <h2 style={{ color: '#fff', textAlign: 'right' }}>~ Lalita Patipaksiri, 2018 </h2>
                </div>

              </div>
              <div className="col-lg-4">

              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Home;

