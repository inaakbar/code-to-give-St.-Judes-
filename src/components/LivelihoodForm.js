import React from "react";

function LivelihoodForm() {
  return (
    <>
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
              <span className="logoSpan">User Dashboard</span>
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
            <form action="" method="post" className="">
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
                    Profile
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
                <li className="nav-item">
                  <button
                    type="submit"
                    name="contactUs"
                    formAction="/"
                    className="btn btn-outline-light nav-btn"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
      {/* form */}
      <div className="userFormDiv" id="educationForm">
        <h3>Livelihood Form</h3>
        <form className="form-floating row g-3 userForm">
          <div className="form-floating mb-3 col-12">
            <input
              type="text"
              className="form-control"
              placeholder="name@example.com"
              name="hospital"
              id="hospital"
              required=""
            />
            <label htmlFor="hospital">Hospital Name</label>
          </div>
          <div className="form-group">
            <label htmlFor="agenda">Agenda</label>
            <textarea
              className="form-control"
              id="agenda"
              rows={3}
              defaultValue={""}
            />
          </div>
          <div className="mt-3 center">
            <button className="btn btn-lg btn-dark" onclick="f3()">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default LivelihoodForm;
