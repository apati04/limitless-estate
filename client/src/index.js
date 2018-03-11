import * as $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import './style/styles.css';
import 'mapbox-gl/dist/mapbox-gl';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { unregister } from './registerServiceWorker';
window.jQuery = window.$ = $;
window.Popper = Popper;
require('bootstrap');
$(function() {
  $('.poppy').popover({
    container: 'body'
  });
  $('.popover-dismiss').popover({
    trigger: 'focus'
  });
});

ReactDOM.render(<App />, document.getElementById('root'));
unregister();
