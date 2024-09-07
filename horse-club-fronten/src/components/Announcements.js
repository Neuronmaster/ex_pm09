// src/components/Announcements.js
import React from 'react';

const announcements = [
  {
    title: 'VIII Всероссийская выставка лошадей вятской породы "Золотая Вятка - 2024"',
    description: 'Главное породное событие в мире ВЯТОК.',
  },
  {
    title: 'Эко-продукты',
    description: 'Теперь Вы можете у нас не только отдохнуть, но и приобрести натуральные продукты, изготовленные жителями.',
  },
  {
    title: 'Светлая Масленица',
    description: 'Масленица - это прощание с зимой и встреча весны, несущей оживление в природе и солнечное тепло.',
  },
  {
    title: 'Праздник Ивана Купала',
    description: '6-7 июля нас с вами ждет один из самых мистических и красивых праздников Ивана Купала. Начало в 19:00.',
  },
];

const Announcements = () => {
  return (
    <div className="announcements">
      <h2>Анонсы предстоящих событий</h2>
      <ul>
        {announcements.map((announcement, index) => (
          <li key={index}>
            <strong>{announcement.title}:</strong> {announcement.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Announcements;
