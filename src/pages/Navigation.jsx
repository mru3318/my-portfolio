import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const [activeItem, setActiveItem] = useState("Home");

  return (
    <div className="App">
      <nav
        className="navbar navbar-expand-lg fixed-top"
        style={{ backgroundColor: "#CCCCC8" }}
        aria-label="Main navigation"
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
            <Link className="navbar-brand col-lg-3 me-0 rajdhani-light" to="/">
              MAYUR
            </Link>
            <ul className="navbar-nav col-lg-6 justify-content-lg-center">
              {["Home", "About", "Resume", "Contact"].map((item) => (
                <li className="nav-item" key={item}>
                  <Link
                    className={`nav-link custom-link ${
                      activeItem === item ? "active" : ""
                    }`}
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    onClick={() => setActiveItem(item)}
                  >
                    {item}
                    <span
                      className={`underline ${
                        activeItem === item ? "active" : ""
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
