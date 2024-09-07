
// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import ServicesPage from './pages/ServicesPage';
// import AboutPage from './pages/AboutPage';
// import EventsPage from './pages/EventsPage';
// import ContactPage from './pages/ContactPage';
// import UserProfile from './pages/UserProfile';
// import Navbar from './components/Navbar'; // Импортируем Navbar

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar /> {/* Добавляем компонент Navbar */}
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/services" element={<ServicesPage />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/events" element={<EventsPage />} />
//           <Route path="/contact" element={<ContactPage />} />
//           <Route path="/profile" element={<UserProfile />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
// src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import ServicesPage from './pages/ServicesPage';
// import AboutPage from './pages/AboutPage';
// import EventsPage from './pages/EventsPage';
// import ContactPage from './pages/ContactPage';
// import UserProfile from './pages/UserProfile';
// import BookingPage from './pages/BookingPage'; // Импортируем страницу с формой

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         {/* Здесь можно добавить Navbar для навигации */}
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/services" element={<ServicesPage />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/events" element={<EventsPage />} />
//           <Route path="/contact" element={<ContactPage />} />
//           <Route path="/profile" element={<UserProfile />} />
//           <Route path="/booking" element={<BookingPage />} /> {/* Добавьте маршрут для страницы записи */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import ContactPage from './pages/ContactPage';
import UserProfile from './pages/UserProfile';
import BookingPage from './pages/BookingPage'; // Импортируем страницу с формой
import Navbar from './components/Navbar'; // Импортируем навигационное меню

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Добавляем компонент Navbar для навигации */}
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Главная страница */}
          <Route path="/services" element={<ServicesPage />} /> {/* Услуги */}
          <Route path="/about" element={<AboutPage />} /> {/* О клубе */}
          <Route path="/events" element={<EventsPage />} /> {/* Мероприятия */}
          <Route path="/contact" element={<ContactPage />} /> {/* Контакты */}
          <Route path="/profile" element={<UserProfile />} /> {/* Личный кабинет */}
          <Route path="/booking" element={<BookingPage />} /> {/* Запись на занятия */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
