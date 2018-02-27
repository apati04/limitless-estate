import '../style/styles.css';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
/* Pages */
import LandingPage from '../pages/LandingPage';
import Markets from '../pages/Markets';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Columbus from '../pages/markets/Columbus';
import Ecorse from '../pages/markets/Ecorse';
import Resources from '../pages/Resources';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <Navbar />
          <Route exact path="/" component={LandingPage} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/resources" component={Resources} />
          <Route exact path="/markets" component={Markets} />
          <Route exact path="/markets/columbus" component={Columbus} />
          <Route exact path="/markets/ecorse" component={Ecorse} />
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
