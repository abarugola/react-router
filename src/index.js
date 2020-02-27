import React from 'react';
import ReactDOM from 'react-dom';
import Principal from './Principal';
import App from './App';
import Counter from './Counter';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Lienzo from './Lienzo';

ReactDOM.render(
  <Lienzo />,
  // <App counter={new Counter()}/>,
  document.getElementById('root')
);
