// src/pages/AuthPage.js
import React, { useState } from 'react';
import './AuthPage.css'; // Стили для страницы аутентификации

const AuthPage = ({ onAuthSuccess }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
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
    const url = isRegistering ? '/api/register' : '/api/login';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Ошибка при отправке данных');
      }

      const data = await response.json();
      localStorage.setItem('token', data.token); // Сохранение JWT токена
      onAuthSuccess(); // Функция для перенаправления после успешной авторизации
    } catch (error) {
      setErrorMessage('Не удалось выполнить операцию. Пожалуйста, попробуйте еще раз.');
    }
  };

  return (
    <div className="auth-page">
      <h2>{isRegistering ? 'Регистрация' : 'Вход'}</h2>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <form className="auth-form" onSubmit={handleSubmit}>
        {isRegistering && (
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
        )}
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
          Пароль:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">{isRegistering ? 'Зарегистрироваться' : 'Войти'}</button>
      </form>
      <button onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering ? 'Уже есть аккаунт? Войти' : 'Нет аккаунта? Зарегистрироваться'}
      </button>
    </div>
  );
};

export default AuthPage;
