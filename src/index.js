import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './components/Slider';

const onChange = (event, value) => {
  console.log(value);
};

window.onload = function() {
  ReactDOM.render(
    <div>
      <Slider
        height={20}
        width={300}
        max={100}
        onChange={onChange}
        backStyle={{ backgroundColor: 'black', }}
        frontStyle={{ backgroundColor: 'red' }}
      />

      <Slider
        height={10}
        width={400}
        max={100}
        defaultValue={20}
        onChange={onChange}
      />
    </div>
    ,
    document.getElementById('main')
  );
  if (module.hot) {
    module.hot.accept(function(err) {
      if (err) console.error(err);
    });
  }
};

// vim: ft=javascript.jsx

