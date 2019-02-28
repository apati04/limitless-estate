import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
import './style/dist/css/new.min.css';
// import './style/normalize.css';
import './style/styles.css';

import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';

import { unregister } from './registerServiceWorker';

ReactDOM.render(<App />, document.querySelector('#root'));
unregister();
