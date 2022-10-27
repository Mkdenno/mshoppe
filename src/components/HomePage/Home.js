import React from "react";
import image from "./home-image1.jpg";
import { Link } from "react-router-dom";
import './home.css';
export default function Home({ user }) {
  const txt = {
    color: "red",
    fontWeight: "bold",
  };
  const colorTxt = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <div>
      <div className=" container container-fluid my-1  p-5 ">
        <div className="row">
          <div className="col-5 col-lg-6 pt-3">
            <div className="font-weight-normal ">
              <h1 className="display-6 pt-3 moshopper" style={{ fontWeight: "bolder" }}>
                Get Your Favourite gadgets at <span style={txt}>MoShopper</span>
                <span style={txt}> Or Order Online.</span>
              </h1>
            </div>
            <div className="mb-3 paragraph">
              <p className="t">We have products from different sites such as Amazon, Alibaba, E-bay and spotify</p>
            </div>

            <div className="my-4 btn">
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
                <Link to="/register" style={colorTxt}>
                  Get Started
                </Link>
              </button>
            </div>
          </div>
          <div className="col-7 col-lg-4 mt-3 pt-xs-4">
            <img src={image} className="img-fluid" alt="meet -up" />
          </div>
        </div>
      </div>
    </div>
  );
}
