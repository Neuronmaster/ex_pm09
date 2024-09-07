// src/pages/ServicesPage.js
import React, { useState } from 'react';
import Gallery from '../components/Gallery';
import './ServicesPage.css'; // Подключаем стили для страницы услуг

const services = [
  { id: 1, name: 'Конные прогулки по живописному лесу', type: 'прогулки', price: 1200 },
  { id: 2, name: 'Обучение верховой езде для взрослых и детей от 2-х лет', type: 'обучение', price: 1500 },
  { id: 3, name: 'Фотосессии с лошадьми', type: 'фотосессии', price: 1000 },
  { id: 4, name: 'Экскурсии на конюшню', type: 'экскурсии', price: 800 },
  { id: 5, name: 'Подарочные сертификаты', type: 'сертификаты', price: [1000, 2000] },
];

const ServicesPage = () => {
  const [filteredServices, setFilteredServices] = useState(services);
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [type, setType] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc');

  // Фильтрация по типу услуги
  const filterByType = (type) => {
    setType(type);
    applyFilters(type, priceRange, sortOrder);
  };

  // Фильтрация по диапазону цен
  const filterByPrice = (range) => {
    setPriceRange(range);
    applyFilters(type, range, sortOrder);
  };

  // Сортировка
  const sortServices = (order) => {
    setSortOrder(order);
    applyFilters(type, priceRange, order);
  };

  // Применение всех фильтров и сортировки
  const applyFilters = (type, range, order) => {
    let filtered = services.filter((service) => {
      const price = Array.isArray(service.price) ? service.price[0] : service.price;
      const inRange = price >= range[0] && price <= range[1];
      const matchesType = type === 'all' || service.type === type;

      return inRange && matchesType;
    });

    if (order === 'asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredServices(filtered);
  };

  return (
    <div className="services-page">
      <h2>Наши услуги</h2>

      {/* Элементы управления фильтрацией */}
      <div className="filter-controls">
        <label>
          Тип услуги:
          <select value={type} onChange={(e) => filterByType(e.target.value)}>
            <option value="all">Все</option>
            <option value="прогулки">Прогулки</option>
            <option value="обучение">Обучение</option>
            <option value="фотосессии">Фотосессии</option>
            <option value="экскурсии">Экскурсии</option>
            <option value="сертификаты">Сертификаты</option>
          </select>
        </label>

        <label>
          Диапазон цен:
          <input
            type="range"
            min="0"
            max="2000"
            step="100"
            value={priceRange[1]}
            onChange={(e) => filterByPrice([0, Number(e.target.value)])}
          />
          {priceRange[1]} руб.
        </label>

        <label>
          Сортировать по цене:
          <select value={sortOrder} onChange={(e) => sortServices(e.target.value)}>
            <option value="asc">По возрастанию</option>
            <option value="desc">По убыванию</option>
          </select>
        </label>
      </div>

      {/* Отображение услуг */}
      <ul className="services-list">
        {filteredServices.map((service) => (
          <li key={service.id}>
            <h3>{service.name}</h3>
            <p>
              Цена:{' '}
              {Array.isArray(service.price)
                ? service.price.map((p, i) => (i > 0 ? ` или ${p} руб.` : `${p} руб.`))
                : `${service.price} руб.`}
            </p>
          </li>
        ))}
      </ul>

      {/* Фотогалерея */}
      <Gallery />
    </div>
  );
};

export default ServicesPage;
