import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import "../App.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  if (loading) return <p className="loading">Loading...</p>;

  return (
    <div>
      <Navbar />
      <div className="product-details">
        <div className="product-img">
         <img src={product.image} alt={product.title} />
        </div>
        <div className="details">
          <h1>{product.title}</h1>

          <div className="det-view"><p className="category">{product.category}</p>
          <p className="price">${product.price}</p>
          <p className="description">{product.description}</p>
          <p className="descriptions">{product.rating.rate} <img className="star-img" src="/star.svg" alt="" /></p>
          <p className="description">{product.rating.count}</p></div>
        </div>
      </div> 
      <Footer />
    </div>
  );
};

export default ProductDetails;

