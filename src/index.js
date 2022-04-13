
import "./index.css";
import React from 'react'
import ReactDOM from 'react-dom'
import {App} from "./App";
import { makeServer } from "./server";
import { ProductProvider } from "./Context/Context";
import {BrowserRouter } from "react-router-dom";

// Call make Server
makeServer();

ReactDOM.render(
  <BrowserRouter>
     <ProductProvider >
      <App/>
      </ProductProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
