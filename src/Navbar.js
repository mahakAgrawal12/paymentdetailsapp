import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          User Portal
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav" style={{ display: "flex" }}>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item me-1">
              {/* <form className="d-flex me-1"> */}
                <NavLink
                  className="btn btn-outline-light"
                  exact
                  to="/users/add"
                >
                  Add User
                </NavLink>
                </li>
                <li>
                <NavLink
                  className="btn btn-outline-light"
                  exact
                  to="/PostComponents/addpost"
                >
                  Create Post
                </NavLink>
              {/* </form> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;