import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import UserLogin from "./components/UserLogin";
import AdminLogin from "./components/AdminLogin";
import About from "./components/About";
import MainRequestForm from "./components/MainRequestForm";
import EducationForm from "./components/EducationForm";
import "./i18n"

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <MainRequestForm /> */}
    {/* <UserLogin/> */}
    {/* <MainRequestForm/> */}
    <EducationForm/>
    {/* <AdminLogin/> */}
  </React.StrictMode>,
  document.getElementById("root")
);
