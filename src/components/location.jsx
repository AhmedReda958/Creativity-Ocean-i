import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import image from "assets/images/location.png";

const Location = () => {
  return (
    <div className="location" id="location">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-12 col-md-8 ">
            <h3 className="heading" data-aos="fade-down">
              <FaMapMarkerAlt />
              Our Location
            </h3>
            <p data-aos="fade-right">
              Creativity Ocean is headquartered in Riyadh, Saudi Arabia and
              distribute both locally made and imported products
            </p>
          </div>
          <div className="col-12 col-md-4">
            <img src={image} alt="Saudi Arabia" data-aos="fade-right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
