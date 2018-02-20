import '../style/styles.css';
import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import LandingPage from './v2/LandingPage';
import Markets from './Markets';

import Navbar from './Navbar';
import About from "./About";
import Columbus from "./markets/Columbus";
import Ecorse from "./markets/Ecorse";
// import Home from "./Home";
// import Services from "./Services";
// import Resources from "./Resources";
// import FAQ from "./FAQ";
// import Contact from "./Contact";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path="/" component={LandingPage} />
          {/* <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
          <Route path="/faq" component={FAQ}/> */}
          <Route exact path="/markets" component={Markets} />
          <Route path="/markets/columbus" component={Columbus}/>
          <Route path="/markets/ecorse" component={Ecorse}/>
          {/* <Route path="/resources" component={Resources}/>
          <Route path="/services" component={Services}/> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
