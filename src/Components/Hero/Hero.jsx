import Styles from "/src/Components/Hero/Hero.module.css";
import Btn1 from "../Buttons/Btn1";
import Btn2 from "../Buttons/Btn2";
import { Link } from "react-router-dom";
import "animate.css";
import herographic from "../../assets/hero-graphics.png";

const Hero = () => {
  return (
    <>
      <div className={Styles.hero}>
        <div className={Styles.hero_wripper}>
          <div
            className={`${Styles.hero_content} ${Styles.hero_content1} animate__animated animate__fadeIn`}
          >
            <h1 className={Styles.hero_title}>
              Save time by building fast with Boldo Template
            </h1>
            <p className={Styles.hero_description}>
              Securing funds for B2B iPad partnership with a first-mover
              advantage, emphasizing innovation, successful deployments, and
              confidentiality through a handshake with the buyer.
            </p>
            <div className={Styles.hero_btns}>
              <Link to="/login">
                <Btn2 value={"Buy Template"} />
              </Link>
              <Link to="/about">
                <Btn1 />
              </Link>
            </div>
          </div>
          <div
            className={`${Styles.hero_content} ${Styles.hero_content2} animate__animated animate__fadeIn`}
          >
            <img src={herographic} alt="herographic" className="img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
