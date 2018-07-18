import './style/styles.css';
import './style/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/dist/css/new.min.css';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { unregister } from './registerServiceWorker';

ReactDOM.render(<App />, document.querySelector('#root'));
unregister();
