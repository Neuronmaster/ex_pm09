// src/components/BookingForm.js
import React, { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Логика отправки данных на сервер или API для подтверждения записи
    alert('Запись успешно отправлена!');
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Запись на занятия</h2>
      <input
        type="text"
        name="name"
        placeholder="Ваше имя"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Электронная почта"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <input
        type="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
      />
      <button type="submit">Записаться</button>
    </form>
  );
};

export default BookingForm;
