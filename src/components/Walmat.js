import React from "react";
import "./search.css";

const Walmat = ({ product }) => {
   const { name, image, price, rating } = product;

  return (
    <>
      <div className="card-product card">
        <img src={image} alt="Phone" />
        <div >
          <p >Name: {name}</p>

          <p >Price: {price}</p>
          <p >Rating: {rating.averageRating}</p>
          <div className="searchbtn">
            <button>ORDER</button>
          </div>
        </div>

      </div>
    </>
  );
};

export default Walmat;