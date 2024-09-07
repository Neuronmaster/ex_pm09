import React from 'react';

import Slider from '../components/Slider';

import Events from '../components/Events';
const HomePage = () => {
  return (
    <div>
    <h1>Добро пожаловать в конный клуб</h1>
    <h1>Краткое описание клуба</h1>
      <Slider />
      <Events />
    </div>
  );
};
export default HomePage;