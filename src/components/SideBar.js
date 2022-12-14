import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import Amazon from "./Amazon";
import Ebay from "./Ebay";
import "./SideBar.css";
import Walmat from "./Walmat";

const SideBar = ({ amazon, ebay, walmat, isLoading, setIsLoading }) => {
  const [amazonData, setAmazonData] = useState([]);
  const [ebayData, setEbayData] = useState([]);
  const [walmatData, setWalmatData] = useState([]);

  const [showAmazon, setShowAmazon] = useState(true);
  const [showEbay, setShowEbay] = useState(false);
  const [showWalmat, setShowWalmat] = useState(false);


  const handleOnClickAmazon = () => {
    setIsLoading(false);
    setShowAmazon(true);
    setShowEbay(false);
    setShowWalmat(false);
    setAmazonData(amazon);
  };

  const handleOnClickEbay = () => {
   
    setIsLoading(false);
      setShowEbay(true);
      setShowAmazon(false);
      setShowWalmat(false);
      setEbayData(ebay);
  };

  const handleOnClickWalmat = () => {

    setIsLoading(false);
      setShowWalmat(true);
      setShowAmazon(false);
      setShowEbay(false);
      setWalmatData(walmat);
  };

  return (
    <>
      <div style={{ display: "flex", height: "100%" }}>
        <Sidebar>
          <Menu>
            <MenuItem onClick={handleOnClickAmazon}>
              <span>Amazon</span>{" "}
              <span className="badge text-bg-secondary">{amazon.length}</span>{" "}
            </MenuItem>
            <MenuItem onClick={handleOnClickEbay}>
              <span>Ebay</span>
              <span className="badge text-bg-secondary">
                {ebay.length}
              </span>{" "}
            </MenuItem>
            <MenuItem onClick={handleOnClickWalmat}>
              <span>Walmart</span>
              <span className="badge text-bg-secondary">{walmat.length}</span>
            </MenuItem>
          </Menu>
        </Sidebar>

        <div>
          {isLoading ? (
            <div
              style={{
                fontSize: "3rem",
                margin: "5rem 20rem",
                color: "#D2D2D2",
              }}
            >
              Searching...
            </div>
          ) : (
            <main>
              {showAmazon && <h1>Amazon</h1>}
              <div className="prods">
                {showAmazon &&
                  amazon.map((product) => {
                    return (
                      <Amazon key={product.product_id} product={product} />
                    );
                  })}
              </div>
              {showEbay && <h1>Ebay</h1>}

              <div className="prods">
                {showEbay &&
                  ebayData.map((product) => {
                    return <Ebay key={product.product_id} product={product} />;
                  })}
              </div>
              {showWalmat && <h1>Walmart</h1>}

              <div className="prods">
                {showWalmat &&
                  walmatData.map((product) => {
                    return <Walmat key={product.id} product={product} />;
                  })}
              </div>
            </main>
          )}
        </div>
      </div>
    </>
  );
};

export default SideBar;
