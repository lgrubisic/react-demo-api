import React from "react";
import ReactDOM from "react-dom";
import App from './App.js';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes';

ReactDOM.render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById('root')
);
