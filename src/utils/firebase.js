// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7bCAK4sNck0-fT6LWPi-uqmQ3IOtWN7Y",
  authDomain: "netflixgpt-ecc90.firebaseapp.com",
  projectId: "netflixgpt-ecc90",
  storageBucket: "netflixgpt-ecc90.appspot.com",
  messagingSenderId: "1088003559297",
  appId: "1:1088003559297:web:3b5598999a3a8676226280",
  measurementId: "G-8T9XXR8PJZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();