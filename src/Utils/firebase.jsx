// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5he8t9MpalK5r1Rmast2ps4CCD1n-EAU",
  authDomain: "netflixgpt-f1c12.firebaseapp.com",
  projectId: "netflixgpt-f1c12",
  storageBucket: "netflixgpt-f1c12.firebasestorage.app",
  messagingSenderId: "60298949095",
  appId: "1:60298949095:web:a5d48a2e9c7ea26f168d42",
  measurementId: "G-PHJSMS1LXL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();