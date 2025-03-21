import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductCard from "./components/card";
import Navbar from "./components/navbar";
import Carousel from "./components/carousal";
import Footer from "./components/footer";
import ProductDetails from "./components/ProductDetails";
import "./App.css";

const Home = () => {
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
      <Navbar />
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
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
