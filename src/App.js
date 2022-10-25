import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";
import SocialFollow from "./components/SocialFollow";

import Navbar from "./components/Navbar";
import Home from "./components/HomePage/Home";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./components/About";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div className="App">
      <Navbar setUser={setUser} user={user} />
      {
        user?
        (
          <Routes>

<Route path="/" element={<Home user={user} />} />

          </Routes>

        ):
        (

          <Routes>
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup />} />
          </Routes>
        )
      }

      <About/>
      <Footer />
      <SocialFollow />


    </div>
  );
}
export default App;
