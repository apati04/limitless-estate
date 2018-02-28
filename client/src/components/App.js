import '../style/styles.css';
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
/* PDF Resumes */
import KMResume from '../pages/resumes/KMResume';
import LCResume from '../pages/resumes/LCResume';
import LPResume from '../pages/resumes/LPResume';
const Construction = () => {
  return (
    <div style={{ height: '100vh' }} className="container-fluid bg-dark">
      <h2 style={{ padding: '100px' }} className="text-center text-white">
        Under Construction, Coming Soon!
      </h2>
    </div>
  );
};
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/resume/km" component={KMResume} />
            <Route path="/resume/lp" component={LPResume} />
            <Route path="/resume/lc" component={LCResume} />
            <Route exact path="/" component={Construction} />
            <ScrollToTop>
              <Navbar />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/resources" component={Resources} />
              <Route exact path="/markets" component={Markets} />
              <Route path="/markets/ecorse" component={Ecorse} />
              <Route path="/markets/columbus" component={Columbus} />
              <Route exact path="/api/home" component={LandingPage} />

              <Footer />
            </ScrollToTop>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
