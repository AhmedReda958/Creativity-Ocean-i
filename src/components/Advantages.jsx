import React from "react";
import { FaAward } from "react-icons/fa";
import image from "assets/images/advantages.png";

const Advantages = () => {
  return (
    <div className="advantages" id="advantages">
      <div className="container">
        <div className="heading" data-aos="fade-down-right">
          <h2>
            <FaAward />
            Our Advantages
          </h2>
        </div>

        <div className="row">
          <div className="col-12 col-md-8">
            {" "}
            <ul className="content">
              <li data-aos="fade-right">
                Focused on our core activities and have deep understanding of
                our market.{" "}
              </li>
              <li data-aos="fade-right">
                Committed to our partners and have the strategic approach and
                financial stability to support long term investments and
                partnerships.
              </li>
              <li data-aos="fade-right">
                Established relationships with many suppliers, partners,
                regulators and stakeholders.
              </li>
              <li data-aos="fade-right">
                Ability to leverage capabilities from across the company and our
                network of consultants.{" "}
              </li>
              <li data-aos="fade-right">
                We provide a whole solution to our partners. With a full support
                along all the SC cycle
              </li>
              <li data-aos="fade-right">
                Our employees are professionals with top service standards.
              </li>
            </ul>
          </div>
          <div className="image col-12 col-md-4 ">
            <img src={image} alt="" data-aos="fade-down" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
