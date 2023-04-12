import React from 'react';
import '../css/main.css';
import '../css/Register.css';

export default function Register() {
  return (
    <>
        <div className="registeruser">
            <form action="#" method="post" onsubmit="signup()">
                <h1>Register</h1>
                <div className="txt">
                    <input type="text" id="name1" required />
                    <span />
                    <label id="name1">First Name</label>
                </div>
                <div className="txt">
                    <input type="text" id="name2" required />
                    <span />
                    <label id="name2">Last Name</label>
                </div>
                <div className="txt">
                    <input type="text" id="user" required />
                    <span />
                    <label id="user">Username</label>
                </div>
                <div className="txt">
                    <input type="text" id="mobno" required />
                    <span />
                    <label id="mobno">Mobile Number</label>
                </div>
                <div className="txt">
                    <input type="text" id="email" required />
                    <span />
                    <label id="email">E-mail</label>
                </div>
                <div className="txt">
                    <input type="password" id="password" required />
                    <span />
                    <label id="password">Password</label>
                </div>
                <button id="register" value="Sign Up">Sign Up</button>
                <div className="member">
                    <p>Already a member? <a href="Login.html">Login</a></p>
                </div>
            </form>
        </div>
    </>
  )
}
