// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRSXrOI95-M2ZtXhgW9i33crlHB4GnWBY",
  authDomain: "colwebcomp.firebaseapp.com",
  projectId: "colwebcomp",
  storageBucket: "colwebcomp.appspot.com",
  messagingSenderId: "944004021010",
  appId: "1:944004021010:web:f2ac52268fcdacfc4c51cb",
  measurementId: "G-DV2SFX4GLZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);