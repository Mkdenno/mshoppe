import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/HomePage/Home";
import Search from "./components/Search";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Search />
      <Footer/>
    </div>
  );
}
export default App;
