
import "./index.css";
import React from 'react'
import ReactDOM from 'react-dom'
import {App} from "./App";
import { makeServer } from "./server";
import {BrowserRouter } from "react-router-dom";
import {ProductProvider} from "./Context/Context"

// Call make Server
makeServer();

ReactDOM.render(
  <BrowserRouter>
   <ProductProvider>
     <App/>
    </ProductProvider>
</BrowserRouter>,
  document.getElementById("root")
);
