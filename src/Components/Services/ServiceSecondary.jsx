import React from "react";
import "/src/Components/Services/ServicesSecondary.css";
import { FaLeaf, FaEye, FaStarOfDavid } from "react-icons/fa";
import img4 from "../../assets/2A.png";

const ServiceSecondary = () => {
  return (
    <>
      <div className="connect_customer">
        <div className="connect_customer_wriper">
          <div className="customer_content ">
            <img src="src/assets/2A.png" alt="customer Img" />
          </div>
          <div className="customer_content content_two">
            <h1 className="customer_title">
              We connect our customers with <br /> the best, and help them keep{" "}
              <br /> up-and stay open.
            </h1>
            <p className="customer_description">
              <FaLeaf className="icon" />
              <span>We connect our customers with the best.</span>
            </p>
            <p className="customer_description">
              <FaEye className="icon" />
              <span>Advisor success customer launch party.</span>
            </p>
            <p className="customer_description">
              <FaStarOfDavid className="icon" />
              <span>Business-to-consumer long tail.</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSecondary;
