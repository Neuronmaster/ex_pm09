// src/pages/UserProfile.js
import React, { useEffect, useState } from 'react';
import './UserProfile.css'; // Подключаем стили для личного кабинета

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [records, setRecords] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Загрузка данных пользователя и его записей
    const fetchUserData = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await fetch('http://localhost:5000/api/user', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (!response.ok) {
          throw new Error('Ошибка загрузки данных');
        }

        const data = await response.json();
        setUserData(data.user);
        setRecords(data.records);
        setFormData({ name: data.user.name, email: data.user.email });
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
        setError('Не удалось загрузить данные. Попробуйте снова.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/user', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Ошибка при сохранении данных');
      }

      setEditMode(false);
      setUserData({ ...userData, ...formData });
    } catch (error) {
      console.error('Ошибка при сохранении данных:', error);
      setError('Не удалось сохранить изменения.');
    }
  };

  if (loading) {
    return <p>Загрузка данных...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div className="user-profile">
      <h2>Личный кабинет</h2>
      {userData ? (
        <div>
          <div className="user-info">
            {editMode ? (
              <>
                <label>
                  Имя:
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Электронная почта:
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </label>
                <button onClick={handleSave}>Сохранить</button>
              </>
            ) : (
              <>
                <p>Имя: {userData.name}</p>
                <p>Электронная почта: {userData.email}</p>
                <button onClick={() => setEditMode(true)}>Редактировать</button>
              </>
            )}
          </div>
          <h3>История записей и мероприятий</h3>
          <ul className="records-list">
            {records.map((record) => (
              <li key={record.id}>
                <p>Мероприятие: {record.title}</p>
                <p>Дата: {new Date(record.date).toLocaleDateString()}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Данные пользователя не найдены.</p>
      )}
    </div>
  );
};

export default UserProfile;
