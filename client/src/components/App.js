import React, { Component } from 'react';
// import Navbar from "./Navbar";
// import Home from "./Home";
// import About from "./About";
// import Services from "./Services";
// import Resources from "./Resources";
// import FAQ from "./FAQ";
// import Contact from "./Contact";
import Columbus from "./packages/Columbus";
import Ecorse from "./packages/Ecorse";
import { BrowserRouter, Route } from "react-router-dom";

/* Version 2 */
import LandingPage from './v2/LandingPage';
import Navbar from './Navbar';

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
          <Route path="/packages/columbus" component={Columbus}/>
          <Route path="/packages/ecorse" component={Ecorse}/>
          {/* <Route path="/resources" component={Resources}/>
          <Route path="/services" component={Services}/> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
