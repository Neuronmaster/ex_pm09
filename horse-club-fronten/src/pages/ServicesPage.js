// src/pages/ServicesPage.js
import React from 'react';
import ServiceItem from '../components/ServiceItem';

const services = [
  { id: 1, name: 'Урок верховой езды', price: 1000, description: 'Описание услуги' },
  { id: 2, name: 'Аренда конюшни', price: 500, description: 'Описание услуги' },
  // Добавьте остальные услуги...
];

const ServicesPage = () => {
  return (
    <div>
      <h2>Наши услуги</h2>
      <div>
        {services.map(service => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
