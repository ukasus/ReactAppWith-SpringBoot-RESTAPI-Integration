import React from 'react';
import ReactDOM from 'react-dom';
import AppMain from './AppMain.js';
import {BrowserRouter} from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter><AppMain></AppMain></BrowserRouter>,
  document.getElementById('root')
);
