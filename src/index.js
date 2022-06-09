import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import UserLogin from "./components/UserLogin";
import "./i18n"

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <UserLogin />
  </React.StrictMode>,
  document.getElementById("root")
);
