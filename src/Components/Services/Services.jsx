import React from "react";
import "/src/Components/Services/Services.css";
import ServiceInitialCard from "./ServiceInitialCard";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";

const Services = () => {
  return (
    <>
      <div className="services">
        <p className="main-title">Our Services</p>
        <h1 className="service_title">
          Crowdfunding Handshake Infographic for Mass <br /> Market Iteration.
        </h1>

        <div className="services_primary_wripper">
          <ServiceInitialCard
            card_head={<img src={img1}></img>}
            card_title={"Cool feature title"}
            card_description={
              "Learning curve network effects return on investment."
            }
          />
          <ServiceInitialCard
            card_head={<img src={img2}></img>}
            card_title={"Even cooler Colaboration"}
            card_description={
              "ROI benefits from network effects on the learning curve."
            }
          />
          <ServiceInitialCard
            card_head={<img src={img3}></img>}
            card_title={"Essential Enterpreneurhip"}
            card_description={
              "LROI benefits from the network effects of the learning curve."
            }
          />
        </div>
      </div>
    </>
  );
};

export default Services;
