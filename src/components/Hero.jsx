import React from "react";
import video from "assets/videos/hero.mp4";
import logo from "assets/images/logo.png";
const Hero = () => {
  return (
    <div className="hero">
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <div className="logo">
        <img
          src={logo}
          alt="logo"
          data-aos="fade-down"
          data-aos-duration="3000"
        />
      </div>
    </div>
  );
};

export default Hero;
