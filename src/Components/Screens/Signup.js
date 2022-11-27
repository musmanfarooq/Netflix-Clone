import React, { useRef } from "react";
import { auth } from "../../firebase";
import "./Signup.css";

const Signup = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        // console.log(authUser);
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
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
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
          <span className="signup__link" onClick={register} type="submit">
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default Signup;
