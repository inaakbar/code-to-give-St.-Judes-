import React from "react";

function HomeNavbar()
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
                  src="/public/logo-removebg.png"
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
      </>
    );
}
export default HomeNavbar;