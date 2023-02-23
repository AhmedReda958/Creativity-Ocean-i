import React from "react";
import image1 from "assets/images/services-1.jpg";
import image2 from "assets/images/services-2.jpg";
import image3 from "assets/images/services-3.jpg";
const Services = () => {
  return (
    <div className="services">
      <div className="heading2 text-center" data-aos="fade-down">
        <h2 id="services">Our Services</h2>
      </div>
      <div className="serv">
        <div className="container">
          <div className="row ">
            <div className="col-12 col-md-8 ">
              <div className="content pt-md-5">
                <p data-aos="fade-right">
                  Creativity ocean has a strong network of clients including
                  Pharmaceutical industries, laboratories, universities,
                  hospitals, pharmacy chains, clinics, etc.
                </p>
                <p data-aos="fade-right">
                  Serviced with a large marketing team distributed in Saudi
                  Arabia, GCC and MENA.
                </p>

                <p data-aos="fade-right">
                  We provide full solutions for our clients by fulfilling the
                  clients need and facilitate their businesses and by delivering
                  quality, service, trust and reliability to our clients
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4 ">
              <div className="image">
                <img src={image1} alt="" data-aos="zoom-in" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="serv">
        <div className="container">
          <div className="row ">
            <div className="col-12 col-md-4 ">
              <div className="image">
                <img src={image2} alt="" data-aos="zoom-in" />
              </div>
            </div>
            <div className="col-12 col-md-8 ">
              <div className="content pt-md-5 ps-md-5">
                <p data-aos="fade-right">
                  In the laboratories and medical laboratories section, the
                  company offers a wide range of different services and
                  products, including consumable laboratory equipment and
                  supplies, calibration and examination equipment and tools, in
                  addition to other supplies and products related to
                  sterilization and health safety.
                </p>

                <p data-aos="fade-right">
                  The company works permanently and continuously to build strong
                  relationships with customers by providing products from
                  various well-known brands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="serv">
        <div className="container">
          <div className="row ">
            <div className="col-12 col-md-8 ">
              <div className="content pt-md-5 ">
                <p data-aos="fade-right">
                  Our success at Creativity Ocean is rooted in our
                  professionalism, our modern infrastructure and our specialized
                  knowledge of consumers
                </p>
                <p data-aos="fade-right">
                  We are interested in distributing medical devices and all the
                  tools that health care providers need to perform their duties
                  and to help patients.
                </p>

                <p data-aos="fade-right">
                  We only distribute medical devices and health supplements that
                  fulfill and pass the requirements of the health authorities in
                  the country of distribution. Thus, our products will always
                  meet the requirements of quality, safety and efficacy.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4 ">
              <div className="image">
                <img src={image3} alt="" data-aos="zoom-in" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
