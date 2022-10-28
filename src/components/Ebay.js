import React from "react";
import "./search.css"

function Ebay({product}) {

  const { name, thumbnail, price } = product;
  return (
    <>
      <div className="card-product card">
        <img src={thumbnail} alt="Phone" />
        <div>
          <p>Name: {name}</p>

          <p>Price: {price}</p>
          <div className="searchbtn">
            <button>ORDER</button>
          </div>
        </div>

      </div>
    </>
  );
}

export default Ebay;