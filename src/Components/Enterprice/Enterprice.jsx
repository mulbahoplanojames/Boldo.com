import React from "react";
import EnterpriceCard from "./EnterpriceCard";
import img6 from "../../assets/potter.png";
import img6 from "../../assets/albut.png";
import img7 from "../../assets/sev.png";

const Enterprice = () => {
  return (
    <>
      <div className="enterprice">
        <h1 className="title">
          An enterprise template to ramp up <br /> your company website
        </h1>

        <div className="enterprice_wripper">
          <EnterpriceCard
            descrption={`
          "Release Facebook responsive web design business model canvas seed
          money monetization"`}
            img={<img src="src/assets/potter.png" alt="Potter img" />}
            name={"Harry Potter"}
            position={"Team leader @ Grayffindor"}
          />
          <EnterpriceCard
            descrption={`
            "buyer buzz network partner disruptive non-disclosure agreement business and create an amazing atmosphere"`}
            img={<img src="src/assets/albut.png" alt="Ablus img" />}
            name={"Ablus FaWolobah"}
            position={"Manager @ Howart"}
          />
          <EnterpriceCard
            descrption={`
            "Learn curve infrastructure value proposition advisor strategy user experience hypotheses investor."`}
            img={<img src="src/assets/sev.png" alt="Sev img" />}
            name={"Severus Snape"}
            position={"Manager @ Slytherin"}
          />
        </div>
      </div>
    </>
  );
};

export default Enterprice;
