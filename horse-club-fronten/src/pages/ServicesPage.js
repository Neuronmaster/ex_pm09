// src/pages/ServicesPage.js
import React, { useState } from 'react';
import ServiceItem from '../components/ServiceItem';

const services = [
  { id: 1, name: 'Конные прогулки по живописному лесу', price: 1200 },
  { id: 2, name: 'Обучение верховой езде для взрослых и детей от 2-х лет', price: 1500 },
  { id: 3, name: 'Фотосессии с лошадьми', price: 1000 },
  { id: 4, name: 'Экскурсии на конюшню', price: 800 },
  { id: 5, name: 'Подарочные сертификаты', price: [1000, 2000] },
];

const ServicesPage = () => {
  const [filteredServices, setFilteredServices] = useState(services);

  // Пример фильтрации по цене (например, ниже 1500)
  const filterServices = (maxPrice) => {
    setFilteredServices(services.filter(service => service.price <= maxPrice));
  };

  return (
    <div className="services-page">
      <h2>Наши услуги</h2>
      <button onClick={() => filterServices(1500)}>Показать услуги до 1500 руб.</button>
      <div className="services-list">
        {filteredServices.map(service => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
