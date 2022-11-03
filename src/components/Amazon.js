import React from "react";
import "./search.css";

const Amazon = ({ product }) => {
  const { title, thumbnail, price, reviews, url } = product;
  return (
    <>
      <div className="card-product card">
        <img src={thumbnail} alt="Phone" />
        <div >
          <p >Name: {title}</p>

          <p >Price: {price.current_price}</p>
          <p >Rating: {reviews.rating}</p>
          <div className="searchbtn">
            <a  href={url} target='_blank'  >ORDER</a>
          </div>
        </div>

      </div>
    </>
  );
};

export default Amazon;