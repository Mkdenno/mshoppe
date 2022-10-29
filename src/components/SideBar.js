import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import Amazon from "./Amazon";
import Ebay from "./Ebay";
import "./SideBar.css";

const SideBar = ({ amazon, ebay }) => {

    const handleOnClick = () => {
        
    }
  return (
    <>
      <div style={{ display: "flex", height: "100%" }}>
        <Sidebar>
          <Menu>
            <MenuItem onClick={handleOnClick}><span >Amazon</span>  <span className="badge text-bg-secondary">8</span> </MenuItem>
            <MenuItem onClick={handleOnClick}> <span >Ebay</span>  <span className="badge text-bg-secondary" >8</span> </MenuItem>
          </Menu>
        </Sidebar>
        <main>
          <h1 style={{ marginStart: "5rem" }}>Amazon</h1>
          <div className="prods">
            {amazon.map((product) => {
              return <Amazon key={product.product_id} product={product} />;
            })}
          </div>
          <h1 style={{ marginStart: "5rem" }}>Ebay</h1>
          <div className="prods">
            {ebay.map((product) => {
              return <Ebay key={product.product_id} product={product} />;
            })}
          </div>
        </main>
      </div>
      ;
    </>
  );
};

export default SideBar;
