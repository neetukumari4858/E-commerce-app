
import "./index.css";
import React from 'react'
import ReactDOM from 'react-dom'
import {App} from "./App";
import { makeServer } from "./server";
import {BrowserRouter } from "react-router-dom";

// Call make Server
makeServer();

ReactDOM.render(
  <BrowserRouter>
      <App/>
</BrowserRouter>,
  document.getElementById("root")
);
