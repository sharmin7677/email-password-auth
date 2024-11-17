// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuhiOVELj1CtaueVwT-zuy5X4FIgkwAmE",
  authDomain: "email-password-auth-d4868.firebaseapp.com",
  projectId: "email-password-auth-d4868",
  storageBucket: "email-password-auth-d4868.firebasestorage.app",
  messagingSenderId: "270099109724",
  appId: "1:270099109724:web:adc52e92e65ec9320c9399"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth