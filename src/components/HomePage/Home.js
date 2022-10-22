import React, {  } from "react";
import image from "./home-image1.jpg";
import { Link } from "react-router-dom";
export default function Home({user}) {

  const txt = {
    color: "#B8860B",
    fontWeight: "bold",
  };
  const colorTxt = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <div>
      <div className="container-fluid my-1  p-5 ">
        <div className="row">
          <div className="col-12 col-lg-6 pt-3">
            <div className="mb-3">
              <h3 style={txt} className="">
                WELCOME {user ? user.username : ""} TO MOSHOPPER ONLINE STORE WHERE EVERYTHING IS DISCOUNTED...
                
              </h3>
            </div>
            <div className="font-weight-normal ">
              <h1 className="display-6 pt-3" style={{ fontWeight: "bolder" }}>
                Get Your Favourite gadgets at <span style={txt}>MoShopper</span>.
                Visit Our Shop<span style={txt}> Or Order Online</span>
              </h1>
            </div>
            <div className="">
              <p className="py-3">
                Welcome to MoShopper an E-Commerce system that focuses on both your product durability and the best cost for it.We help you compare prices and understand the best products to purchase.
              </p>
            </div>
            <div className="my-4">
              <button
                type="button"
                className="btn btn-lg"
                style={{
                  border: "none",
                  color: "white",
                  backgroundColor: "#00BFFF",
                  fontSize: "15px",
                  fontWeight: "900",
                }}
              >
                <Link to="/" style={colorTxt}>
                  Explore Products
                </Link>
              </button>
            </div>
          </div>
          <div className="col-10 col-lg-4 mt-3 pt-xs-4">
            <img src={image} className="img-fluid" alt="meet -up" />
          </div>
        </div>
      </div>
    </div>
  );
}