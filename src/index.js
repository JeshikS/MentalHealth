import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';
import App from './App';
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
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  
                <Router>
                    <Routes>
                    <Route path="/" exact to element={<App/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/activity" element={<Activity/>}/>
                        <Route path="/reminders" element={<Reminders/>}/>
                        <Route path="/media" element={<Media/>}/>
                        <Route path="/services" element={<Services/>}/>
                        <Route path="/questions" element={<Questions/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/journal" element={<Journal/>}/>
                    </Routes>   
                </Router>
            
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
