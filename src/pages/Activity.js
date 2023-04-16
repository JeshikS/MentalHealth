import React from 'react'
import '../css/main.css'
import '../css/Activity.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router-dom";

export default function Activity() {
  return (
    <div>
        <nav>
        <div className="container">
          <NavLink to="/home" replace={true}>
            Mental Health{" "}
          </NavLink>
          <ul className="menu">
            <li>
              <NavLink to="/Journal" replace={true}>
                Journal
              </NavLink>
            </li>
            <li>
              <NavLink to="/Activity" replace={true}>
                Activity
              </NavLink>
            </li>
            <li>
              <NavLink ro="/Media" replace={true}>
                Videos
              </NavLink>
            </li>
            <li>
              <NavLink to="/Reminders" replace={true}>
                Reminders
              </NavLink>
            </li>
            <li>
              <NavLink to="/Services" replace={true}>
                Services
              </NavLink>
            </li>
          </ul>
          <ul className="menu">
            <li>
              <NavLink to="/Register" replace={true}>
                Sign Up
              </NavLink>
            </li>
            <li>
              <NavLink to="/Login" replace={true}>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/Profile" replace={true}>
                <FontAwesomeIcon icon={faUserAlt} />
              </NavLink>
            </li>
          </ul>
          <button id="open-menu-btn">
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
          </button>
          <button id="close-menu-btn">
            <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
          </button>
        </div>
      </nav>
      <footer className="footer">
                <div className="container footer_container">
                    <div className="items">
                        <h3>Contact Us</h3>
                        <Link to="#"><i className="fas fa-phone" /> +91 9876543210</Link><br />
                        <Link to="mailto:deshpande007123@gmail.com"><i className="fas fa-envelope" /> abc@gmail.com</Link><br />
                    </div>
                </div>
            </footer>
    </div>
  )
}
