import React from "react";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./public2/style/style.css";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (ln) => {
    return () => {
      i18n.changeLanguage(ln);
      console.log(`${ln}`);
    };
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <form action="./" method="post">
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
              <span className="logoSpan">{t("logo")}</span>
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
            <div
              action="https://www.google.com/"
              method="post"
              className="navbar-form"
            >
              <ul className="navbar-nav ms-auto text-center">
                <li className="nav-item">
                  {/* <a href="home.ejs" class="nav-link active">About Us</a> */}
                  <button
                    type="submit"
                    name="home"
                    formAction="/"
                    className="btn btn-outline-light nav-btn"
                  >
                    {t("home")}
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
                    {t("aboutUs")}
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    type="submit"
                    name="contactUs"
                    formAction="/"
                    className="btn btn-outline-light nav-btn"
                  >
                    {t("contactUs")}
                  </button>
                </li>
                <li className="nav-item dropdown">
                  <button
                    // href="#"
                    className="dropdown-toggle btn btn-outline-light nav-btn"
                    id="navbarDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {t("language")}
                  </button>
                  <ul
                    className="dropdown-menu text-center bg-green"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <button
                        onClick={changeLanguage("en")}
                        type="submit"
                        name="aboutUs"
                        formAction="/"
                        onsubmit="return false"
                        className="btn btn-outline-light nav-btn"
                      >
                        {/* English */}
                        {t("lang1")}
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={changeLanguage("hn")}
                        type="submit"
                        name="aboutUs"
                        formAction="/"
                        onsubmit="return false"
                        className="btn btn-outline-light nav-btn"
                      >
                        {/* Hindi */}
                        {t("lang2")}
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="text-center HomeLogin">
        <form className="loginForm">
          <div className="mx-auto my-5">
            <h2 className="text-center">{t("main-login")}</h2>
            <div className="d-flex align-items-center justify-content-center m-6">
              <button
                type="submit"
                name="admin"
                // formAction="/userLogin"
                onClick={"./userLogin"}
                className="btn btn-outline-dark btn-lg"
              >
                {t("user-login")}
              </button>
            </div>
            <br></br>
            <div className="d-flex align-items-center justify-content-center m-6">
              <button
                type="submit"
                name="user"
                formAction="/adminlogin"
                className="btn btn-outline-dark btn-lg"
              >
                {t("admin-login")}
              </button>
            </div>
          </div>
        </form>
      </div>
      <div id="contactUs">
        <h1>{t("contactUs")}</h1>
        <div className="row">
          <div className="col">
            <i className="fa-solid fa-location-dot fa-xl" />
            {/* St. Jude India ChildCare Centres
            Cotton Green Campus,
            Ground Floor, Mumbai Port Trust Colony, */}
            {t("address1")}
            <br />
            {/* ABC Colony (Rajas Nagar),
            Zakaria Bunder Road,
            Sewri, Mumbai 400015. */}
            {t("address2")}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <i className="fa-solid fa-phone fa-xl" />
            +91 022 6666 3152
          </div>
        </div>
        <div className="row">
          <div className="col">
            <i className="fa-solid fa-envelope fa-lg" />
            contact@stjudechild.org
          </div>
        </div>
      </div>
    </>
  );
 
}

export default App;
