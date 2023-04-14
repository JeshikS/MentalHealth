import React, { useState } from 'react';
import '../css/main.css';
import '../css/Register.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js';
import { auth, getDatabase } from '../firebase.js'; 
import NavBar from './NavBar';
import Footer from './Footer';
function Register() {
    const navigate = useNavigate();
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [mobile, setMobilenumber] = useState('');
    const [emailSignup, setEmailSignup] = useState('');
    const [passwordSignup, setPasswordSignup] = useState('');
    const onSubmit=async(e)=>
    {
        e.preventDefault();
        await createUserWithEmailAndPassword(auth,emailSignup,passwordSignup)
        .then((result)=>
        {
            const user = result.user;
            console.log(user);
            navigate("/home");

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setEmailSignup('');
            setPasswordSignup('');
            console.log(errorCode, errorMessage);
            alert(errorMessage);
            // ..
        });
    }
  return (
  
    <div>
        <NavBar/>
        
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
                        placeholder='First Name'
                    />
                    <span />
                    <label htmlFor="name1">
                        First Name
                    </label>
                </div>
                <div className="txt">
                    <input 
                        type="text" 
                        required
                        label="name2"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        placeholder='Last Name' 
                    />
                    <span />
                    <label htmlFor="name2">
                        Last Name
                    </label>
                </div>
                <div className="txt">
                    <input 
                        type="text" 
                        required
                        label="user"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder='Username' 
                    />
                    <span />
                    <label htmlFor="user">
                        Username
                    </label>
                </div>
                <div className="txt">
                    <input 
                        type="text" 
                        required 
                        label="mobno"
                        value={mobile}
                        onChange={(e) => setMobilenumber(e.target.value)}
                        placeholder='Mobile Number'    
                    />
                    <span />
                    <label htmlFor="mobno">
                        Mobile Number
                    </label>
                </div>
                <div className="txt">
                    <input 
                        type="text" 
                        required 
                        label="email"
                        value={emailSignup}
                        onChange={(e) => setEmailSignup(e.target.value)}
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
                        value={passwordSignup}
                        onChange={(e) => setPasswordSignup(e.target.value)}    
                    />
                    <span />
                    <label htmlFor="password">
                        Password
                    </label>
                </div>
                <div>
                    <button
                        type="submit" 
                        htmlFor="register"
                        onClick={onSubmit} 
                    >
                        Sign Up
                    </button>
                </div>
                <div className="member">
                    <p>
                        Already a member? {'  '}
                        <NavLink to="./Login">
                            Login    
                        </NavLink>    
                    </p>
                </div>
            </form>
        </div>
       
        <Footer/>
    </div>
  )
}

export default Register;