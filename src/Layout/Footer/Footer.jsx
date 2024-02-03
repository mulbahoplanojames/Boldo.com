import Styles from "/src/Layout/Footer/Footer.module.css";

const Footer = () => {
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
              <a href="/" className={Styles.a}>
                Home
              </a>
            </p>
            <p className={Styles.link}>
              <a href="/" className={Styles.a}>
                Products
              </a>
            </p>
            <p className={Styles.link}>
              <a href="/" className={Styles.a}>
                Services
              </a>
            </p>
          </div>
          <div className={Styles.links}>
            <h3 className={Styles.title}>Company</h3>
            <p className={Styles.link}>
              <a href="/" className={Styles.a}>
                Home
              </a>
            </p>
            <p className={Styles.link}>
              <a href="/" className={Styles.a}>
                Carrer
              </a>
            </p>
            <p className={Styles.link}>
              <a href="/" className={Styles.a}>
                Services
              </a>
            </p>
          </div>
          <div className={Styles.links}>
            <h3 className={Styles.title}>Resources</h3>
            <p className={Styles.link}>
              <a href="/" className={Styles.a}>
                Home
              </a>
            </p>
            <p className={Styles.link}>
              <a href="/" className={Styles.a}>
                Products
              </a>
            </p>
            <p className={Styles.link}>
              <a href="/" className={Styles.a}>
                Services
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
