import React from "react";
import "../App.css"

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title" title={product.title}>{product.title}</h2>
       
        <div className="card-info">
          <p className="card-price">${product.price}</p>
          <div className="card-rating">
            <span className="star">★</span>
            <span>{product.rating.rate} ({product.rating.count} reviews)</span>
          </div>
        </div>
        <button className="card-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
