import React from 'react';
import ReactDOM from 'react-dom';
import './style/normalize.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/docs/css/mdb.css';
import './style/dist/css/mdb.min.css';
import './style/styles.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.querySelector('#root'));
registerServiceWorker();
