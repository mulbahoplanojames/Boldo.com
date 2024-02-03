import { useState } from "react";
import Styles from "/src/Layout/Navigation/Navbar.module.css";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const showMenu = () => {
    setMenuVisibility(true);
  };

  const hideMenu = () => {
    setMenuVisibility(false);
  };

  const navLinkStyle = {
    top: isMenuVisible ? "90px" : "-400px",
  };

  return (
    <>
      <nav>
        <div className={Styles.logo}>
          <Link to="/">
            <img src={Logo} alt="Logo" className={Styles.img} />
          </Link>
        </div>
        <MdMenu className={Styles.showMenu} onClick={showMenu} />
        <div className={Styles.nav_links} style={navLinkStyle}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <Link to="/login">
              <button className={Styles.nav_btn}>Log in</button>
            </Link>
          </ul>

          <RxCross2 className={Styles.hideMenu} onClick={hideMenu} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
