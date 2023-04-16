import React from 'react';
import './index.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Journal from './pages/Journal';
import Activity from './pages/Activity';
import Media from './pages/Media';
import Profile from './pages/Profile';
import Questions from './pages/Questions';
import Reminders from './pages/Reminders';
import Services from './pages/Services';
import Home from './pages/Home';
import Main from './pages/Main';

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/reminders" element={<Reminders />} />
          <Route path="/media" element={<Media />} />
          <Route path="/services" element={<Services />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>
      </Router>
    </div>
  );
}


 