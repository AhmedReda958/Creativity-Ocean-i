import React from "react";
import missionImg from "assets/images/mission.png";
import visionImg from "assets/images/vision.png";
const Mission = () => {
  return (
    <div className="ourmission">
      <div className="container">
        <div className="mission mb-5">
          <div className="row">
            <div className="col-12 col-md-8">
              <div className="content">
                <h3>Our Mission</h3>
                <p data-aos="fade-right">
                  We strive for excellence in supporting customers with high
                  quality products and services in the right time and at the
                  right cost.
                </p>
              </div>
            </div>
            <div className="col-0 col-md-4">
              <img src={missionImg} alt="mission section" />
            </div>
          </div>
        </div>
        <div className="vision">
          <div className="row">
            <div className="col-0 col-md-4">
              <img src={visionImg} alt="vision section" />
            </div>
            <div className="col-12 col-md-8">
              <div className="content">
                <h3>Our Vision</h3>
                <p data-aos="fade-up">
                  To be a trusted, reliable and highly respected partner to our
                  clients by providing industry-leading Integrated solutions
                  (services and products) with integrity, transparency &
                  flexibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
