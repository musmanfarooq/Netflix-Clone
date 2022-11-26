import React, { useEffect, useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [shownavCOlor, setShownavColor] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShownavColor(true);
    } else {
      setShownavColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  return (
    <div className={`nav ${shownavCOlor && `nav__black`}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netfix Logo"
        />

        <img
          className="nav__avatar"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
          alt="Netfix Logo"
        />
      </div>
    </div>
  );
};

export default NavBar;
