import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from "react-router-dom";

// BrowserRouter base router Anything inside of this compoinet will render on every page 
ReactDOM.render(

  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

