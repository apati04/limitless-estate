import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/docs/css/mdb.min.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "./style/styles.css";
import "mapbox-gl/dist/mapbox-gl";
import Popper from "popper.js";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { unregister } from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
unregister();
