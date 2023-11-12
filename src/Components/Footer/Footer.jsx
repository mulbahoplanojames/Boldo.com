import React from "react";
import "/src/Components/Footer/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer_content">
          <div className="logo">
            <img src="src/assets/black-logo.png" alt="logo" />
          </div>
          <p className="description">
            Social media validation business model canvas graphical <br /> user
            interface launch party creative facebook iPad twitter.
          </p>
          <p className="copy_right">All right reserved</p>
        </div>
        <div className="footer_content content_two">
            <div className="links">
                <h3 className="title">Landings</h3>
                <p className="link"><a href="/">Home</a></p>
                <p className="link"><a href="/">Products</a></p>
                <p className="link"><a href="/">Services</a></p>
            </div>
            <div className="links">
                <h3 className="title">Company</h3>
                <p className="link"><a href="/">Home</a></p>
                <p className="link"><a href="/">Carrer</a></p>
                <p className="link"><a href="/">Services</a></p>
            </div>
            <div className="links">
                <h3 className="title">Resources</h3>
                <p className="link"><a href="/">Home</a></p>
                <p className="link"><a href="/">Products</a></p>
                <p className="link"><a href="/">Services</a></p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
