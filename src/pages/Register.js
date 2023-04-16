import React, { useState } from "react";
import "../css/main.css";
import "../css/Register.css";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
import { auth, getDatabase } from "../firebase.js";
function Register() {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [mobile, setMobilenumber] = useState("");
  const [emailSignup, setEmailSignup] = useState("");
  const [passwordSignup, setPasswordSignup] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, emailSignup, passwordSignup)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setEmailSignup("");
        setPasswordSignup("");
        console.log(errorCode, errorMessage);
        alert(errorMessage);
      });
  };
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
      <div className="registeruser">
        <form>
          <h1>Register</h1>
          <div className="txt">
            <input
              type="text"
              required
              label="name1"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <span />
            <label htmlFor="name1">First Name</label>
          </div>
          <div className="txt">
            <input
              type="text"
              required
              label="name2"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <span />
            <label htmlFor="name2">Last Name</label>
          </div>
          <div className="txt">
            <input
              type="text"
              required
              label="user"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <span />
            <label htmlFor="user">Username</label>
          </div>
          <div className="txt">
            <input
              type="text"
              required
              label="mobno"
              value={mobile}
              onChange={(e) => setMobilenumber(e.target.value)}
            />
            <span />
            <label htmlFor="mobno">Mobile Number</label>
          </div>
          <div className="txt">
            <input
              type="text"
              required
              label="email"
              value={emailSignup}
              onChange={(e) => setEmailSignup(e.target.value)}
            />
            <span />
            <label htmlFor="email">E-mail</label>
          </div>
          <div className="txt">
            <input
              type="password"
              required
              label="password"
              value={passwordSignup}
              onChange={(e) => setPasswordSignup(e.target.value)}
            />
            <span />
            <label htmlFor="password">Password</label>
          </div>
          <div>
            <button type="submit" htmlFor="register" onClick={onSubmit}>
              Sign Up
            </button>
          </div>
          <div className="member">
            <p>
              Already a member? {"  "}
              <NavLink to="./Login">Login</NavLink>
            </p>
          </div>
        </form>
      </div>
      <footer className="footer">
        <div className="container footer_container">
          <div className="items">
            <h3>Contact Us</h3>
            <Link to="#">
              <i className="fas fa-phone" /> +91 9876543210
            </Link>
            <br />
            <Link to="mailto:deshpande007123@gmail.com">
              <i className="fas fa-envelope" /> abc@gmail.com
            </Link>
            <br />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Register;
