import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { initializeApp } from "firebase/app";
import firebase from "firebase"


const firebaseConfig = {
  apiKey: "AIzaSyBklgbYKfsJvSjIjENDgtMmnLDdgi6Ke38",
  authDomain: "task4-70450.firebaseapp.com",
  projectId: "task4-70450",
  storageBucket: "task4-70450.appspot.com",
  messagingSenderId: "703502022322",
  appId: "1:703502022322:web:35b8609a44457f19b77bab",
  measurementId: "G-KY4DEXXC72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = firebase.auth();


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
