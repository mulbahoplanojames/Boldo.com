import { useState } from "react";
import Classes from "/src/Layout/Navigation/Navbar.module.css";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Logo from "/src/assets/Logo.png";
import { navLinks } from "../../Constant/Constant";

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
        <Link to={"/"} className={Classes.logo}>
          <img src={Logo} alt="" className={Classes.img} />
        </Link>

        <MdMenu className={Classes.showMenu} onClick={showMenu} />

        <div className={Classes.nav_links} style={navLinkStyle}>
          <menu>
            {navLinks.map((navlink) => {
              return (
                <li key={navlink.label}>
                  <Link to={navlink.href} onClick={hideMenu}>
                    {navlink.label}
                  </Link>
                </li>
              );
            })}
            <Link to="/login" onClick={hideMenu}>
              <button className={Classes.nav_btn}>Log in</button>
            </Link>
          </menu>

          <RxCross2 className={Classes.hideMenu} onClick={hideMenu} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
