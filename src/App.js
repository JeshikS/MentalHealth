import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route, Switch} from 'react-router-dom';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Journal from './pages/Journal';
import Activity from './pages/Activity';
import Media from './pages/Media';
import Profile from './pages/Profile';
import Questions from './pages/Questions';
import Reminders from './pages/Reminders';
import Services from './pages/Services';
function App() {
    return (
        <>  
            <div>
                <section>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
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
                </section>
            </div>
        </>
    );
}

export default App;
