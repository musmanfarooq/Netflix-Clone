import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import "./Signup.css";

const Signup = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        // console.log(authUser);
        console.log("User have Signin");
        alert("Account Created, Signing you in");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then(() => {
        // console.log("login");
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      {!isSignUp ? (
        <div className="signup">
          <h1>Sign in</h1>
          <form>
            <input
              ref={emailRef}
              type="email"
              placeholder="Email Address"
              autoComplete="on"
            />
            <input
              ref={passwordRef}
              type="password"
              placeholder="Password"
              autoComplete="on"
            />
            <button type="submit" onClick={signin}>
              Sign in
            </button>
            <h4>
              <span className="signup__grey">New to Netflix? </span>
              <span
                className="signup__link"
                onClick={() => setIsSignUp(true)}
                type="submit"
              >
                Sign up now.
              </span>
            </h4>
          </form>
        </div>
      ) : (
        <div className="signup">
          <h1>Sign up Now</h1>
          <form>
            <input
              ref={emailRef}
              type="email"
              placeholder="Email Address"
              autoComplete="off"
            />
            <input
              ref={passwordRef}
              type="password"
              placeholder="Password"
              autoComplete="off"
            />
            <button type="submit" onClick={register}>
              Sign up
            </button>
            <h4>
              <span className="signup__grey">Already have an Account? </span>
              <span
                className="signup__link"
                onClick={() => setIsSignUp(false)}
                type="submit"
              >
                Click Here.
              </span>
            </h4>
          </form>
        </div>
      )}
    </div>
  );
};

export default Signup;
