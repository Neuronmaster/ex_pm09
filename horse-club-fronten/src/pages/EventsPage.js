// src/pages/EventsPage.js
import React from 'react';
import EventsCalendar from '../components/EventsCalendar';

const EventsPage = () => {
  return (
    <div className="events-page">
      <h2>Календарь мероприятий</h2>
      <EventsCalendar />
    </div>
  );
};

export default EventsPage;
