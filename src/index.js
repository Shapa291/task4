import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyBklgbYKfsJvSjIjENDgtMmnLDdgi6Ke38",
  authDomain: "task4-70450.firebaseapp.com",
  projectId: "task4-70450",
  storageBucket: "task4-70450.appspot.com",
  messagingSenderId: "703502022322",
  appId: "1:703502022322:web:35b8609a44457f19b77bab",
  measurementId: "G-KY4DEXXC72"
});

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore();

ReactDOM.render(
  <Context.Provider value={{
      firebase,
      auth,
      firestore
  }}>
      <App />
    </Context.Provider>,
  document.getElementById('root')
);
