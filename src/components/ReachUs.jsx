import React from "react";
import { FaPaperPlane, FaPhone } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const ContactForm = () => {
  return (
    <form
      action="mailto:info@creativity-ocean.com"
      method="POST"
      encType="multipart/form-data"
      name="EmailForm"
    >
      <div className="row row-cols-2">
        <div className="col">
          <input
            type="text"
            className="form-control mb-3"
            name="first name"
            placeholder="Frist Name"
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control mb-3"
            name="last-name"
            placeholder="Last Name"
          />
        </div>
      </div>

      <input
        type="email"
        className="form-control mb-3"
        name="email-form"
        placeholder="Email"
      />

      <input
        type="text"
        className="form-control mb-3"
        name="company-name"
        placeholder="Company Name"
      />

      <input
        type="tel"
        className="form-control mb-3"
        name="phone"
        placeholder="Phone"
      />
      <div className="form-floating mb-3">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          name="order"
        ></textarea>
        <label htmlFor="floatingTextarea">Order</label>
      </div>
      <button type="submit" className="btn btn-primary mb-3">
        Send
        <FaPaperPlane className=" ms-2" />
      </button>
    </form>
  );
};

const ReachUs = () => {
  return (
    <div className="reach-us" id="contact-us">
      <div className="container mb-5">
        <h3 className="mb-5">Contact Us </h3>

        {/* contact from */}
        <div className="row">
          <div className="col-12 col-md-6">
            <h6 className="mb-3">
              For any informaion or to order <br /> please fill the form below
            </h6>
            <ContactForm />
          </div>
          <div className="col-12 col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3625.2149994968463!2d46.67281441499942!3d24.685134884136957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDQxJzA2LjUiTiA0NsKwNDAnMzAuMCJF!5e0!3m2!1sen!2seg!4v1677155664459!5m2!1sen!2seg"
              width="100%"
              height="350"
              // style="border:0;"
              allowFullScreen
              loading="lazy"
              title="location"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      {/* informaion section */}
      <div className="info">
        <div className="container">
          <h5>Call or email</h5>
          <div className="row pb-5  ps-sm-3 ps-md-0 ">
            <div className="col-12 col-sm-6 col-md ">
              {" "}
              <ul>
                <li>7120 Takasussi Street, northern Mathar</li>
                <li>Building no. 1</li>
                <li>Office no. 103</li>
                <li>Riyadh 12314-3178</li>
                <li>Saudi Arabia</li>
                <li>Riyadh team</li>
                <li>
                  <a href="mailto:info@creativity-ocean.com">
                    <FiMail />
                    info@creativity-ocean.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-md ">
              <h6>Central and eastern regions sales:</h6>
              <ul>
                <li>
                  <a href="tel:+966530230301">
                    <FaPhone />
                    +966-530230301
                  </a>
                </li>
                <li>
                  <a href="mailto:fakhri@creativity-ocean.com">
                    <FiMail />
                    fakhri@creativity-ocean.com
                  </a>
                </li>
                <li>Fakhraldeen Mohammed</li>
              </ul>
              <h6>All other local or international sales:</h6>
              <ul>
                <li>
                  <a href="mailto:sales@creativity-ocean.com">
                    <FiMail />
                    Sales@creativity-ocean.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-12 col-md ">
              {" "}
              <h6>Western region sales:</h6>
              <ul>
                <li>
                  <a href="tel:+966507289172">
                    <FaPhone />
                    +966-507289172
                  </a>
                </li>
                <li>
                  <a href="mailto:Sales1@creativity-ocean.com">
                    <FiMail />
                    Sales1@creativity-ocean.com
                  </a>
                </li>
                <li>Mohammed Haleem</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReachUs;
