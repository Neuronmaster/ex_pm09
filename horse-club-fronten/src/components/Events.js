// src/components/Events.js
import React from 'react';

const events = [
  {
    date: '01 сентября 2024',
    title: 'Всероссийские физкультурные соревнования по конкуру',
    description: 'Соревнования для всадников на лошадях буденовской и донской породы "Золотой пьедистал".',
  },
  {
    date: '06 сентября 2024',
    title: 'Кубок Республики Татарстан по выездке',
    description: '',
  },
  {
    date: '21 сентября 2024',
    title: 'Осенний Кубок КСК «Дивный» по конкуру',
    description: '',
  },
  {
    date: '30 сентября 2024',
    title: 'Региональные соревнования по выездке',
    description: '',
  },
];

const Events = () => {
  return (
    <div className="events">
      <h2>Предстоящие мероприятия</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <strong>{event.date}:</strong> {event.title} - {event.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;
