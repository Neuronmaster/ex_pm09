// src/components/ServiceItem.js
import React from 'react';

const ServiceItem = ({ service }) => {
  return (
    <div className="service-item">
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <p>Цена: {service.price} руб.</p>
    </div>
  );
};

export default ServiceItem;
