import React from 'react';
import './App.css';
import NavBar from './pages/NavBar';
import Footer from './pages/Footer';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
function App() {
    return (
        <>
            <NavBar />
            <Register />
            <Login />
            <Home />
            <Footer />
        </>
    );
}

export default App;
