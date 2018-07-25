import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
/* Pages */
import AboutUs from '../pages/AboutUs/AboutUs';
import PageNotFound from '../pages/PageNotFound';
import LandingPage from '../pages/LandingPage';
import Markets from '../pages/Markets';
import Contact from '../pages/Contact';
import Columbus from '../pages/markets/Columbus';
import Ecorse from '../pages/markets/Ecorse';
import Phoenix from '../pages/markets/Phoenix';
import TucsonSDP from '../pages/markets/TucsonSDP';
import Legal from '../pages/Legal';
import ColSum from '../pages/columbus';
import DetSum from '../pages/detroit';
import Tucson from '../pages/tucson/Tucson';
import PhoenixSum from '../pages/phoenix/Phoenix';
import Questionnaire from '../pages/Questionnaire';
import Faq from '../pages/Faq';
import SupportCo from '../pages/SupportCo';
import Overview from '../pages/articles/Overview';
import ImpactInvesting from '../pages/articles/impact_investing/page_1';
import Risks_PageOne from '../pages/articles/investing_risks/page_1';
import Risks_PageTwo from '../pages/articles/investing_risks/page_2';
import MeetUps from '../pages/MeetUps/MeetUps';
import GoogleMap from './GoogleMap/GoogleMap';

const Mapevent = () => {
  return (
    <div style={{ width: '100%', height: '1000px' }}>
      <GoogleMap />
    </div>
  );
};
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <div>
            <Header />

            <Switch>
              <Route exact path="/mapgoog" component={Mapevent} />
              <Route exact path="/" component={LandingPage} />
              <Route path="/events/meetups" component={MeetUps} />
              <Route path="/members/about/" component={AboutUs} />
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
              <Route exact path="/markets/columbus/" component={ColSum} />
              <Route exact path="/markets/tucson/" component={Tucson} />
              <Route exact path="/markets/detroit/" component={DetSum} />
              <Route exact path="/markets/detroit/sdp" component={Ecorse} />
              <Route exact path="/markets/phoenix/" component={PhoenixSum} />
              <Route exact path="/markets/phoenix/sdp" component={Phoenix} />
              <Route exact path="/markets/columbus/sdp" component={Columbus} />
              <Route exact path="/markets/tucson/sdp" component={TucsonSDP} />
              <Route exact path="/markets" component={Markets} />
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
              <Route component={PageNotFound} />
            </Switch>
            <Footer />
          </div>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
