// src/pages/ContactPage.js
import React from 'react';
import map from '../assets/map.png';
import plan from '../assets/plan.jpg';
import './ContactPage.css'; // Подключаем стили для контактов

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h2>Контактная информация</h2>
      <p>Адрес: Московская область, село Зеленое, ул. Первомайская, 77</p>
      <p>Телефон: +7 922 525 07 07</p>
      <p>Электронная почта: info@horseclub.ru</p>
      <div className="contact-images">
        <img src={map} alt="Карта" className="contact-image" />
        <img src={plan} alt="План клуба" className="contact-image" />
      </div>
    </div>
  );
};

export default ContactPage;
