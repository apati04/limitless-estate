import ReactGA from 'react-ga';
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Navbar';
import Footer from './Footer';

/* Pages */
import AboutUs from '../pages/AboutUs/AboutUs';
import PageNotFound from '../pages/PageNotFound';

import Markets from '../pages/Markets';
import Contact from '../pages/Contact';
import Columbus from '../pages/markets/Columbus';

import Phoenix from '../pages/markets/Phoenix';
import TucsonSDP from '../pages/markets/TucsonSDP';
import Legal from '../pages/Legal';
import ColSum from '../pages/columbus';

import Tucson from '../pages/tucson/Tucson';
import PhoenixSum from '../pages/phoenix/Phoenix';
import Questionnaire from '../pages/Questionnaire';
import Faq from '../pages/Faq';
import SupportCo from '../pages/SupportCo';
import Overview from '../pages/articles/Overview';
import ImpactInvesting from '../pages/articles/impact_investing/page_1';
import RiskPageOne from '../pages/articles/investing_risks/page_1';
import RiskPageTwo from '../pages/articles/investing_risks/page_2';
import MeetUps from '../pages/MeetUps/MeetUps';
import Podcast from '../pages/Podcast';
import CerritosMeetup from '../pages/MeetUps/CerritosMeetup';
import LandingPage from '../pages/LandingPage';
import withTracker from '../HOC/withTracker';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />

          <Switch>
            <Route exact path="/" component={withTracker(LandingPage)} />
            <Route
              path="/events/meetups"
              exact
              component={withTracker(MeetUps)}
            />
            <Route
              path="/events/meetups/cerritos"
              exact
              component={CerritosMeetup}
            />
            <Route path="/members/about/" component={withTracker(AboutUs)} />
            <Route exact path="/resources" component={withTracker(Overview)} />
            <Route
              exact
              path="/resources/investingrisks/1"
              component={withTracker(RiskPageOne)}
            />
            <Route
              exact
              path="/resources/investingrisks/2"
              component={withTracker(RiskPageTwo)}
            />
            <Route
              exact
              path="/resources/impactinvesting"
              component={withTracker(ImpactInvesting)}
            />
            <Route exact path="/resources/faq" component={withTracker(Faq)} />
            <Route exact path="/legal" component={withTracker(Legal)} />
            <Route exact path="/podcasts" component={withTracker(Podcast)} />
            <Route
              exact
              path="/markets/columbus/"
              component={withTracker(ColSum)}
            />
            <Route
              exact
              path="/markets/tucson/"
              component={withTracker(Tucson)}
            />
            <Route
              exact
              path="/markets/phoenix/"
              component={withTracker(PhoenixSum)}
            />
            <Route
              exact
              path="/markets/phoenix/sdp"
              component={withTracker(Phoenix)}
            />
            <Route
              exact
              path="/markets/columbus/sdp"
              component={withTracker(Columbus)}
            />
            <Route
              exact
              path="/markets/tucson/sdp"
              component={withTracker(TucsonSDP)}
            />
            <Route
              exact
              path="/info/contact"
              component={withTracker(Contact)}
            />
            <Route
              exact
              path="/info/questionnaire"
              component={withTracker(Questionnaire)}
            />
            <Route
              exact
              path="/info/investing/ira401k"
              component={withTracker(SupportCo)}
            />
            <Route component={withTracker(PageNotFound)} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
