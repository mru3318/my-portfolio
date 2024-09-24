import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <div className="App">
        <nav
          className="navbar navbar-expand-lg fixed-top"
          style={{ backgroundColor: "#CCCCC8" }}
          aria-label="Thirteenth navbar example"
        >
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsExample11"
              aria-controls="navbarsExample11"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse d-lg-flex"
              id="navbarsExample11"
            >
              <Link
                className="navbar-brand col-lg-3 me-0 rajdhani-light"
                href="#"
              >
                MAYUR
              </Link>
              <ul className="navbar-nav col-lg-6 justify-content-lg-center">
                <li className="nav-item">
                  <Link
                    className="nav-link custom-link"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link custom-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link custom-link" to="/resume">
                    Resume
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link custom-link" href="#">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
