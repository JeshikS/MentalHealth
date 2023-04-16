import React, { useState } from "react";
import "../css/main.css";
import "../css/Login.css";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
import { auth, database } from "../firebase.js";
import { NavLink, useNavigate } from "react-router-dom";
import { ref, update } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js"
export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        const user = auth.currentUser;
        const db = database;
        update(ref(db, 'users/'+user.uid),{
          last_login:Date(Date.now()).toString()
        })
        alert("Signed in Successfully");
        navigate("/questions")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert(errorMessage);
      });
  };
  return (
    <>
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
              <NavLink to="/Register"> Sign Up</NavLink>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
