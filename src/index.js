import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";

import { LoginContextHandler } from "./Context/LoginContext";
import { PostContextHandler } from "./Context/PostContext";
import { UserContextHandler } from "./Context/userContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginContextHandler>
      <PostContextHandler>
      <UserContextHandler>
        <App />
      </UserContextHandler>
      </PostContextHandler>
      </LoginContextHandler>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
