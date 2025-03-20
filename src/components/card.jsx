import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="card" onClick={handleClick} style={{ cursor: "pointer" }}>
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
        <button 
          className="card-button" 
          onClick={(e) => { e.stopPropagation(); alert("Added to cart!"); }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
