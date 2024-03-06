import "/src/Components/Services/Services.css";
import ServiceCard from "../ServicesCard/ServiceCard";
import "animate.css";
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
          <ServiceCard
            card_head={<img src={img1}></img>}
            card_title={"Cool feature title"}
            card_description={
              "Learning curve network effects return on investment."
            }
          />
          <ServiceCard
            card_head={<img src={img2}></img>}
            card_title={"Even cooler Colaboration"}
            card_description={
              "ROI benefits from network effects on the learning curve."
            }
          />
          <ServiceCard
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
