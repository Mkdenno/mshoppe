import React from "react";
import "./search.css";

const Search = () => {
  return (
    <>
    <section id="services"  className="services">
    <div className="headsearch">
    <h4 className="head">Services</h4>
    <div class="searchcards   container" >
      {/* Alibaba */}
      <div class="" >
        <h3 class="sitecolor text-center">ALIBABA</h3>
        <div class="card">
          <img class="card-img-top" src="./images/phone2.jpeg" alt="Phone" />
          <div class="card-body" data-testid="search-1">
            <p class="card-title">Price: 23000</p>
            <p class="card-title">Rating: 4.7 ( in record of 10 people.)</p>
            <p class="card-title">Delivery fees : 200</p>
            <p class="card-title">Payment : pay before delivery</p>
            <div class="searchbtn">
              <button>ORDER</button>
            </div>
          </div>
        </div>
      </div>
      {/* Amazone */}
      <div class="">
        <h3 class="sitecolor text-center">AMAZON</h3>
        <div class="card">
          <img class="card-img-top" src="./images/phone2.jpeg" alt="Phone" />
          <div class="card-body">
            <p class="card-title">Price: 23000</p>
            <p class="card-title">Rating: 4.7 ( in record of 10 people.)</p>
            <p class="card-title">Delivery fees : 200</p>
            <p class="card-title">Payment : pay before delivery</p>
            <div class="searchbtn">
              <button>ORDER</button>
            </div>
          </div>
        </div>
      </div>
      {/* E-bay */}
      <div class="">
        <h3 class="sitecolor text-center ">E-BAY</h3>
        <div class="card">
          <img class="card-img-top" src="./images/phone2.jpeg" alt="Phone" />
          <div class="card-body">
            <p class="card-title">Price: 23000</p>
            <p class="card-title">Rating: 4.7 ( in record of 10 people.)</p>
            <p class="card-title">Delivery fees : 200</p>
            <p class="card-title">Payment : pay before delivery</p>
            <div class="searchbtn">
              <button>ORDER</button>
            </div>
          </div>
        </div>
      </div>
      {/* Shoppify */}
      <div class="">
        <h3 class="sitecolor text-center">SHOPIFY</h3>
        <div class="card">
          <img class="card-img-top" src="./images/phone2.jpeg" alt="Phone" />
          <div class="card-body">
            <p class="card-title">Price: 23000</p>
            <p class="card-title">Rating: 4.7 ( in record of 10 people.)</p>
            <p class="card-title">Delivery fees : 200</p>
            <p class="card-title">Payment : pay before delivery</p>
            <div class="searchbtn">
              <button>ORDER</button>
            </div>
          </div>
        </div>
      </div>

      </div>
      </div>
      </section>
    </>
  );
};

export default Search;
