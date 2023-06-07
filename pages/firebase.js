// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdwiiDZ0GFR_W2hi_bRhjpvkfHp43C_6U",
  authDomain: "loginapp-99e5c.firebaseapp.com",
  projectId: "loginapp-99e5c",
  storageBucket: "loginapp-99e5c.appspot.com",
  messagingSenderId: "1042778593051",
  appId: "1:1042778593051:web:d34410274c1d3d7bffe5be",
  measurementId: "G-ZTBYX121KN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);