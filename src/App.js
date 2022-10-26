import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/HomePage/Home";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./components/About";

function App() {
  const [user, setUser] = useState(null);
  const token =localStorage.getItem("jwt");
  useEffect(() => {
    // auto-login
    fetch("http://localhost:3000/profile").then((r) => {
      if (r.ok) {
        r.json().then((user) => console.log(user));
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

<Route exact path="/" element={<Home user={user} />} />

          </Routes>

        ):
        (

          <Routes>
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route exact path="/" element={<Home />} />

          </Routes>
        )
      }
     <Routes>
     <Route exact path="/about" element={<About/>} />

     </Routes>
      
      <Footer />


    </div>
  );
}
export default App;