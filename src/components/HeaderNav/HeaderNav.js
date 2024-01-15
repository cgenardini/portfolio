import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { PathClassNameContext } from "../../context/PathClassNameContext";

import "./HeaderNav.css";

function HeaderNav({ logo }) {
  const [isClicked, setIsClicked] = React.useState(false);
  const [visible, setVisible] = React.useState("hidden");
  const { pathClass } = React.useContext(PathClassNameContext);

  const handleOpenNav = () => {
    if (isClicked) {
      setIsClicked(false);
      setVisible("hidden");
    } else {
      setIsClicked(true);
      setVisible("visible");
    }
  };

  return (
    <div className={`nav nav__${pathClass}`}>
      <Link to="/" className="nav__link">
        <img alt="logo image" src={logo} className="nav__logo"></img>
      </Link>

      <ul className={`nav__list nav__list-${visible}`}>
        <Link to="/contact" className={`nav__link nav__link_${pathClass}`}>
          <li className="nav__list-item">Say Hello</li>
        </Link>
        <Link to="/about" className={`nav__link nav__link_${pathClass}`}>
          <li className="nav__list-item">About</li>
        </Link>
        <Link to="/projects" className={`nav__link nav__link_${pathClass}`}>
          <li className="nav__list-item">Projects</li>
        </Link>
      </ul>
      <button
        className={`nav__menu-button nav__menu-button_${pathClass} ${
          isClicked &&
          `nav__menu-button_clicked nav__menu-button_clicked_${pathClass}`
        }`}
        onClick={handleOpenNav}
      ></button>
    </div>
  );
}

export default HeaderNav;
