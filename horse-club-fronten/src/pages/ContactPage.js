// src/pages/ContactPage.js
import React from 'react';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h2>Контактная информация</h2>
      <p>Адрес: Московская область, село Зеленое, ул. Первомайская, 77</p>
      <p>Телефон: +7 922 525 07 07</p>
      <p>Электронная почта: info@horseclub.ru</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243648.97337904882!2d37.48720639829722!3d55.74019856758766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab8a7c70e8d1d%3A0x935ba226aa25c7c!2sMoscow%2C%20Russia!5e0!3m2!1sen!2s!4v1602346564107!5m2!1sen!2s"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Location Map"
      ></iframe>
    </div>
  );
};

export default ContactPage;
