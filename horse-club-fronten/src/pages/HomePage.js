// src/pages/HomePage.js
import React from 'react';
import Slider from '../components/Slider';
import Events from '../components/Events';
import Announcements from '../components/Announcements';

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Добро пожаловать в Конный клуб</h1>
      <p>Рады приветсвовать тебя в нашем конном клубе! Приходи и отдохни от суеты!</p>
      <Slider />
      <Events />
      <Announcements />
    </div>
  );
};

export default HomePage;
