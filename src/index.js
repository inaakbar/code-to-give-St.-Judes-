import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import UserLogin from "./components/UserLogin";
import AdminLogin from "./components/AdminLogin";
import About from "./components/About";
import MainRequestForm from "./components/MainRequestForm";
import "./i18n"

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <MainRequestForm />
  </React.StrictMode>,
  document.getElementById("root")
);
