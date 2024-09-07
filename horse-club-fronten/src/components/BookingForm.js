// src/components/BookingForm.js
import React, { useState } from 'react';
import './BookingForm.css'; // Подключаем стили для формы

const BookingForm = ({ event }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: event ? event.date : '', // Используем дату из event, если есть
    time: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Ошибка при отправке формы');
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
      setErrorMessage('Не удалось отправить данные. Пожалуйста, попробуйте еще раз.');
    }
  };

  if (isSubmitted) {
    return <p>Запись успешно отправлена! Проверьте свою почту для подтверждения.</p>;
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Запись на {event ? event.title : 'мероприятие'}</h2>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <label>
        Имя:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Электронная почта:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Дата:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          disabled={!!event} // Отключаем изменение даты, если это мероприятие
        />
      </label>
      <label>
        Время:
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Записаться</button>
    </form>
  );
};

export default BookingForm;
