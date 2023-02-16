import React from "react";
import { Link } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <div className="about" id="about-us">
      <div className="container">
        <div className="content">
          <h3>About Us</h3>
          <p data-aos="fade-right">
            Creativity Ocean is a leading consultation and distribution company
            in Saudi Arabia, GCC and MENA for Medical Devices, Laboratory
            Devices, Consumables, Pharmaceutical industry Machineries and
            Chemicals. We started in consultations field more than 10 years ago
            then we expanded our scope into the distribution business.
          </p>
          <p data-aos="fade-right">
            Our Client list include, Pharmaceutical industries, medical devices
            industries, food manufacturers, laboratories, gas and oil companies,
            construction companies, universities, hospitals, pharmacy chains,
            clinics, etc.
          </p>
          <p data-aos="fade-right">
            We provide full solutions for our clients by fulfilling the clients
            need and facilitate their businesses and by delivering quality,
            service, trust and reliability to our clients
          </p>
          <div className="d-flex justify-content-center">
            <Link
              to="/services"
              className="btn btn-primary btn-lg  my-5"
              data-aos="fade-up"
            >
              Our Services
              <FaArrowRight className="ms-3" data-aos="fade-right" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
