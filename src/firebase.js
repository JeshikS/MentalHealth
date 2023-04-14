import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
import { getDatabase, get, set, ref } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyBYEO8SOulB-g5wA046s9lNphrGGbBoYOM",
    authDomain: "signup-form-ce073.firebaseapp.com",
    projectId: "signup-form-ce073",
    storageBucket: "signup-form-ce073.appspot.com",
    messagingSenderId: "677257944117",
    appId: "1:677257944117:web:4c6fcfb5f4c26a1200e57c"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getDatabase(app);

export default app;