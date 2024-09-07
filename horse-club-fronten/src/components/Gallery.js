// src/components/Gallery.js
import React from 'react';
import './Gallery.css'; // Подключаем стили для галереи

const Gallery = () => {
  // Массив с путями к изображениям с image4.jpg по image23.jpg
  const images = Array.from({ length: 20 }, (_, i) => `/images/image${i + 4}.jpg`);

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Смотрите нашу фотогалерею</h2> {/* Добавляем заголовок */}
      <div className="gallery">
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`Gallery Image ${index + 4}`} className="gallery-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
