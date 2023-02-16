import React from "react";
import "./style.scss";
import logo from "assets/images/logo-small.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar navbar-expand-md shadow-sm sticky-top">
      <div className="container bg-white">
        <NavLink to="/" className="navbar-brand logo">
          <img src={logo} alt="" height="50" />
        </NavLink>
        <button
          className="navbar-toggler border-0"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-center " id="navbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-link">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="services" className="nav-link">
                Our Services
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="contact" className="nav-link">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
