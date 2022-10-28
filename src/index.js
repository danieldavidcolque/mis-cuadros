import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//FIREBASE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1mZoHqgXqothvtjJ98_zCpwmGzzhP7AU",
  authDomain: "miscuadros-ecommerce.firebaseapp.com",
  projectId: "miscuadros-ecommerce",
  storageBucket: "miscuadros-ecommerce.appspot.com",
  messagingSenderId: "341178236153",
  appId: "1:341178236153:web:5d4913a0321b9086b3b628"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
