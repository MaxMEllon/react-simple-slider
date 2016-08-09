import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './components/Slider';

window.onload = function() {
  ReactDOM.render(<Slider />, document.getElementById('main'));
  if (module.hot) {
    module.hot.accept(function(err) {
      if (err) console.error(err);
    });
  }
}

// vim: ft=javascript.jsx

