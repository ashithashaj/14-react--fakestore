import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../App.css";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button left" onClick={prevSlide}>&#9665;</button>
      <div className="carousel-wrapper">
        <motion.div
          className="carousel"
          initial={{ x: 0 }}
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {images.map((image, index) => (
            <div className="carousel-item" key={index}>
              <img src={image} alt={`Slide ${index}`} className="carousel-image" />
            </div>
          ))}
        </motion.div>
      </div>
      <button className="carousel-button right" onClick={nextSlide}>&#9655;</button>
    </div>
  );
};

export default Carousel;
