import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
/* Pages */
<<<<<<< HEAD
import AboutUs from '../pages/AboutUs';
import PageNotFound from '../pages/PageNotFound';
=======
import AboutUs from '../pages/AboutUs/AboutUs';
>>>>>>> about/new
import LandingPage from '../pages/LandingPage';
import Markets from '../pages/Markets';
import Contact from '../pages/Contact';
import Columbus from '../pages/markets/Columbus';
import Ecorse from '../pages/markets/Ecorse';
import Legal from '../pages/Legal';
import ColSum from '../pages/columbus';
import DetSum from '../pages/detroit';
import Questionnaire from '../pages/Questionnaire';
import Faq from '../pages/Faq';
import SupportCo from '../pages/SupportCo';
import Overview from '../pages/articles/Overview';
import ImpactInvesting from '../pages/articles/impact_investing/page_1';
import Risks_PageOne from '../pages/articles/investing_risks/page_1';
import Risks_PageTwo from '../pages/articles/investing_risks/page_2';
import Scroll from '../pages/AboutUs/scroll';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ScrollToTop>
            <Header />
            <div style={{ paddingBottom: '60px' }}>
              <Switch>
                <Route exact path="/about" component={AboutUs} />
                <Route exact path="/resources" component={Overview} />
                <Route
                  exact
                  path="/resources/investingrisks/1"
                  component={Risks_PageOne}
                />
                <Route
                  exact
                  path="/resources/investingrisks/2"
                  component={Risks_PageTwo}
                />
                <Route
                  exact
                  path="/resources/impactinvesting"
                  component={ImpactInvesting}
                />
                <Route exact path="/resources/faq" component={Faq} />
                <Route exact path="/legal" component={Legal} />
                <Route
                  exact
                  path="/markets/columbus/summary"
                  component={ColSum}
                />
                <Route
                  exact
                  path="/markets/detroit/summary"
                  component={DetSum}
                />
                <Route exact path="/markets" component={Markets} />
                <Route exact path="/markets/detroit/sdp" component={Ecorse} />
                <Route
                  exact
                  path="/markets/Columbus/sdp"
                  component={Columbus}
                />
                <Route exact path="/info/contact" component={Contact} />
                <Route
                  exact
                  path="/info/questionnaire"
                  component={Questionnaire}
                />
                <Route
                  exact
                  path="/info/investing/ira401k"
                  component={SupportCo}
                />
                <Route exact path="/" component={LandingPage} />
                <Route component={PageNotFound} />
              </Switch>
            </div>
            <Footer />
          </ScrollToTop>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
