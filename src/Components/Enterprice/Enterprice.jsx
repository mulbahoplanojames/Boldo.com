import EnterpriceCard from "../EnterpriceCard/EnterpriceCard";
import img6 from "../../assets/potter.png";
import img6A from "../../assets/albut.png";
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
          "Release Facebook responsive web design business model canvas seed partner disruptive
          money monetization"`}
            img={<img src={img6} alt="Potter img" />}
            name={"Harry Potter"}
            position={"Team leader @ Grayffindor"}
          />
          <EnterpriceCard
            descrption={`
            "buyer buzz network partner disruptive non-disclosure agreement business and create an amazing atmosphere"`}
            img={<img src={img6A} alt="Ablus img" />}
            name={"Ablus FaWolobah"}
            position={"Manager @ Howart"}
          />
          <EnterpriceCard
            descrption={`
            "Learn curve infrastructure value proposition advisor strategy user experience hypotheses investor."`}
            img={<img src={img7} alt="Sev img" />}
            name={"Severus Snape"}
            position={"Manager @ Slytherin"}
          />
        </div>
      </div>
    </>
  );
};

export default Enterprice;
