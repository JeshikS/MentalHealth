import React from 'react'
import { auth } from "../firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js"
import { useNavigate } from "react-router-dom";
export default function Logout() {
    const navigate = useNavigate();
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          alert("uid", uid)
        } else {
          alert("user is logged out")
          navigate("/")
        }
      });
  return (
    <div>
      
    </div>
  )
}
