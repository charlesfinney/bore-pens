// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBo3YhpcWj17o4vOHnIcQXpCEA44kgWsGA",
  authDomain: "bore-pens.firebaseapp.com",
  projectId: "bore-pens",
  storageBucket: "bore-pens.appspot.com",
  messagingSenderId: "78331679961",
  appId: "1:78331679961:web:8f5723833c5b6ba4629ac8",
  measurementId: "G-LQ3Y4MK4GL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);