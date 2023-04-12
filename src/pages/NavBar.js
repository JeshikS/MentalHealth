import React from 'react';
import '../css/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
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
                        <li><a href="Journal.html">Journal</a></li>
                        <li><a href="Activity.html">Activity</a></li>
                        <li><a href="Media.html">Videos</a></li>
                        <li><a href="Reminders.html">Reminders</a></li>
                        <li><a href="Services.html">Services</a></li>
                    </ul>
                    <ul className="menu">
                        <li><a href="Register.html">Sign Up</a></li>
                        <li><a href="Login.html">Login</a></li>
                        <li><a href="Profile.Html"><FontAwesomeIcon icon={faUserAlt} /></a></li>
                    </ul>
                    <button id="open-menu-btn"><i className="uil uil-bars" /></button>
                    <button id="close-menu-btn"><i className="uil uil-multiply" /></button>
                </div>
            </nav>
        </>

    )
}

export default NavBar;