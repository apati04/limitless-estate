<<<<<<< HEAD
import "bootstrap";
import "bootstrap-material-design/dist/css/bootstrap-material-design.min.css";
=======
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/docs/css/mdb.min.css";
>>>>>>> 3728fc05cf8c5dc1a709a3da74c0b1b8fe12dba7
import "mapbox-gl/dist/mapbox-gl.css";
import "./style/styles.css";
import "mapbox-gl/dist/mapbox-gl";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "./reducers";
import App from "./components/App";
import { unregister } from "./registerServiceWorker";

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
  document.getElementById("root")
);
unregister();
