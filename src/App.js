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
// import Search from "./components/Search";

function App() {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("jwt");

  const [hideContent, setIsHideContent] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [amazon, setAmazon] = useState([]);
  const [ebay, setEbay] = useState([]);

  const amazonOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5970fc4886msh928284f8d99bbbfp184ca1jsn8771bf837182",
      "X-RapidAPI-Host": "amazon23.p.rapidapi.com",
    },
  };

  const ebayOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "32f8f29c8bmsh4f427a649a705d0p15fff3jsn83663d512f81",
      "X-RapidAPI-Host": "ebay-data-scraper.p.rapidapi.com",
    },
  };

  const getProducts = () => {
    fetch(
      `https://amazon23.p.rapidapi.com/product-search?query=${searchTerm}&country=US`,
      amazonOptions
    )
      .then((res) => res.json())
      .then((data) => {
        setAmazon(data.result);
        console.log(data.result);
      }).catch((err) => console.log(err));

    fetch(
      `https://ebay-data-scraper.p.rapidapi.com/products?page_number=1&product_name=${searchTerm}%20ink&country=canada`,
      ebayOptions
    )
      .then((res) => res.json())
      .then((data) => {
        setEbay(data);
        console.log(data);
      });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setIsHideContent(false)
    getProducts();
  };

  useEffect(() => {
    // auto-login
    fetch("http://localhost:3000/profile").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div className="App">
      <Navbar
        setUser={setUser}
        user={user}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleOnSubmit={handleOnSubmit}
      />
      {user ? (
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                user={user}
                amazon={amazon}
                ebay={ebay}
                hideContent={hideContent}
                setHideContent={setIsHideContent}
              />
            }
          />
          {/* <Route exact path="/" element={<Search user={user} />} /> */}
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route
            exact
            path="/"
            element={
              <Home
                amazon={amazon}
                ebay={ebay}
                hideContent={hideContent}
                setHideContent={setIsHideContent}
              />
            }
          />
          {/* <Route exact path="/search" element={<Search/>} /> */}
        </Routes>
      )}
      <Routes>
        <Route exact path="/about" element={<About />} />
      </Routes>

      <Footer />
      <SocialFollow />
    </div>
  );
}
export default App;
