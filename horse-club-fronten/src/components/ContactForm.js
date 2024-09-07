// src/components/ContactForm.js
import React, { useState } from 'react';
import './ContactForm.css'; // Стили для формы

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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

    // Здесь можно добавить логику отправки данных на сервер или API
    try {
      // Пример отправки данных формы на сервер
      // const response = await fetch('http://localhost:5000/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });

      // if (!response.ok) {
      //   throw new Error('Ошибка при отправке сообщения');
      // }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Ошибка при отправке сообщения:', error);
      setErrorMessage('Не удалось отправить сообщение. Пожалуйста, попробуйте еще раз.');
    }
  };

  if (isSubmitted) {
    return <p>Ваше сообщение отправлено! Мы свяжемся с вами в ближайшее время.</p>;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3>Форма обратной связи</h3>
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
        Сообщение:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </label>
      <button type="submit">Отправить</button>
    </form>
  );
};

export default ContactForm;
