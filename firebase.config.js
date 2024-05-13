// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1k7dRHuoCFXxeJfdoPpMAbDOz-cvSppY",
  authDomain: "soleil-e-commerce.firebaseapp.com",
  projectId: "soleil-e-commerce",
  storageBucket: "soleil-e-commerce.appspot.com",
  messagingSenderId: "510246178894",
  appId: "1:510246178894:web:b47eeb917e428a7cb2331f",
  measurementId: "G-QVJ20802JN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
