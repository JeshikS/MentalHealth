import React from 'react';
import '../css/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { NavLink, useNavigate } from 'react-router-dom';
window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY>0)
})
function NavBar(){
    return(
        <>
            <nav>
                <div className="container">
                    <a href="Home.html">MentalHealth</a>
                    <ul className="menu">
                        <li><NavLink to="./pages/Journal">Journal</NavLink></li>
                        <li><NavLink to="./pages/Activity">Activity</NavLink></li>
                        <li><NavLink ro="./pages/Media">Videos</NavLink></li>
                        <li><NavLink to="./pages/Reminders">Reminders</NavLink></li>
                        <li><NavLink to="./pages/Services">Sservices</NavLink></li>
                    </ul>
                    <ul className="menu">
                        <li><NavLink to="./pages/Register">Sign Up</NavLink></li>
                        <li><NavLink to="./pages/Login">Login</NavLink></li>
                        <li><NavLink to="./pages/Profile"><FontAwesomeIcon icon={faUserAlt} /></NavLink></li>
                    </ul>
                    <button htmlFor="open-menu-btn"><i className="uil uil-bars" /></button>
                    <button htmlFor="close-menu-btn"><i className="uil uil-multiply" /></button>
                </div>
            </nav>
        </>

    )
}

export default NavBar;