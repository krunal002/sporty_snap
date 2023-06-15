import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";

import { LoginContextHandler } from "./Context/LoginContext";
import { PostContextHandler } from "./Context/PostContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginContextHandler>
      <PostContextHandler>
        <App />
      </PostContextHandler>
      </LoginContextHandler>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
