import React from "react";
import image1 from "assets/images/partner-1.png";
import image2 from "assets/images/partner-2.png";
import image3 from "assets/images/partner-3.png";
import image4 from "assets/images/partner-4.png";
import image5 from "assets/images/partner-5.png";
import image6 from "assets/images/partner-6.png";

const Partners = () => {
  return (
    <div className="partners ">
      <div className="container">
        <div className="heading">
          <h4>Our Sucess Partners</h4>
        </div>
        <div className="row logos">
          <div className="col">
            <img src={image1} alt="partner" />
          </div>
          <div className="col">
            <img src={image2} alt="partner" />
          </div>
          <div className="col">
            <img src={image3} alt="partner" />
          </div>
          <div className="col">
            <img src={image4} alt="partner" />
          </div>
          <div className="col">
            <img src={image5} alt="partner" />
          </div>
          <div className="col">
            <img src={image6} alt="partner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
