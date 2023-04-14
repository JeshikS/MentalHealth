import React from 'react';
import '../css/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom/dist';
window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY>0)
})
function NavBar(){
    return(
        <>
            <nav>
                <div className="container">
                <Link to="/" replace={true} >Mental Health </Link>
                    <ul className="menu">
                        <li><Link to="/Journal" replace={true}>Journal</Link></li>
                        <li><NavLink to="./pages/Activity">Activity</NavLink></li>
                        <li><NavLink ro="./pages/Media">Videos</NavLink></li>
                        <li><NavLink to="./pages/Reminders">Reminders</NavLink></li>
                        <li><NavLink to="./pages/Services">Sservices</NavLink></li>
                    </ul>
                    <ul className="menu">
                        <li><NavLink to="./Register">Sign Up</NavLink></li>
                        <li><NavLink to="./Login">Login</NavLink></li>
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