import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/HomePage/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const [user, setUser] = useState(null);
  // const token = localStorage.getItem("jwt");
  console.log(user);

  const [hideContent, setIsHideContent] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [amazon, setAmazon] = useState([]);
  const [ebay, setEbay] = useState([]);
  const [walmat, setWalmat] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const amazonOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "dc78779a39mshb82d92679ac254dp10cf89jsn130914269d42",
      "X-RapidAPI-Host": "amazon23.p.rapidapi.com",
    },
  };

  const ebayOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "dc78779a39mshb82d92679ac254dp10cf89jsn130914269d42",
      "X-RapidAPI-Host": "ebay-data-scraper.p.rapidapi.com",
    },
  };

  const walmartoptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "dc78779a39mshb82d92679ac254dp10cf89jsn130914269d42",
      "X-RapidAPI-Host": "axesso-walmart-data-service.p.rapidapi.com",
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
        setIsLoading(false);

        // console.log(data.result)
      })
      .catch((err) => console.log(err));

    fetch(
      `https://ebay-data-scraper.p.rapidapi.com/products?page_number=1&product_name=${searchTerm}%20ink&country=canada`,
      ebayOptions
    )
      .then((res) => res.json())
      .then((data) => {
        setEbay(data);
        // console.log(data)
      });

    fetch(
      `https://axesso-walmart-data-service.p.rapidapi.com/wlm/walmart-search-by-keyword?keyword=${searchTerm}&page=1&sortBy=best_match`,
      walmartoptions
    )
      .then((res) => res.json())
      .then((data) => {
        setWalmat(
          data.item.props.pageProps.initialData.searchResult.itemStacks[0].items
        );
        console.log(
          data.item.props.pageProps.initialData.searchResult.itemStacks[0].items
        );
      });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setIsHideContent(false);
    setIsLoading(true);
    getProducts();
  };

  useEffect(() => {
    // auto-login
    fetch("https://mshoppe.herokuapp.com/profile").then((r) => {
      if (r.ok) {
        r.json().then((data) => setUser(data));
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
        setIsHideContent={setIsHideContent}
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
                walmat={walmat}
                hideContent={hideContent}
                setHideContent={setIsHideContent}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            }
          />
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
                walmat={walmat}
                hideContent={hideContent}
                setHideContent={setIsHideContent}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            }
          />
        </Routes>
      )}
    </div>
  );
}
export default App;
