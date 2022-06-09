import React from "react";

function About() {
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
        <div className="row mx-auto" id="aboutUs">
          <h2 className="text-center">About Us</h2>
          <div className="col-sm-12 col-md-6">
            <p className="text-sm-center text-md-start">
              St. Judes India ChildCare Centres provide every child suffering
              from cancer, irrespective of economic status, a chance at
              surviving the disease and leading a full, healthy, and happy life.
              The children come from underprivileged families who had made great
              sacrifices to ensure that the child was treated successfully for
              cancer. However, there are new challenges they may face while they
              try to become self-reliant and independent. To this end, the new
              vertical, St. Judes for Life (SJFL) will continue to provide
              support to those recovered as need arises.
            </p>
          </div>
          <div className="col-sm-12 col-md-6 text-center">
            {/* images as carousel */}
            <p className="text-center">
              SJFL provides multiple services to the beneficiaries across 4
              major thematic areas:
            </p>
            <div className="row icon">
              <div className="col-6 pb-6">
                <i className="fa-solid fa-school fa-2xl" />
                <div className="text-center">Education</div>
              </div>
              <div className="col-6">
                <i className="fa-solid fa-briefcase-medical fa-2xl" />
                <div className="text-center">Healthcare</div>
              </div>
            </div>
            <div className="row icon">
              <div className="col-6">
                <i className="fa-solid fa-house-chimney-user fa-2xl" />
                <div className="text-center">Livelihood</div>
              </div>
              <div className="col-6">
                <i className="fa-solid fa-screwdriver-wrench fa-2xl" />
                <div className="text-center">Life skills</div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
export default About;
