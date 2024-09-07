// server.js

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./models/User'); // Убедитесь, что путь к модели правильный

const app = express();
app.use(cors());
app.use(bodyParser.json());

const JWT_SECRET = 'your_jwt_secret'; // Используйте более сложный секрет для продакшн среды
const PORT = process.env.PORT || 5001; // Изменен порт на 5001

// Middleware для аутентификации
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).send('Нет токена');

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).send('Неверный токен');
  }
};

// Пример маршрута для регистрации
app.post('/api/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.status(201).send({ message: 'Пользователь зарегистрирован' });
  } catch (error) {
    res.status(500).send({ error: 'Ошибка при регистрации пользователя' });
  }
});

// Пример маршрута для авторизации
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).send({ error: 'Неверные учетные данные' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send({ error: 'Неверные учетные данные' });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
    res.send({ token });
  } catch (error) {
    res.status(500).send({ error: 'Ошибка при авторизации' });
  }
});

// Пример защищенного маршрута для получения данных пользователя
app.get('/api/user', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).send({ error: 'Пользователь не найден' });
    }
    // Пример получения записей пользователя (добавьте реальную логику получения данных)
    const records = []; // Замените на реальное получение записей
    res.send({ user, records });
  } catch (error) {
    res.status(500).send({ error: 'Ошибка при получении данных пользователя' });
  }
});

// Подключение к MongoDB без устаревших опций
mongoose.connect('mongodb://127.0.0.1:27017/horse-club')
  .then(() => {
    console.log('Подключено к базе данных MongoDB');
    app.listen(PORT, () => {
      console.log(`Сервер запущен на порту ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Ошибка подключения к базе данных', err);
  });
