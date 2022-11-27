import React, { useEffect, useState } from "react";
import "./App.css";
import HomeScreen from "./Components/Screens/HomeScreen";
import { Routes, Route } from "react-router-dom";
import LoginScreen from "./Components/Screens/LoginScreen";
import { auth } from "./firebase";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log("is login");
        setUser("login");
      } else {
        console.log("islogout");
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div className="app">
      {!user ? (
        <LoginScreen />
      ) : (
        <div>
          <Routes>
            <Route exact path="/" element={<HomeScreen />}></Route>
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
