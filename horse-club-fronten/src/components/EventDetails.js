// src/components/EventDetails.js
import React from 'react';
import './EventDetails.css'; // Стили для компонента

const EventDetails = ({ event, onBook }) => {
  return (
    <div className="event-details">
      <h3>Подробная информация о мероприятии</h3>
      <h4>{event.title}</h4>
      <p>Дата: {new Date(event.date).toLocaleDateString()}</p>
      <p>{event.description}</p>
      <button onClick={onBook}>Записаться на мероприятие</button>
    </div>
  );
};

export default EventDetails;
