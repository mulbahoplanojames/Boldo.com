import "/src/Components/Services/Services.css";
import ServiceCard from "../ServicesCard/ServiceCard";
import "animate.css";
import { serviceData } from "../../Constant/Constant";

const Services = () => {
  return (
    <>
      <div className="services">
        <p className="main-title">Our Services</p>
        <h1 className="service_title">
          Crowdfunding Handshake Infographic for Mass <br /> Market Iteration.
        </h1>

        <div className="services_primary_wripper">
          {serviceData.map((data) => {
            return (
              <ServiceCard
                key={data.id}
                card_head={<img src={data.image}></img>}
                card_title={data.title}
                card_description={data.description}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
