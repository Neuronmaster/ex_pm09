// src/pages/EventsPage.js
import React, { useState } from 'react';
import EventDetails from '../components/EventDetails'; // Компонент для отображения подробной информации
import BookingForm from '../components/BookingForm'; // Компонент для записи на мероприятие
import './EventsPage.css'; // Стили для страницы мероприятий

const events = [
  {
    id: 1,
    title: 'Всероссийские соревнования по конкуру',
    date: '2024-09-01',
    description: 'Соревнования для всадников на лошадях буденовской и донской породы.',
  },
  {
    id: 2,
    title: 'Кубок Республики Татарстан по выездке',
    date: '2024-09-06',
    description: 'Мероприятие с участием лучших наездников Республики Татарстан.',
  },
  {
    id: 3,
    title: 'Осенний Кубок КСК «Дивный» по конкуру',
    date: '2024-09-21',
    description: 'Соревнования для любителей конкура в КСК «Дивный».',
  },
  {
    id: 4,
    title: 'Региональные соревнования по выездке',
    date: '2024-09-30',
    description: 'Ежегодные региональные соревнования по выездке.',
  },
];

const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isBooking, setIsBooking] = useState(false);

  // Обработчик выбора мероприятия
  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setIsBooking(false);
  };

  // Обработчик записи на мероприятие
  const handleBooking = () => {
    if (selectedEvent) {
      setIsBooking(true);
    }
  };

  return (
    <div className="events-page">
      <h2>Календарь предстоящих мероприятий</h2>
      <ul className="events-list">
        {events.map((event) => (
          <li key={event.id} className="event-item" onClick={() => handleSelectEvent(event)}>
            <h3>{event.title}</h3>
            <p>Дата: {new Date(event.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>

      {/* Подробная информация о мероприятии */}
      {selectedEvent && !isBooking && (
        <EventDetails event={selectedEvent} onBook={handleBooking} />
      )}

      {/* Форма для записи на мероприятие */}
      {isBooking && selectedEvent && <BookingForm event={selectedEvent} />}
    </div>
  );
};

export default EventsPage;
