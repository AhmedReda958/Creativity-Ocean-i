import React from "react";

import image1 from "assets/images/services-slider-1.jpg";
import image2 from "assets/images/services-slider-2.jpg";
import image3 from "assets/images/services-slider-3.jpg";
import { Link } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";

const ServicesSlider = () => {
  return (
    <div className="services-slider">
      <div className="container">
        <h3>Our distribution services include:</h3>
        <div className="service">
          <div className="row">
            <div className="col-12 col-md-7">
              <div className="content" data-aos="fade-right">
                <ol>
                  <li>
                    Laboratory instruments and consumables for different fields:
                    <ul>
                      <li>Analytical Instruments</li>
                      <li>Measuring Instruments</li>
                      <li>Material Testing Instruments</li>
                    </ul>
                  </li>
                  <li>
                    Reference standards:
                    <ul>
                      <li>USP</li>
                      <li>(Council of Europe)</li>
                    </ul>
                  </li>
                  <li>Soil, Concrete, Aggregate Testing Equipments.</li>
                  <li>Research & Development Instruments.</li>
                  <li>
                    Life science research tools and equipments including nano
                    technology research.
                  </li>
                </ol>
              </div>
            </div>
            <div className="col-12 col-md-5">
              <div className="image">
                <img src={image1} alt="service" data-aos="fade-up" />
              </div>
            </div>
          </div>
        </div>
        <div className="service">
          <div className="row">
            <div className="col-12 col-md-5">
              <div className="image">
                <img src={image2} alt="service" data-aos="fade-up" />
              </div>
            </div>
            <div className="col-12 col-md-7">
              <div className="content" data-aos="fade-right">
                <ol start={6}>
                  <li> Electrical Tools & Equipment.</li>
                  <li>Laboratory furniture.</li>
                  <li>
                    Pharmaceutical manufacturing machineries and instruments.
                  </li>
                  <li> Food manufacturing machineries and instruments.</li>
                  <li>Laboratory Chemicals and Reference Standards.</li>
                  <li>
                    APIs and other additives for Pharmaceutical Industries.
                  </li>
                  <li>Providing IT solutions and services.</li>
                  <li>
                    Packaging materials for pharmaceutical and
                    foodmanufacturers.
                  </li>
                  <li>Providing IT solutions and services</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="service">
          <div className="row">
            <div className="col-12 col-md-7">
              <div className="content" data-aos="fade-right">
                <ol start={15}>
                  <li>
                    Support Pharmaceutical companies to implement Pharma 4.0
                    (Digitalization of Pharmaceutical industry)
                    <ul>
                      <li>Holistic control strategy</li>
                      <li>Manufacturing optimization</li>
                      <li>Complexity Management</li>
                      <li>Workforce Benefits</li>
                      <li>Real- Time data for Faster actions & Decisions</li>
                      <li>
                        Implementation of Aggregation & Integration with SAP
                      </li>
                      <li>Implementation of eQMS & SAP Integration</li>
                      <li>Upgrading of Existing Legacy</li>
                    </ul>
                  </li>
                  <li>
                    Computer software validation (computer software assurance)
                    <ul>
                      <li>21 CFR Part 11 Compliance</li>
                      <li>Regulatory Compliance</li>
                      <li>Minimum workforce effort</li>
                      <li>Real time Data & Traceability</li>
                      <li>Focus on Safety, Quality & Productivity</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
            <div className="col-12 col-md-5">
              <div className="image">
                <img src={image3} alt="service" data-aos="fade-up" />
              </div>
            </div>
          </div>
        </div>
        {/* call to action link */}
        <div className="d-flex justify-content-center">
          <Link to="/contact" className="btn btn-primary btn-lg  my-5">
            Contact US
            <FaPaperPlane className="ms-3" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesSlider;
