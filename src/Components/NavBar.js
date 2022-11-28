import React, { useEffect, useState } from "react";
import "./NavBar.css";
import netflixlogo from "../Images/netflix logo.png";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [shownavCOlor, setShownavColor] = useState(false);
  const history = useNavigate();

  // function signoutHandler(props) {
  //   auth.signOut();
  //   console.log("Signout");
  // }

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
        <img className="nav__logo" src={netflixlogo} alt="Netfix Logo" />

        <img
          onClick={() => history("/profile")}
          className="nav__avatar"
          src="http://occ-0-1242-64.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABREqJW8jJAoSQksyGaNcnbGKith54H6eyxJn--GI-vumuX4-378QiUW_AarRAATIHPEtYpAJCcBU6vwAIRFUE0HevMe-lHD4mIH6.png?r=e31"
          alt="Netfix Logo"
        />
        <button className="nav__signout">Sign Out</button>
      </div>
    </div>
  );
};

export default NavBar;
