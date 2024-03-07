import { Link } from "react-router-dom";
import Styles from "/src/Layout/Footer/Footer.module.css";

const Footer = () => {
  //! This function help to navigate the user to the top of the page when they click on the link
  const handleScroll = () => {
    window.scrollTo({ top: 0, left: 0 });
  };

  return (
    <>
      <div className={Styles.footer}>
        <div className={Styles.footer_content}>
          <div className={Styles.logo}>
            <img src="src/assets/black-logo.png" alt="logo" />
          </div>
          <p className={Styles.description}>
            Social media validation business model canvas graphical <br /> user
            interface launch party creative facebook iPad twitter.
          </p>
          <p className={Styles.copy_right}>All right reserved</p>
        </div>
        <div className={`${Styles.footer_content} ${Styles.content_two}`}>
          <div className={Styles.links}>
            <h3 className={Styles.title}>Landings</h3>
            <p className={Styles.link}>
              <Link to="/" className={Styles.lin} onClick={handleScroll}>
                Home
              </Link>
            </p>
            <p className={Styles.link}>
              <Link to="/about" className={Styles.lin} onClick={handleScroll}>
                About
              </Link>
            </p>
            <p className={Styles.link}>
              <Link to="/blogs" className={Styles.lin} onClick={handleScroll}>
                Blogs
              </Link>
            </p>
          </div>
          <div className={Styles.links}>
            <h3 className={Styles.title}>Company</h3>
            <p className={Styles.link}>
              <Link to="/login" className={Styles.lin} onClick={handleScroll}>
                Log in
              </Link>
            </p>
            <p className={Styles.link}>
              <Link to="/" className={Styles.lin} onClick={handleScroll}>
                Carrer
              </Link>
            </p>
            <p className={Styles.link}>
              <Link to="/" className={Styles.lin} onClick={handleScroll}>
                Services
              </Link>
            </p>
          </div>
          <div className={Styles.links}>
            <h3 className={Styles.title}>Resources</h3>
            <p className={Styles.link}>
              <Link to="/" className={Styles.lin} onClick={handleScroll}>
                Home
              </Link>
            </p>
            <p className={Styles.link}>
              <Link to="/" className={Styles.lin} onClick={handleScroll}>
                Products
              </Link>
            </p>
            <p className={Styles.link}>
              <Link to="/" className={Styles.lin} onClick={handleScroll}>
                Services
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
