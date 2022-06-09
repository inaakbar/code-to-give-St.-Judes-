import React from "react";
import "./App.css";

function UserLogin()
{
    return(<>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <form action="" method="post">
              <button
                type="submit"
                name="contactUs"
                formAction="/"
                className="btn btn-outline-light btn-lg nav-btn"
              >
                <img
                  src={require("./public2/logo-removebg.png")}
                  alt="logo"
                  width={45}
                  height={45}
                  className="d-inline-block align-top"
                />
                <span className="logoSpan">St. Judes for Life</span>
              </button>
            </form>
            <button
              className="navbar-toggler nav-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#toggleMobileMenu"
              aria-controls="toggleMobileMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="toggleMobileMenu">
              <form action="" method="post" className="navbar-form">
                <ul className="navbar-nav ms-auto text-center">
                  <li className="nav-item">
                    {/* <a href="home.ejs" class="nav-link active">About Us</a> */}
                    <button
                      type="submit"
                      name="home"
                      formAction="/"
                      className="btn btn-outline-light nav-btn"
                    >
                      Home
                    </button>
                  </li>
                  <li className="nav-item">
                    {/* <a href="home.ejs" class="nav-link active">About Us</a> */}
                    <button
                      type="submit"
                      name="aboutUs"
                      formAction="/"
                      className="btn btn-outline-light nav-btn"
                    >
                      About Us
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      type="submit"
                      name="contactUs"
                      formAction="/"
                      className="btn btn-outline-light nav-btn"
                    >
                      Contact Us
                    </button>
                  </li>
                  <li className="nav-item dropdown">
                    {/* <a
                      href="#"
                      class="nav-link dropdown-toggle"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Languages
                    </a> */}
                    <button
                      href="#"
                      className="dropdown-toggle btn btn-outline-light nav-btn"
                      id="navbarDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Languages
                    </button>
                    <ul
                      className="dropdown-menu text-center bg-dark"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <button
                          type="submit"
                          name="aboutUs"
                          formAction="/"
                          className="btn btn-outline-light nav-btn"
                        >
                          English
                        </button>
                      </li>
                      <li>
                        <button
                          type="submit"
                          name="aboutUs"
                          formAction="/"
                          className="btn btn-outline-light nav-btn"
                        >
                          Hindi
                        </button>
                      </li>
                    </ul>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </nav>
        <div className="text-center HomeLogin">
          <form className="loginForm">
            <img
              src={require("./public2/logo-removebg.png")}
              alt="Logo"
              height={72}
              className="mt-4 mb-3"
            />
            <h1 className="h3 mb-3 font-weight-normal">Sign as user</h1>
            <label htmlFor="UID" className="visually-hidden">
              Unique Id
            </label>
            <input
              type="text"
              name=""
              id="UID"
              placeholder="Unique Id"
              className="form-control"
              pattern="^[a-zA-Z0-9]*$"
              required=""
              autofocus=""
            />
            <label htmlFor="password" className="visually-hidden">
              Password
            </label>
            <input
              type="password"
              name=""
              id="password"
              placeholder="Password"
              className="form-control"
              pattern="^[0-9]{8}"
              required=""
              autofocus=""
            />
            {/* pattern attr can be removed if regex written is js */}
            <div className="mt-3">
              <button type="submit" className="btn btn-lg btn-outline-dark">
                Sign in
              </button>
            </div>
            {/* <a href="#">Forgot Password</a> */}
          </form>
        </div>
      </>
      );

}
export default UserLogin;