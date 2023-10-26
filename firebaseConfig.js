// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsaWuCpalUFDVBcoY9SlAnUhqURwGUrjw",
  authDomain: "fashin-buzz.firebaseapp.com",
  projectId: "fashin-buzz",
  storageBucket: "fashin-buzz.appspot.com",
  messagingSenderId: "447486809473",
  appId: "1:447486809473:web:9bfb7fe61cd8cae42b0480",
  measurementId: "G-TWZ9G816YT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);