import './style/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './style/dist/css/new.min.css';
import './style/styles.css';
import React from 'react';
import ReactGA from 'react-ga';
// import 'bootstrap-css-only/css/bootstrap.min.css';

import ReactDOM from 'react-dom';
import App from './components/App';

import { unregister } from './registerServiceWorker';
ReactGA.initialize('UA-135472447-1');
ReactDOM.render(<App />, document.querySelector('#root'));
unregister();
