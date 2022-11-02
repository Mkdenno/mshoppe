import React, { useState } from "react";
import image from "./home-image1.jpg";
import { Link } from "react-router-dom";
import "./home.css";

import SideBar from "../SideBar";
import { ProSidebarProvider } from "react-pro-sidebar";
import About from "../About";
import Contact from "../Contact";
import SocialFollow from "../SocialFollow";
export default function Home({
  user,
  amazon,
  ebay,
  walmat,
  hideContent,
  setHideContent,
  isLoading,
  setIsLoading,
}) {
  const txt = {
    color: "red",
    fontWeight: "bold",
  };
  const colorTxt = {
    color: "white",
    textDecoration: "none",
  };

  if (hideContent) {
    if (user) {
      return (
        <div>
          <div>
            <div className=" container">
              <div className="row">
                <div className="col-md-6">
                  <div className="font-weight-normal moshopper ">
                    <h1
                      className="display-6 pt-3 "
                      style={{ fontWeight: "bolder" }}
                    >
                      Get Your Favourite gadgets at{" "}
                      <span style={txt}>MoShopper</span>
                      <span style={txt}> Or Order Online.</span>
                    </h1>
                  </div>
                  <div className="mb-3 paragraph">
                    <p className="homepg">
                      We have products from different sites such as Amazon,
                      Alibaba, E-bay and spotify
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mt-3 p-5">
                  <img src={image} className="img-fluid" alt="meet -up" />
                </div>
              </div>
            </div>
          </div>
          <About />
          <Contact />
          <SocialFollow />
        </div>
      );
    } else {
      return (
        <div>
          <div>
            <div className=" container">
              <div className="row">
                <div className="col-md-6">
                  <div className="font-weight-normal moshopper ">
                    <h1
                      className="display-6 pt-3 "
                      style={{ fontWeight: "bolder" }}
                    >
                      Get Your Favourite gadgets at{" "}
                      <span style={txt}>MoShopper</span>
                      <span style={txt}> Or Order Online.</span>
                    </h1>
                  </div>
                  <div className="mb-3 paragraph">
                    <p className="homepg">
                      We have products from different sites such as Amazon,
                      Alibaba, E-bay and spotify
                    </p>
                  </div>

                  <div className="my-4">
                    <Link to="/signup">
                      <button type="button" className="btn btn-lg getbutton">
                        Get Started
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 mt-3 p-5">
                  <img src={image} className="img-fluid" alt="meet -up" />
                </div>
              </div>
            </div>
          </div>
          <About />
          <Contact />
          <SocialFollow />
        </div>
      );
    }
  } else {
    return (
      <>
        <ProSidebarProvider>
          <SideBar
            amazon={amazon}
            ebay={ebay}
            walmat={walmat}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        </ProSidebarProvider>
      </>
    );
  }
}
