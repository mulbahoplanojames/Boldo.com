import React, { useState, useEffect } from "react";
import "/src/Components/Navigation/Navbar.css";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  const [navLinksStyle, setNavLinksStyle] = useState({ top: "90px" });
  const [navLinksStyle2, setNavLinksStyle2] = useState({ top: "-400px" });

  const handleHideMenu = () => {
    setNavLinksStyle({ top: "-400px" });
  };

  useEffect(() => {
    const hideMenu = document.querySelector(".hideMenu");
    hideMenu.addEventListener("click", handleHideMenu);

    return () => {
      hideMenu.removeEventListener("click", handleHideMenu);
    };
  }, []);

  const handleShowMenu = () => {
    setNavLinksStyle2({ top: "90px" });
  };

  useEffect(() => {
    const showMenu = document.querySelector(".showMenu");
    showMenu.addEventListener("click", handleShowMenu);

    return () => {
      showMenu.removeEventListener("click", handleShowMenu);
    };
  }, []);

  return (
    <>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo" className="img" />
          </Link>
        </div>
        <div className="nav_links" style={(navLinksStyle, navLinksStyle2)}>
          <RxCross2 className="hideMenu" onClick={handleHideMenu} />
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
              <button className="nav_btn">Log in</button>
            </Link>
          </ul>
        </div>
        <MdMenu className="showMenu" onClick={handleShowMenu} />
      </nav>
    </>
  );
};

export default Navbar;
