// horse-club-backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Подключение к базе данных MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB подключен'))
  .catch(err => console.error('Ошибка подключения к MongoDB:', err));

// Пример маршрута
app.get('/', (req, res) => {
  res.send('Добро пожаловать в API Конного клуба!');
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});

const serviceRoutes = require('./routes/services');

app.use('/api/services', serviceRoutes);
