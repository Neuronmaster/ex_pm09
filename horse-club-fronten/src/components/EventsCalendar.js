// src/components/EventsCalendar.js
import React from 'react';

const events = [
  { date: '2024-09-01', title: 'Всероссийские соревнования по конкуру' },
  { date: '2024-09-06', title: 'Кубок Республики Татарстан по выездке' },
  { date: '2024-09-21', title: 'Осенний Кубок КСК «Дивный» по конкуру' },
  { date: '2024-09-30', title: 'Региональные соревнования по выездке' },
];

const EventsCalendar = () => {
  return (
    <ul className="events-calendar">
      {events.map((event, index) => (
        <li key={index}>
          <strong>{event.date}:</strong> {event.title}
        </li>
      ))}
    </ul>
  );
};

export default EventsCalendar;
