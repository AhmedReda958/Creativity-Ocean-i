import React from "react";
// import image1 from "assets/images/services-1.jpg";
// import image2 from "assets/images/services-2.jpg";
// import image3 from "assets/images/services-3.jpg";

const About = () => {
  return (
    <div className="about" id="about-us">
      <div className="container">
        {/* <div className="row">
          <div className="col-12 col-md-6"> */}
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
          {/* </div> */}
          {/* </div> */}
          {/* <div className="gallary col-12 col-md-6">
            <div className="row">
              <div className="col-8">
                <img src={image1} alt="about us" />
              </div>
              <div className="col-4">
                <img src={image2} alt="about us" className="mb-3" />
                <img src={image3} alt="about us" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
