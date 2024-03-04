import React from "react";
// import style from "./Header.module.css"
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg  bg-dark  navbar-dark sticky-top">
        <div className="container-fluid">
          <NavLink to="/">
            <img
              className="d-block  rounded-circle"
              src="MATf.png"
              alt="LOGO"
              width="100"
              height="50"
            />
          </NavLink>
          <button
            className="navbar-toggler navbar-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Documentaion
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="Learn">
                  Learn
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="Community">
                  Community
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="Pricing">
                  Pricing
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
