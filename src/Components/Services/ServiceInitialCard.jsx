import React from "react";
import "/src/Components/Services/ServiceInitialCard.css";
import { BiRightArrowAlt } from "react-icons/bi";

const ServiceInitialCard = (props) => {
  return (
    <>
      <div className="service_card_wripper">
        <div className="card_head">{props.card_head}</div>
        <div className="card_body">
          <h2 className="body_title">{props.card_title}</h2>
          <p className="body_description">{props.card_description}</p>
          <p className="link">
            <a href="/">Explore Page</a>
            <BiRightArrowAlt className="arrow" />
          </p>
        </div>
      </div>
    </>
  );
};

export default ServiceInitialCard;
