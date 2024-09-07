// src/pages/ServicesPage.js
import React from 'react';
import Gallery from '../components/Gallery';
import './ServicesPage.css'; // Подключаем стили для страницы услуг

const services = [
  { id: 1, name: 'Конные прогулки по живописному лесу', price: 1200 },
  { id: 2, name: 'Обучение верховой езде для взрослых и детей от 2-х лет', price: 1500 },
  { id: 3, name: 'Фотосессии с лошадьми', price: 1000 },
  { id: 4, name: 'Экскурсии на конюшню', price: 800 },
  { id: 5, name: 'Подарочные сертификаты', price: [1000, 2000] },
];

const ServicesPage = () => {
  return (
    <div className="services-page">
      <h2>Наши услуги</h2>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <h3>{service.name}</h3>
            <p>Цена: {Array.isArray(service.price) ? service.price.join(' руб. или ') : service.price} руб.</p>
          </li>
        ))}
      </ul>
      <Gallery />
    </div>
  );
};

export default ServicesPage;
