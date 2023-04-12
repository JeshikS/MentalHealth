import React from 'react'
import '../css/main.css';
import '../css/Login.css';
export default function Login() {
  return (
    <>
        <div className="userdata">
            <form action="#" method="post" onsubmit="login()">
                <h1>Login</h1>
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
                <button id="login" value="Login">Login</button>
                <div className="member">
                    <p>New Here? <a href="Register.html">Register</a></p>
                </div>
            </form>
        </div>
    </>
  )
}
