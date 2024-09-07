// src/components/Team.js
import React from 'react';
import belova from '../assets/belova.jpg';
import volhina from '../assets/volhina.jpg';
import lekomcev from '../assets/lekomcev.jpg';
import './Team.css'; // Подключаем стили для команды

const team = [
  {
    name: 'Белова Светлана',
    bio: 'Опыт работы с лошадьми более 15 лет. Училась в Московской конно-спортивной школе.',
    image: belova,
  },
  {
    name: 'Вольхина Александра',
    bio: 'Работает с лошадьми более 12 лет. Училась в Московской школе наездников. Тренер-наездник лошадей, инструктор верховой езды. Квалификации: наездник 3 категории.',
    image: volhina,
  },
  {
    name: 'Лекомцев Роман',
    bio: 'Опыт работы с лошадьми более 15 лет.',
    image: lekomcev,
  },
];

const Team = () => {
  return (
    <div className="team">
      <h2>Наша команда</h2>
      <ul className="team-list">
        {team.map((member, index) => (
          <li key={index} className="team-member">
            <div
              className="team-photo-container"
              style={{ backgroundImage: `url(${member.image})` }}
            />
            <h3>{member.name}</h3>
            <p>{member.bio}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Team;
