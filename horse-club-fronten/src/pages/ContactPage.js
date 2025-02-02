// src/pages/ContactPage.js
import React from 'react';
import ContactForm from '../components/ContactForm'; // Форма обратной связи
import mapImage from '../assets/map.png'; // Путь к карте
import planImage from '../assets/plan.jpg'; // Путь к плану клуба
import './ContactPage.css'; // Стили для страницы контактов

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h2>Контактная информация</h2>
      <div className="contact-info">
        <p>Адрес: Московская область, село Зеленое, ул. Первомайская, 77</p>
        <p>Телефон: +7 922 525 07 07</p>
        <p>Электронная почта: info@horseclub.ru</p>
      </div>

      {/* Фотографии и интерактивная карта */}
      <div className="images-and-map">
        <div className="images">
          <img src={mapImage} alt="Карта местоположения" className="contact-image" />
          <img src={planImage} alt="План клуба" className="contact-image" />
        </div>
        <div className="map-container">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243648.97337904882!2d37.48720639829722!3d55.74019856758766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab8a7c70e8d1d%3A0x935ba226aa25c7c!2sMoscow%2C%20Russia!5e0!3m2!1sen!2s!4v1602346564107!5m2!1sen!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Форма обратной связи */}
      <ContactForm />
    </div>
  );
};

export default ContactPage;
