// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Импортируем стили для Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/">Главная</Link></li>
        <li className="navbar-item"><Link to="/services">Услуги</Link></li>
        <li className="navbar-item"><Link to="/about">О клубе</Link></li>
        <li className="navbar-item"><Link to="/events">Мероприятия</Link></li>
        <li className="navbar-item"><Link to="/contact">Контакты</Link></li>
        <li className="navbar-item"><Link to="/profile">Личный кабинет</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
