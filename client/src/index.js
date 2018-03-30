import React from 'react';
import ReactDOM from 'react-dom';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/docs/css/mdb.min.css';
import './style/styles.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'mapbox-gl/dist/mapbox-gl';
import './style/font.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers';

import App from './components/App';
import { unregister } from './registerServiceWorker';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  {},
  composeEnhancer(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
unregister();
