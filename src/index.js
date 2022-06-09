import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import UserLogin from "./components/UserLogin";
import AdminLogin from "./components/AdminLogin";
import About from "./components/About";
import "./i18n"

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UserLogin /> */}
    {/* <AdminLogin /> */}
    <About />
  </React.StrictMode>,
  document.getElementById("root")
);
