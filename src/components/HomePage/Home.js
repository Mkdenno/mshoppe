import React from "react";
import image from "./home-image1.jpg";
import { Link } from "react-router-dom";
import "./home.css";

import SideBar from "../SideBar";
import { ProSidebarProvider } from 'react-pro-sidebar';
import About from "../About";
import Contact from "../Contact";
import SocialFollow from "../SocialFollow";
export default function Home({
  user,
  amazon,
  ebay,
  hideContent,
  setHideContent,
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
          <div className=" container container-fluid my-1  p-5 ">
            <div className="row homethings">
                <div className="col-4 col-lg-6 pt-3">
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
              <div className="col-7 col-lg-4 mt-3 pt-xs-4">
                <img src={image} className="img-fluid" alt="meet -up" />
              </div>
            </div>
          </div>
          <About />
          <Contact/>
          <SocialFollow />
          
          {/* <Route path="/search" element={<Search />} /> */}
        </div>
      );
    } else {
      return (
        <div>
          <div>
            <div className=" container container-fluid my-1  p-5 ">
              <div className="row homethings">
                <div className="col-4 col-lg-6 pt-3">
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
                      <Link to="/signup" style={colorTxt}>
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
          <About/>
          <Contact/>
          <SocialFollow />
        </div>
      );
    }
  } else {
    return (
      <>
        <ProSidebarProvider>
          <SideBar amazon={amazon} ebay={ebay} />

          
        </ProSidebarProvider>
      </>
    );
  }
}
