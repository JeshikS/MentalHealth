import React, { useState } from "react";
import "../css/main.css";
import "../css/Register.css";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
import { auth, database } from "../firebase.js";
import { set, ref } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js"
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
      .then(() => {
        const user = auth.currentUser;
        const db = database;
        set(ref(db, 'users/' + user.uid),{
          firstname:firstname,
          lastname:lastname,
          username:username,
          mobile:mobile,
          email:emailSignup,
          last_login:Date(Date.now()).toString()
        });
        alert("Successfully Registered");
        navigate("/login");
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
              <NavLink to="/Login">Login</NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
