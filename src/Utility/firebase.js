// npm i firebase
// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
//auth

import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2I2fo6cHxuQrHCdSm6NPJ5KKa5-rL4aM",
  authDomain: "clone-da067.firebaseapp.com",
  projectId: "clone-da067",
  storageBucket: "clone-da067.appspot.com",
  messagingSenderId: "919197810654",
  appId: "1:919197810654:web:554ccec0dae81cba39a74f",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = app.firestore();
