// src/components/ServiceItem.js
import React from 'react';

const ServiceItem = ({ service }) => {
  return (
    <div className="service-item">
      <h3>{service.name}</h3>
      <p>Цена: {Array.isArray(service.price) ? service.price.join(' руб. или ') : service.price} руб.</p>
    </div>
  );
};

export default ServiceItem;