// src/components/Slider.js
import React from 'react';
import './Slider.css'; // Импортируем стили для слайдера

const Slider = () => {
  const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
  ];

  return (
    <div className="slider">
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Slide ${index + 1}`} />
      ))}
    </div>
  );
};

export default Slider;
