import React from "react";

function HealthForm() {
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
                src={require("./public2/logo-removebg.png")}
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
        <h3>Health Form</h3>
        <form className="form-floating row g-3 userForm">
          <div className="form-floating mb-3 col-md-6 col-lg-4">
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
          <div className="form-floating mb-3 col-md-6 col-lg-4">
            <input
              type="text"
              className="form-control"
              id="medicalAilment"
              name="medicalAilment"
              placeholder="name@example.com"
            />
            <label htmlFor="medicalAilment">Medical Ailment</label>
          </div>
          <div className="form-floating mb-3 col-md-6 col-lg-4">
            <div>Duration of Treatment</div>
            <select className="form-select" aria-label="Default select example">
              <option selected="">Select duration of treatment</option>
              <option value="6 months">&lt;6 months</option>
              <option value="1to3 years">1-3 years</option>
              <option value="3 years">&gt;3 years</option>
            </select>
          </div>
          <div className="form-floating mb-3 col-md-6 col-lg-4">
            <div>Reason</div>
            <select className="form-select" aria-label="Default select example">
              <option selected="">Select type of reason</option>
              <option value="treatment">Treatment</option>
              <option value="medicine">Medicine</option>
              <option value="both">Both</option>
            </select>
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
            {/* button call to js function or to the server? */}
          </div>
        </form>
      </div>
    </>
  );
}
export default HealthForm;
