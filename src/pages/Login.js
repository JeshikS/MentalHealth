import React, { useState } from "react";
import "../css/main.css";
import "../css/Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
import { auth } from "../firebase.js";
import { NavLink, useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/home");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <>
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
      <div className="userdata">
        <form action="#" method="post">
          <h1>Login</h1>
          <div className="txt">
            <input
              type="text"
              required
              label="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span />
            <label htmlFor="email">E-mail</label>
          </div>
          <div className="txt">
            <input
              type="password"
              required
              label="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span />
            <label htmlFor="password">Password</label>
          </div>
          <div>
            <button htmlFor="login" onClick={onLogin}>
              Login
            </button>
          </div>
          <div className="member">
            <p>
              New Here?
              <NavLink to="../pages/Register">Sign Up</NavLink>
            </p>
          </div>
        </form>
      </div>
      <footer className="footer">
                <div className="container footer_container">
                    <div className="items">
                        <h3>Contact Us</h3>
                        <Link to="#"><i className="fas fa-phone" /> +91 9876543210</Link><br />
                        <Link to="mailto:deshpande007123@gmail.com"><i className="fas fa-envelope" /> abc@gmail.com</Link><br />
                    </div>
                </div>
            </footer>
    </>
  );
}
