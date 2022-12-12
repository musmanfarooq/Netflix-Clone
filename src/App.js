import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./Components/Screens/HomeScreen";
import { Routes, Route } from "react-router-dom";
import LoginScreen from "./Components/Screens/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./Components/Screens/ProfileScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <div className="app">
      {!user ? (
        <LoginScreen />
      ) : (
        <div>
          <Routes>
            <Route exact path="/" element={<HomeScreen />}></Route>
            <Route path="/profile" element={<ProfileScreen />}></Route>
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
