import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";

import { LoginContextHandler } from "./Context/LoginContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginContextHandler>
        <App />
      </LoginContextHandler>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
