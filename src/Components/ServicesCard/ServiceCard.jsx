import "/src/Components/ServicesCard/ServiceCard.css";
import { BiRightArrowAlt } from "react-icons/bi";

const ServiceCard = (props) => {
  const { card_head, card_title, card_description } = props;

  return (
    <>
      <div className="service_card_wripper">
        <div className="card_head">{card_head}</div>
        <div className="card_body">
          <h2 className="body_title">{card_title}</h2>
          <p className="body_description">{card_description}</p>
          <p className="link">
            <a href="/" className="explore">
              Explore Page
            </a>
            <BiRightArrowAlt className="arrow" />
          </p>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
