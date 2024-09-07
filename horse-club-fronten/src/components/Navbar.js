// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/services">Услуги</Link></li>
        <li><Link to="/about">О клубе</Link></li>
        <li><Link to="/events">Мероприятия</Link></li>
        <li><Link to="/contact">Контакты</Link></li>
        <li><Link to="/profile">Личный кабинет</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
