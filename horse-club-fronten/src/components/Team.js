// src/components/Team.js
import React from 'react';

const team = [
  {
    name: 'Белова Светлана',
    bio: 'Опыт работы с лошадьми более 15 лет. Училась в Московской конно-спортивной школе.',
  },
  {
    name: 'Вольхина Александра',
    bio: 'Работает с лошадьми более 12 лет. Училась в Московской школе наездников. Тренер-наездник лошадей, инструктор верховой езды. Квалификации: наездник 3 категории.',
  },
  {
    name: 'Лекомцев Роман',
    bio: 'Опыт работы с лошадьми более 15 лет.',
  },
];

const Team = () => {
  return (
    <div className="team">
      <h2>Наша команда</h2>
      <ul>
        {team.map((member, index) => (
          <li key={index}>
            <h3>{member.name}</h3>
            <p>{member.bio}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Team;
