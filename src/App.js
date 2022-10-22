import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";

import Home from "./components/HomePage/Home";

export default function App() {
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
    <div>
      {/* <Navbar setUser={setUser} user={user} /> */}
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        
        
      </Routes>
    </div>
  );
}