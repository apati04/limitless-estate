import "bootstrap";
import "bootstrap-material-design/dist/css/bootstrap-material-design.min.css";
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
