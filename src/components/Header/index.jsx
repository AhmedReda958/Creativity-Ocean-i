import React from "react";
import "./style.scss";
import logo from "assets/images/logo-small.png";

const Header = () => {
  return (
    <header className="navbar navbar-expand-md shadow-sm sticky-top">
      <div className="container bg-white">
        <a href="/" className="navbar-brand logo">
          <img src={logo} alt="" height="50" />
        </a>
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
              <a href="#about-us" className="nav-link active">
                About Us
              </a>
            </li>
            <li className="nav-link">
              <a href="#services" className="nav-link">
                Our Services
              </a>
            </li>
            <li className="nav-link">
              <a href="#advantages" className="nav-link">
                Our Advantages
              </a>
            </li>
            <li className="nav-link">
              <a href="#contact-us" className="nav-link">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
