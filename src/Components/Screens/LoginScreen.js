import React, { useState } from "react";
import "./LoginScreen.css";
import Signup from "./Signup";
import netflixlogo from '../../Images/netflix logo.png';


const LoginScreen = () => {
  const [signin, setSignin] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src={netflixlogo}
          alt="netflix logo"
        />
        <button className="loginScreen__button" onClick={() => setSignin(true)}>
          Sign in
        </button>
        <div className="loginScreen__gradient"></div>
      </div>
      <div className="loginScreen__body">
        {signin ? (
          <Signup />
        ) : (
          <div>
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="loginScreen__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  className="loginScreen__getstarted"
                  onClick={() => setSignin(true)}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
