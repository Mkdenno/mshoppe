import React from "react";
import "./search.css"

function Ebay({product}) {

  const { name, thumbnail, price,link } = product;
  return (
    <>
      <div className="card-product card">
        <img src={thumbnail} alt="Phone" />
        <div>
          <p>Name: {name}</p>

          <p>Price: {price}</p>
          <div className="searchbtn">
          <a href={link} _target>ORDER</a>
          </div>
        </div>

      </div>
    </>
  );
}

export default Ebay;