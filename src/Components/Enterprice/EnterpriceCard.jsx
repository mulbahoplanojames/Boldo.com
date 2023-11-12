import React from "react";
import "/src/Components/Enterprice/Enterpeics.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const EnterpriceCard = (props) => {
  return (
    <>
      <div className="card_wripper">
        <p className="description">{props.descrption}</p>

        <div className="details">
          <div className="img">{props.img}</div>
          <div className="person">
            <p className="name">{props.name}</p>
            <p className="position">{props.position}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnterpriceCard;

// Style are in the Enterprice.css
