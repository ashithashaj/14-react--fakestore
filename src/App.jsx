import React, { useState, useEffect } from "react";
import ProductCard from "./components/card";
import "./App.css";
import Navbar from "./components/navbar";
import Carousel from "./components/carousal";
import Footer from "./components/footer";
const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="homepage">
      <Navbar/>
      <Carousel images={["/slide1.webp", "/slide2.webp", "/slide3.jpg"]} />
      
      <h1 className="title">Our Products</h1>
      <div style={{ padding: " 20px 0" }}>
        {loading ? (
          <p className="loading">Loading...</p>
        ) : (
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
