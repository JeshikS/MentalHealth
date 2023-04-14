import React, { useState } from 'react';
import '../css/main.css';
import '../css/Login.css';
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js'
import { auth } from '../firebase.js';
import { NavLink, useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/home")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
  return (
    <main>
        <NavBar/>
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
                        placeholder='E-mail'    
                    />
                    <span />
                    <label htmlFor="email">
                        E-mail
                    </label>
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
                    <label htmlFor="password">
                        Password
                    </label>
                </div>
                <div>
                    <button 
                        htmlFor="login" 
                        onClick={onLogin}
                    >
                        Login
                    </button>
                </div>
                <div className="member">
                    <p>
                        New Here? 
                        <NavLink to="../pages/Register">
                            Sign Up
                        </NavLink>
                    </p>
                </div>
            </form>
        </div>
        <Footer/>
    </main>
  )
}
}
