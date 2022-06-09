import React from "react";

function MainRequestForm() {
  return (
    <>
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
                      className="dropdown-menu text-center bg-green"
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
        <div className="userFormDiv">
          <h3 className="formHeading">Request Form</h3>
          <form className="form-floating row g-3 userForm">
            <div className="form-floating mb-3 col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="name@example.com"
                name="name"
                id="name"
                required=""
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className="form-floating mb-3 col-md-6">
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="name@example.com"
              />
              <label htmlFor="phone">Contact Number</label>
            </div>
            <div className="form-floating mb-3 col-md-6">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Education Qualification</label>
            </div>
            <div className="form-floating mb-3 col-md-6">
              <input
                type="date"
                className="form-control"
                name="date"
                placeholder="name@example.com"
                required=""
              />
              <label htmlFor="floatingInput">Date of Birth</label>
            </div>
            <div className="form-floating mb-3 col-12">
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
              <label htmlFor="inputAddress">Address</label>
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">
                City
              </label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label">
                State
              </label>
              <select id="inputState" className="form-select">
                <option selected="">Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="col-md-2">
              <label htmlFor="inputZip" className="form-label">
                Zip
              </label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
            <div className="genderCheckbox row">
              <div className="col-3">
                <span>Gender</span>
              </div>
              <div className="form-check col-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Gender"
                  id="male"
                  defaultValue="male"
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>
              <div className="form-check col-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Gender"
                  id="female"
                  defaultValue="female"
                />
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>
              <div className="form-check col-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Gender"
                  id="other"
                  defaultValue="other"
                />
                <label className="form-check-label" htmlFor="other">
                  Other
                </label>
              </div>
            </div>
            <select className="form-select" aria-label="Default select example">
              <option selected="">Select type of need</option>
              <option value="Financial">Financial</option>
              <option value="Non-financial">Non-financial</option>
            </select>
            <select className="form-select" aria-label="Default select example">
              <option selected="">Select the sub-category of need</option>
              <option value="Education">Education</option>
              <option value="Health">Health</option>
              <option value="Livelihood">Livelihood</option>
              <option value="Life skills">Life skills</option>
              <option value="Eduation Counselling">Eduation Counselling</option>
              <option value="Medical Counselling">Medical Counselling</option>
            </select>
            <div className="mt-3 center">
              <button className="btn btn-lg btn-dark" onclick="f3()">
                Next
              </button>
              {/* button call to js function or to the server? */}
            </div>
          </form>
        </div>
      </>
    </>
  );
}
export default MainRequestForm;
