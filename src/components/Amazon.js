import React from "react";
import "./search.css";

const Amazon = ({ product }) => {
  const { title, thumbnail, price, reviews } = product;
  return (
    <>
      <div className="card-product card">
        <img src={thumbnail} alt="Phone" />
        <div >
          <p >Name: {title}</p>

          <p >Price: {price.current_price}</p>
          <p >Rating: {reviews.rating}</p>
          <div className="searchbtn">
            <button>ORDER</button>
          </div>
        </div>

      </div>
    </>
  );
};

export default Amazon;